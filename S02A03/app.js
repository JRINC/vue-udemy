const app = Vue.createApp({
  data() {
    return {
      result: 0,
      msg: ''
    };
  },
  watch: {
    result(value) {
        if (value < 37) {
            this.msg = 'Not there yet';
        } else if (value === 37) {
            this.msg = 'EXCELSIOR!';
            const that = this;
            setTimeout(() => {
                that.result = 0;
            }, 5000);
        } else {
            this.msg = 'Too much!';
        }
    }
  },
  methods: {
    add5() {
        return this.result = this.result + 5;
    },
    add1() {
        return this.result = this.result + 1;
    }
}
});

app.mount("#assignment");
