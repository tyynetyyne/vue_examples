<template>
  <div class="holder">
    <form @submit.prevent="addSkill">
      <input
        type="text"
        placeholder="enter a skill you have.."
        v-model="skill"
        v-validate="'min:5'"
        name="skill"
      >
      <transition
        name="alert-in"
        enter-active-class="animated flipInX"
        leave-active-class="animated flipOutX"
      >
        <p class="alert" v-if="errors.has('skill')">{{ errors.first('skill')}}</p>
      </transition>
    </form>
    <ul>
      <transition-group
        name="list"
        enter-active-class="animated bounceInUp"
        leave-active-class="animated bounceOutDown"
      >
        <li v-for="item in skills" :key="item.id">
          {{ item.skill }}
          <i class="fa fa-minus-circle" v-on:click="remove(item.id)"></i>
        </li>
      </transition-group>
    </ul>
    <p v-if="skills.length >= 1">You have more than one skill</p>
    <p v-else>You have less or equal to 1 skill</p>
  </div>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      skill: "",
      skills: [
        { skill: "Vue.js", id: 0 },
        { skill: "Frontend Developer", id: 1 }
      ]
    };
  },
  methods: {
    addSkill() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.skills.push({
            skill: this.skill,
            id: Math.floor(1000000 * Math.random())
          });
          this.skill = "";
          console.log("id", this.skills);
        } else {
          console.log("Not valid");
        }
      });
    },
    remove(id) {
      this.skills = this.skills.filter(item => id !== item.id);
    }
  }
};
</script>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
.holder {
  background: #fff;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul li {
  padding: 20px;
  font-size: 1.3em;
  background-color: #e0edf4;
  border-left: 5px solid #3eb3f6;
  margin-bottom: 2px;
  color: #3e5252;
}

p {
  text-align: center;
  padding: 30px 0;
  color: gray;
}

.container {
  box-shadow: 0px 0px 40px lightgray;
}

input {
  width: calc(100% - 40px);
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  background-color: #323333;
  color: #687f7f;
}
.alert {
  background: #fdf2ce;
  font-weight: bold;
  display: inline-block;
  padding: 5px;
  margin-top: -20px;
}
.alert-in-enter-active {
  animation: bounce-in 0.5s;
}
.alert-in-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

i {
  float: right;
  cursor: pointer;
}
</style>
