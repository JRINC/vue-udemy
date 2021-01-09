const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      nameA: '',
      confirmedNameA: '',
      nameB: '',
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    remove(num) {
      this.counter = this.counter - num;
    },
    setNameA(event) {
      this.nameA = event.target.value;
    },
    confirmNameA() {
      this.confirmedNameA = this.nameA;
    },
    setNameB(event, lastName) {
      this.nameB = event.target.value + ' ' + lastName;
    },
    submitFormA(evt) {
      evt.preventDefault();
      alert('Submitted!')
    },
    submitFormB() {
      alert('Submitted!')
    }
  }
});

app.mount('#events');
