const app = Vue.createApp({
  data() {
    return {
      name: "Luis Hernandez",
      age: 38,
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEHE-tKgTaktgfR6R6xPUzBy5Am6ZLbbKwpg&usqp=CAU'
    };
  },
  methods: {
    getAgeInFiveYears() {
      return this.age + 5;
    },
    getRandomNumber() {
      const randomNumber = Math.random();
      return randomNumber;
    },
  },
});

app.mount("#assignment");
