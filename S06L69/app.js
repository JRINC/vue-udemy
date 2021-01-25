const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '01234 5678 991',
                    email: 'manuel@localhost.com'
                },
                {
                    id: 'joan',
                    name: 'Joan Jett',
                    phone: '09876 543 221',
                    email: 'julie@localhost.com'
                }
            ],
            // show: false
        }
    },
    methods: {
        // showDetails() {
        //     this.show = !this.show;
        // }
    }
});

app.component('friend-contact', {
    template: `
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">{{ !showDetails ? 'Show' : 'Hide' }} Details</button>
        <ul v-if="showDetails">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
    </li>
    `,
    data() {
        return {
            showDetails: false,
            friend: {
                id: 'joan',
                name: 'Joan Jett',
                phone: '09876 543 221',
                email: 'joan@localhost.com'
            }
        }
    },
    methods: {
        toggleDetails() {
            this.showDetails = !this.showDetails;
        }
    }
});

app.mount('#app');