<template>
   <button class="global-btn" @click="hundelEmit"><slot></slot></button>
</template>

<script>
    export default {
        name : 'global-button',
        methods: {
            hundelEmit () {
                this.$emit('clickHundler')
            }
        }
    }
</script>

<style scoped>
   .global-btn {
        padding: 5px 15px;
        margin-top: -5px;
        float: right;
        margin-right: 10px;
        background-color: black;
        color: white;
        cursor: pointer;
   }

   .global-btn:hover {
        background-color: white;
        color: black;
   }
</style>