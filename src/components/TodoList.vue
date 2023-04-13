<template>
<div class="todo" v-if="list.length > 0" >
  <div class="todo-list" v-for="(todo, index) in list" :key="index">
    <div class="title">Title : <strong>{{todo.title}}</strong></div>
    <input type="checkbox" class="checkbox" v-model="todo.checked" @change="check(todo.checked, index)" />
    <global-button
        @click="deleteTodo(index)"
    > Delete </global-button>
    <global-button @clickHundler="editTodo(index)" >Edit</global-button>
    </div>
  </div>

  <div v-else>
    List is empty
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
            test() {
                console.log("dfdf")
            },
            editTodo(id) {
                this.$emit('editTodo', id)
            },

            deleteTodo(id) {
                this.$emit('deleteTodo', id)
            },

            check(check, id) {
                this.$emit('changeCheck', check, id)
            }
        }

    }
</script>

<style scoped>
    .todo {
        padding: 10px;
        width: 100%;
        border: 2px solid black;
        margin-top: 5px;
    }

    .todo-list {
        width: 100%;
        padding: 10px;
        border: 2px solid gray;
        margin-top: 10px;
    }

   .checkbox, .title {
        display: inline-block;
        margin-left: 15px;
        font-size: 20px;
   }
</style>