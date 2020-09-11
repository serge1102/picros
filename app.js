const redCost = 100;
const blueCost = 1500;
const greenCost = 1000;
const yellowCost = 500;

const app = new Vue({
  el: "#app",
  data: {
    pointerColor: "red",
    sum_cost: 0,
    rows: Array(25),
    blocks: Array(25),
  },
  computed: {},
  methods: {
    onClick(event) {
      if (this.pointerColor == "red") {
        if (event.target.style.background == "") {
          event.target.style.background = "red";
          this.sum_cost += redCost;
        } else if (event.target.style.background == "blue") {
          event.target.style.background = "red";
          this.sum_cost -= blueCost;
          this.sum_cost += redCost;
        } else if (event.target.style.background == "green") {
          event.target.style.background = "red";
          this.sum_cost -= greenCost;
          this.sum_cost += redCost;
        } else if (event.target.style.background == "yellow") {
          event.target.style.background = "red";
          this.sum_cost -= yellowCost;
          this.sum_cost += redCost;
        }
      } else if (this.pointerColor == "blue") {
        if (event.target.style.background == "") {
          event.target.style.background = "blue";
          this.sum_cost += blueCost;
        } else if (event.target.style.background == "red") {
          event.target.style.background = "blue";
          this.sum_cost -= redCost;
          this.sum_cost += blueCost;
        } else if (event.target.style.background == "green") {
          event.target.style.background = "blue";
          this.sum_cost -= greenCost;
          this.sum_cost += blueCost;
        } else if (event.target.style.background == "yellow") {
          event.target.style.background = "blue";
          this.sum_cost -= yellowCost;
          this.sum_cost += blueCost;
        }
      } else if (this.pointerColor == "green") {
        if (event.target.style.background == "") {
          event.target.style.background = "green";
          this.sum_cost += greenCost;
        } else if (event.target.style.background == "red") {
          event.target.style.background = "green";
          this.sum_cost -= redCost;
          this.sum_cost += greenCost;
        } else if (event.target.style.background == "blue") {
          event.target.style.background = "green";
          this.sum_cost -= blueCost;
          this.sum_cost += greenCost;
        } else if (event.target.style.background == "yellow") {
          event.target.style.background = "green";
          this.sum_cost -= yellowCost;
          this.sum_cost += greenCost;
        }
      } else if (this.pointerColor == "yellow") {
        if (event.target.style.background == "") {
          event.target.style.background = "yellow";
          this.sum_cost += yellowCost;
        } else if (event.target.style.background == "red") {
          event.target.style.background = "yellow";
          this.sum_cost -= redCost;
          this.sum_cost += yellowCost;
        } else if (event.target.style.background == "blue") {
          event.target.style.background = "yellow";
          this.sum_cost -= blueCost;
          this.sum_cost += yellowCost;
        } else if (event.target.style.background == "green") {
          event.target.style.background = "yellow";
          this.sum_cost -= greenCost;
          this.sum_cost += yellowCost;
        }
      }
    },
    colorChange(color) {
      if (color == "red") {
        this.pointerColor = "red";
      } else if (color == "blue") {
        this.pointerColor = "blue";
      } else if (color == "green") {
        this.pointerColor = "green";
      } else if (color == "yellow") {
        this.pointerColor = "yellow";
      }
    },
  },
  created() {},
});
