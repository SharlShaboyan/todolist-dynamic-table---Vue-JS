<template>
   <div class="todo-form">
        <input 
            v-model="todo.title"
            type="text" 
            placeholder="Write somthing..." />
        <button @click="addTodo">{{buttonText}}</button>
   </div>
</template>

<script>
    export default {
        props : {
            editedTitle : {
               required : true 
            }
        },

        data() {
            return {
                todo : {
                    title : ''
                },
                isActiveEdit : false,
                buttonText : "Add"
            }
        },     

        watch : {
            editedTitle(newF){
                this.todo = {
                    title : newF
                }
                this.isActiveEdit = true
                this.buttonText = "Edit"
            }
        },

        methods : {
            addTodo() {               
                if(this.isActiveEdit) {
                    this.$emit('updateTodo', this.todo.title)
                     this.todo = {
                        title : ''
                    }
                    this.isActiveEdit = false
                    this.buttonText = "Add"
                } else {
                    this.todo.id = Date.now()
                    this.$emit('create', this.todo)
                    this.todo = {
                        title : ''
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .todo-form {
        width: 100%;
        padding: 10px;
        border: 2px solid black;
    }

    .todo-form > input {
        padding: 5px;
        width: 80%;
    }

    .todo-form > button {
        padding: 5px;
        width: 20%;
        margin-left: 0px;
        cursor: pointer;
        background-color: black;
        color: white;
    }

    .todo-form > button:hover {
        background-color: white;
        color: black;
    }

</style>