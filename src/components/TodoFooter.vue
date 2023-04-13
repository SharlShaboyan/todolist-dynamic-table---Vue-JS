<template>
   <div class="todo-footer">
        <h3>Completed {{completedsCount}} / {{listCount}} </h3>
        <button @click="clearCompleteds">Clear completeds</button>
   </div>
</template>

<script>
    export default {
       props : {
            list : {
                type : Array,
                required : true
            }
       },

       methods : {
            clearCompleteds() {
                this.$emit('clearCompleteds')
            }
       },

       computed: {
            listCount() {
                return this.list.length
            },

            completedsCount() {
                return this.list.filter(todo => todo.checked == true).length
            }
       }
    }
</script>

<style scoped>
    .todo-footer {
        width: 100%;
        margin-top: 5px;
        border: 2px solid black;
        padding: 20px;
    }

    .todo-footer > button, .todo-footer > h3 {
        display: inline-block;
    }

    .todo-footer > button {
        float: right;
        padding: 5px 15px;
        margin-top: -5px;
        background-color: black;
        color: white;
        cursor: pointer;
    }

    .todo-footer > button:hover {
         background-color: white;
         color: black;
    }
</style>