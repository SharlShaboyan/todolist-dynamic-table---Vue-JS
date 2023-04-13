<template>
    <slot name="default"></slot>

    <table class="container">
        <thead>
            <tr>
                <th v-if="isSelectable" class="header-title">
                    <span>
                        All
                        <input type="checkbox" v-model="isAllSelected" @change="changeAllSelecteds" /> <br />
                        <button @click="showSelecteds">Select</button>
                    </span>
                </th>
                <th v-for="(header, i) in new Array(listHeaders.length)" :key="i">
                    <h1 class="header-title" @click="sortItems(listHeaders[i].key)">{{ listHeaders[i].title }}</h1>
                    <input v-model="search[listHeaders[i].key]" type="text" placeholder="Search..."
                        @input="searchItem(search[listHeaders[i].key], i)" />
                </th>
                <!-- v-if="listHeaders[i].title == 'Item name'"  -->
                <th v-if="actions.length" class="td">Actions</th>
            </tr>
        </thead>

        <tbody v-if="list.length != 0">
            <template v-for="item in filteredList" :key="item.id">
                <tr>
                    <td v-if="isSelectable">
                        <input type="checkbox" v-model="item.selected" @change="changeSelecteds(item, item.selected)">
                    </td>

                    <td v-for="header in listHeaders" :key="header.key + item[header.key]">

                        <p class="item-name" :class="{ 'item-name-dynamic': itemNameStyle }">{{ item[header.key] }}</p>
                    </td>

                    <td>
                        <icon v-for="(action) in item.actions" :key="action.title" :icon=action.iconName class="action-btn"
                            @click="actionHundler(item, action)" />
                        <template v-if="downInfo">
                            <icon v-show="downIconToggle" icon="fa-solid fa-chevron-down" class="action-btn"
                                @click="toggleExpand(item.id)" />
                            <icon v-show="!downIconToggle" icon="fa-solid fa-chevron-up" class="action-btn"
                                @click="toggleExpand(item.id)" />
                        </template>

                        <icon icon="remove" class="action-btn" @click="showModalHundler(item.id)" />
                    </td>

                </tr>

                <tr v-if="item.showExpand" class="information">
                    <td :colspan="listHeaders.length + 2">{{ item.information }}</td>
                </tr>
            </template>

            <tr v-if="showTotals">
                <td v-if="isSelectable"></td>
                <td v-for="item in listHeaders" :key="item.id">
                    <p v-if="item.key == 'price'">{{ itemsTotalCount }}</p>
                </td>
                <td>Total</td>
            </tr>

        </tbody>

        <div v-if="currentPage.length == 0">List is empty</div>
        <slot name="test-esim"></slot>
    </table>

    <div class="pagination">
        <template v-for="item in pageCountList" :key="item.page">
            <button v-if="item.show" @click="otherPageHundler(item.page)">{{ item.page }}
            </button>
        </template>
    </div>

    <div class="delete-modal" v-if="showModal">
        <h4>Do you really want to delete this item?</h4>
        <button class="yes" @click="deleteItem">YES</button>
        <button class="no" @click="closeModal">NO</button>
    </div>
</template>

<script>
import tableMixin from '@/mixins/tableMixin'

export default {
    mixins: [tableMixin],

    name: 'global-table',
    props: {
        list: {
            type: Array,
            required: true
        },

        listHeaders: {
            type: Array,
            required: true
        },

        actions: {
            type: Array,
            required: true
        },

        showTotals: {},

        downInfo: {},

        isSelectable: {
            type: Boolean,
            required: false,
            default: true
        }
    },

    created() {
        this.tableData = this.list
        let loopStart = this.perPage * 0
        this.currentPage = this.tableData.slice(loopStart, loopStart + this.perPage)
    },

    data: () => {
        return {
            tableData: [],
            countInitialValue: 0,
            search: [
                { name: '' },
                { price: '' },
                { date: '' }
            ],
            searchingItem: null,
            searchInputIndex: null,
            currentPage: [],
            perPage: 3,
            activePage: 1,
            isAllSelected: false,
            selecteds: [],
            // showModal : false,
            activeItemId: null,
            itemNameStyle: false,
            sortedUp: false,
            downIconToggle: true
        }
    },

    methods: {
        doConsole(e) {
            console.log(e)
        },

        showSelecteds() {
            if (this.selecteds.length == 0) {
                alert("There is nothing selected")
            } else {
                alert(JSON.stringify(this.selecteds))
            }
        },

        changeSelecteds(item, check) {
            item.selected = check
            if (item.selected) {
                this.selecteds.push(item.name)
            } else {
                this.selecteds.pop()
                this.isAllSelected = false
            }
        },

        changeAllSelecteds() {
            if (!this.isAllSelected) {
                this.filteredList.forEach(item => item.selected = false)
                this.selecteds = []
            } else {
                this.filteredList.forEach(item => {
                    item.selected = true
                    this.selecteds.push(item.name)
                })
            }
        },

        otherPageHundler(index) {
            this.activePage = index
            this.currentPage = []
            index -= 1
            let loopStart = this.perPage * index
            this.currentPage = this.tableData.slice(loopStart, loopStart + this.perPage)
            index += 1
            if (index % 2 == 0) {
                this.itemNameStyle = true
            } else {
                this.itemNameStyle = false
            }
        },

        toggleExpand(id) {
            this.tableData = this.tableData.map(e => {
                if (e.id == id) {
                    e.showExpand = !e.showExpand
                }
                return e
            })
            this.downIconToggle = !this.downIconToggle
        },



        deleteItem() {
            this.currentPage = this.currentPage.filter(item => item.id !== this.activeItemId)
            this.showModal = false
        },

        sortItems(key) {
            if (this.sortedUp) {
                this.currentPage = this.currentPage.sort((a, b) => {
                    if (typeof (a[key]) == 'number') {
                        return a[key] - b[key]
                    } else {
                        return a[key].localeCompare(b[key])
                    }
                })
                this.sortedUp = false
            } else {
                this.currentPage = this.currentPage.sort((a, b) => {
                    if (typeof (a[key]) == 'number') {
                        return b[key] - a[key]
                    } else {
                        return b[key].localeCompare(a[key])
                    }
                })
                this.sortedUp = true
            }

        },

        searchItem(value, i) {
            this.searchingItem = this.listHeaders[i].key
            this.searchInputIndex = i
            this.search[i] = value
        },

        closeModal() {
            this.showModal = false
        },

        actionHundler(item, action, ref) {
            console.log(item)
            console.log(action)
            console.log(ref)

            if (action.iconName == "heart") {
                alert(JSON.stringify(item))
            }

        }
    },

    computed: {
        pageCountList() {
            let paginationBtns = []

            for (let i = 0; i < Math.ceil(this.tableData.length / 3); i++) {
                paginationBtns.push({
                    page: i + 1,
                    show: true
                })
            }

            let pagBtns2 = Object.assign([], paginationBtns)
            paginationBtns = pagBtns2.slice(0, 3)

            if (this.activePage >= this.perPage) {
                paginationBtns = pagBtns2.slice(this.activePage - 2, this.activePage + 1)
            }

            return paginationBtns


        },

        filteredList() {
            return this.currentPage.filter(item => {
                if (item[this.searchingItem]) {
                    if (typeof item[this.searchingItem] == undefined) {
                        return this.currentPage
                    } else if (typeof item[this.searchingItem] == 'string') {
                        return item[this.searchingItem].toLowerCase().includes(this.search[this.searchInputIndex].toLowerCase())
                    } else if (typeof item[this.searchingItem] == 'number') {
                        if (!this.search[this.searchInputIndex]) {
                            return this.currentPage
                        } else {
                            return item[this.searchingItem].toString().includes(this.search[this.searchInputIndex].toString())
                        }
                    }
                } else {
                    return this.currentPage
                }
            })
        },

        itemsTotalCount() {
            const prices = []
            this.filteredList.forEach(e => prices.push(e.price))

            return prices.reduce(
                (previousValue, currentValue) => previousValue + currentValue,
                this.countInitialValue
            );
        }
    },

    emits: []
}
</script>

<style scoped>
.container th h1,
.td {
    font-weight: bold;
    font-size: 1em;
    text-align: left;
    color: white;
}

.container td {
    font-weight: normal;
    color: white;
    font-size: 1em;
    -webkit-box-shadow: 0 2px 2px -2px #0E1119;
    -moz-box-shadow: 0 2px 2px -2px #0E1119;
    box-shadow: 0 2px 2px -2px #0E1119;
}

.container {
    text-align: left;
    overflow: hidden;
    width: 80%;
    margin: 25px auto;
    display: table;
    padding: 0 0 8em 0;
}

.container td,
.container th {
    padding-bottom: 2%;
    padding-top: 2%;
    padding-left: 2%;
}

.container tr:nth-child(odd) {
    background-color: #323C50;
}

.container tr:nth-child(even) {
    background-color: #2C3446;
}

.container th {
    background-color: #1F2739;
}

.container td:first-child {
    color: #12f0a6;
}

.search-input {
    margin-left: 597px;
    margin-top: 10px;
    padding: 10px;
    width: 300px;
}

.sort-icon,
.action-btn {
    margin-left: 20px;
    cursor: pointer;
    color: white;
}

.information {
    transition: all 2s linear;
}

.pagination {
    width: 80%;
    height: auto;
    margin: 0 auto;
    text-align: center;
}

.pagination>button,
.pagination>span>button,
.delete-modal>button {
    padding: 15px 20px;
    margin-left: 5px;
    cursor: pointer;
}

.pagination>button:focus {
    background-color: aquamarine;
}

.pagination-btn {
    display: inline-block;
}

.delete-modal {
    height: 200px;
    width: 400px;
    border: 2px solid black;
    background-color: lightgray;
    position: absolute;
    margin: -400px 400px;
    padding: 20px;
}

.delete-modal>.delete {
    float: right;
}

.delete-modal>h4 {
    margin-top: 40px;
}

.delete-modal>.yes,
.delete-modal>.no {
    margin-top: 40px;
    margin-left: 20px;
}

.item-name {
    display: inline-block;
    color: white;
    margin-left: 10px;
}

.item-name-dynamic {
    display: inline-block;
    color: red;
    margin-left: 10px;
}

.header-title {
    cursor: pointer;
    color: white;
}
</style>