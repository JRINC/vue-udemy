const app = Vue.createApp({
    data() {
        return {
            input: '',
            hideParagraph: false,
            userBGColor: ''
        };
    },
    computed: {
        setUserClass() {
            console.log(this.input);
            if (this.input === 'user1' || this.input === 'user2') {
                return this.input;
            }
        }
    },
    methods: {
        toggleParagraph() {
            this.hideParagraph = !this.hideParagraph;
        }
    }
});

app.mount('#assignment');