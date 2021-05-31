<template>
  <div class="container">
    <h1 class="title">Work Experience</h1>
    <div class="exp-container">
      <div
        v-for="exp in experiences"
        :key="exp.id"
        style="background-color: transparent; margin: 2rem 0"
      >
        <h2>{{exp.title}}</h2>
        <p>
          <img src="./../assets/icons/org.png" width="30px" alt srcset />
          {{exp.org}}
        </p>
        <p>
          <img src="./../assets/icons/calendar.png" width="30px" alt srcset />
          {{exp.duration}}
        </p>
        <ul>
          <li v-for="res in exp.work" :key="res">{{res}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      experiences: this.$store.state.experience,
    }
  },
}
</script>

<style scoped>
p,
h1,
h2,
li,
ul,
img,
.title {
  background-color: transparent;
  color: #f3f3f3;
}
p {
  text-align: left;
  font-weight: bold;
  letter-spacing: 0.8px;
  font-size: 1.2rem;
  display: flex;
  padding: 0.5rem 0;
  align-items: center;
}
h2 {
  border-bottom: 2px solid #f3f3f3;
  margin-bottom: 1%;
  padding-bottom: 0.7rem;
  font-size: 1.8rem;
}
.title {
  font-size: 2.5rem;
  background-color: transparent;
  padding: 2rem 0 2rem 0;
}
.exp-container {
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 80%;
  padding-bottom: 2rem;
  background-color: transparent;
}
.container {
  padding: 3rem 0;
}
ul {
  padding-top: 10px;
  margin-left: 4%;
}
li {
  margin-top: 1%;
  font-weight: bold;
  font-size: 1.1rem;
}
img {
  margin-right: 1%;
}
@media screen and (max-width: 600px) {
  .title {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.3rem;
  }
  p {
    font-size: 1rem;
  }
  p img {
    width: 25px;
    margin-right: 10px;
  }
  .exp-container {
    padding: 0 0 0 1rem;
  }
  li {
    font-size: 0.9rem;
    margin-top: 5%;
    letter-spacing: 1px;
  }
}
</style>