export default {
    actions: {},
    mutations: {},
    state: {
        downInfo: true,

        listHeaders: [
            {
                title: 'Item name',
                key: 'name',
                sort: true
            },
            {
                title: 'Item price (USD)',
                key: 'price',
                sort: true
            },
            {
                title: 'Item Date',
                key: 'date',
                sort: false
            }
        ],

        list: [
            {
                id: 1,
                name: "DCutting blade",
                price: 1,
                date: 1965,
                actions: [
                    {
                        title: 'heart',
                        iconName: 'heart'
                    }
                ],
                information: "Cutting blade information"
            },
            {
                id: 2,
                name: "BIPhone 13",
                price: 2,
                date: 1999,
                actions: [
                    {
                        title: 'remove',
                        iconName: 'remove'
                    }
                ],
                information: "IPhone 13 information"
            },
            {
                id: 3,
                name: "AMacbook pro",
                price: 3,
                showInfo: false,
                date: 2005,
                actions: [
                    {
                        title: 'like',
                        iconName: 'heart'
                    }
                ],
                information: "Macbook pro information"
            },
            {
                id: 4,
                name: "CPlayStation 4",
                price: 4,
                showInfo: false,
                date: 2017,
                actions: [
                    {
                        title: 'sort',
                        iconName: 'sort'
                    }
                ],
                information: "PlayStation 4 information"
            },
            {
                id: 5,
                name: "CPlayStation 5",
                price: 5,
                showInfo: false,
                date: 2017,
                actions: [
                    {
                        title: 'sort',
                        iconName: 'sort'
                    }
                ],
                information: "PlayStation 5 information"
            },
            {
                id: 6,
                name: "CPlayStation 6",
                price: 6,
                showInfo: false,
                date: 2017,
                actions: [
                    {
                        title: 'sort',
                        iconName: 'sort'
                    }
                ],
                information: "PlayStation 6 information"
            },
            {
                id: 7,
                name: "CPlayStation 7",
                price: 7,
                showInfo: false,
                date: 2017,
                actions: [
                    {
                        title: 'sort',
                        iconName: 'sort'
                    }
                ],
                information: "PlayStation 6 information"
            },
            {
                id: 8,
                name: "CPlayStation 8",
                price: 8,
                showInfo: false,
                date: 2017,
                actions: [
                    {
                        title: 'sort',
                        iconName: 'sort'
                    }
                ],
                information: "PlayStation 6 information"
            },
            {
                id: 9,
                name: "CPlayStation 9",
                price: 9,
                showInfo: false,
                date: 2017,
                actions: [
                    {
                        title: 'sort',
                        iconName: 'sort'
                    }
                ],
                information: "PlayStation 6 information"
            },
            {
                id: 10,
                name: "CPlayStation 10",
                price: 10,
                showInfo: false,
                date: 2017,
                actions: [
                    {
                        title: 'sort',
                        iconName: 'sort'
                    }
                ],
                information: "PlayStation 6 information"
            },
            {
                id: 11,
                name: "CPlayStation 11",
                price: 11,
                showInfo: false,
                date: 2017,
                actions: [
                    {
                        title: 'sort',
                        iconName: 'sort'
                    }
                ],
                information: "PlayStation 6 information"
            },
            {
                id: 12,
                name: "CPlayStation 12",
                price: 12,
                showInfo: false,
                date: 2017,
                actions: [
                    {
                        title: 'sort',
                        iconName: 'sort'
                    }
                ],
                information: "PlayStation 6 information"
            },
            {
                id: 13,
                name: "CPlayStation 13",
                price: 13,
                showInfo: false,
                date: 2017,
                actions: [
                    {
                        title: 'sort',
                        iconName: 'sort'
                    }
                ],
                information: "PlayStation 6 information"
            },
            {
                id: 14,
                name: "CPlayStation 14",
                price: 14,
                showInfo: false,
                date: 2017,
                actions: [
                    {
                        title: 'sort',
                        iconName: 'sort'
                    }
                ],
                information: "PlayStation 6 information"
            },
            {
                id: 15,
                name: "CPlayStation 15",
                price: 15,
                showInfo: false,
                date: 2017,
                actions: [
                    {
                        title: 'sort',
                        iconName: 'sort'
                    }
                ],
                information: "PlayStation 6 information"
            },
            {
                id: 16,
                name: "CPlayStation 16",
                price: 16,
                showInfo: false,
                date: 2017,
                actions: [
                    {
                        title: 'sort',
                        iconName: 'sort'
                    }
                ],
                information: "PlayStation 6 information"
            },
            {
                id: 17,
                name: "CPlayStation 17",
                price: 17,
                showInfo: false,
                date: 2017,
                actions: [
                    {
                        title: 'sort',
                        iconName: 'sort'
                    }
                ],
                information: "PlayStation 6 information"
            },
            {
                id: 18,
                name: "CPlayStation 18",
                price: 18,
                showInfo: false,
                date: 2017,
                actions: [
                    {
                        title: 'sort',
                        iconName: 'sort'
                    }
                ],
                information: "PlayStation 6 information"
            },
            {
                id: 19,
                name: "CPlayStation 19",
                price: 19,
                showInfo: false,
                date: 2017,
                actions: [
                    {
                        title: 'sort',
                        iconName: 'sort'
                    }
                ],
                information: "PlayStation 6 information"
            }
        ],

        actions: [
            {
                title: 'like',
                iconName: 'heart',
                methodName: 'deleteItem'
            }
        ]
    },

    getters: {
        getList(state) {
            return state.list
        },

        getListHeaders(state) {
            return state.listHeaders
        },

        getActions(state) {
            return state.actions
        },

        getDownInfo(state) {
            return state.downInfo
        }
    }
}



// let todos = [
//     { name : "Sovorel HTML" },
//     { name : "Sovorel CSS" },
//     { name : "Sovorel JS" }
// ]