<template>
    <div>
        <todo-form 
            @create="addTodo"
            :editedTitle="editedTitle"
            @updateTodo="updateTodo"
        />
        <todo-list
            :list="this.list"
            @deleteTodo="deleteTodo"
            @changeCheck="changeCheck"
            @editTodo="editTodo"
        />
        <todo-footer
            :list="this.list"
            @clearCompleteds="clearCompleteds"
        />
    </div>
</template>

<script>
    import TodoForm from '@/components/TodoForm.vue';
    import TodoList from '@/components/TodoList.vue';
    import TodoFooter from '@/components/TodoFooter.vue';
    import axios from 'axios';

    export default { 
        components : { TodoForm, TodoList, TodoFooter },

        data() {
            return {
                list: [],
                editedTitle: null,
                activeID : null
            }
        },

        mounted() {
            this.getTodos()
            console.log(this.list)
        },

        watch: {
            editedTitle(newValue) {
                return newValue
            }
        },
       
        methods : {
            async getTodos() {
                try {
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
                    this.list = response.data
                    console.log(this.list)
                } catch (e) {
                    console.log(e)
                }
            },

            addTodo(todo) {
                this.list.push(todo)
                console.log(this.list)
            },

            editTodo(id) {
                this.editedTitle = this.list[id].title
                this.activeID = id
            },

            updateTodo(text) {
                this.list[this.activeID].title = text
            },

            deleteTodo(id) {
                this.list.splice(id, 1)
            },

            changeCheck(check, id) {
                this.list[id].checked = check
            },

            clearCompleteds() {
                this.list = this.list.filter(t => t.checked != true)
            }
        }
    }
</script>

<style>

</style>