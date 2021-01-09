const app = Vue.createApp({
  data() {
    return {
      alertMsg: "This is NICE!",
      inputA: "",
      inputB: "",
    };
  },
  methods: {
    showAlert() {
      alert(this.alertMsg);
    },
    setInputA(evt) {
      this.inputA = evt.target.value;
    },
    setInputB(evt) {
      this.inputB = evt.target.value;
    },
  },
});

app.mount("#assignment");
