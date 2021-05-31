<template>
  <div class="container">
    <h1 class="title">Featured Projects</h1>
    <div class="container" style="flex-direction: row; justify-content: space-evenly">
      <div class="card" v-for="repo in repos" :key="repo.id">
        <div class="card-img">
          <img :src="repo.img_url" alt="Project Image" />
        </div>
        <div class="card-header">{{repo.name}}</div>
        <div class="tag-container">
          <button
            class="btn-tag"
            v-for="tag in repo.tags"
            :key="tag.id"
            :style="tag.color"
          >{{tag.name}}</button>
        </div>
        <div class="card-content">{{repo.description}}</div>

        <a :href="'https://www.github.com/amolikvivian/' + repo.github" target="_blank">
          <b>Github</b>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      repos: this.$store.state.repos,
    }
  },
}
</script>

<style scoped>
.container {
  padding: 3rem 4rem;
}
.title {
  color: #1a1a1a;
  font-size: 2.5rem;
  background-color: transparent;
  padding: 2rem 0 0rem 0;
}
.card {
  width: 19.5rem;
  height: 28rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 25px 3rem;
}

.card {
  border: 0px solid #e4e4e4;
  border-radius: 2px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
  transition: 0.4s ease-out;
}
.card:hover {
  transform: translateY(-5px);
  /* transform: rotateY(20deg); */
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.3);
  transition: 0.4s ease-out;
}

.card-content,
.card-header {
  padding: 0 1rem;
}
.card-header {
  font-size: 1.2rem;
  font-weight: bolder;
  padding-top: 5px;
}
.card-content {
  font-weight: bold;
  line-height: 30px;
  padding-top: 5px;
}
img {
  width: 17.5rem;
  height: 10rem;
  margin-top: 5px;
  border-radius: 2px;
  /* filter: grayscale(100%); */
  transition: 0.4s ease-out;
}
img:hover {
  /* filter: grayscale(0); */
  transition: 0.4s ease-out;
}
.btn-tag {
  font-family: 'Poppins', sans-serif;
  margin: 0 0.5rem;
  padding: 5px 10px;
  border: none;
  outline: none;
  color: #f0f0f0;
  border-radius: 20px;
  letter-spacing: 0.5px;
  cursor: pointer;
}
.container {
  flex-wrap: wrap;
  flex-basis: 33.333333%;
}
a,
b {
  color: var(--primary-white);
  background-color: var(--primary-blue);
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  margin-bottom: 1%;
}
.tag-container {
  padding-top: 5px;
}
</style>