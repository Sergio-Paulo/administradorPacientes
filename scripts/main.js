const { createApp } = Vue

const app = createApp({
    data() {
        return{
            formulario:''
        }

    },
    created() {
        this.probando()

    },
    mounted() {

    },
    methods: {
       probando(){
        
       }

    },
    computed: {

    }
})

app.mount('#app')