export default {
    data() {
        return {
            showModal : false
        }
    },

    methods : {
        showModalHundler(id) {
            this.showModal = true
            this.activeItemId = id
        },
    }
}