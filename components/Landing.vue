<template>
  <div class="center-container primary-bg">
    <div style="display: flex; flex-direction: column">
      <h1 class="title">
        hello!
        <br />I'm Amolik Vivian Paul
      </h1>
      <div class="typewriter">
        <p>and this website, is about me.</p>
      </div>
    </div>
    <div class="bottom">
      <a href="#projects">
        <img id="arrow" src="./../assets/icons/down.png" alt srcset />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    window.addEventListener('scroll', this.hideArrow)
  },
  methods: {
    hideArrow() {
      let arrow = document.getElementById('arrow')
      if (window.scrollY > 100) {
        arrow.classList.add('d-none')
      } else if (window.scrollY < 100) {
        arrow.classList.remove('d-none')
      }
    },
  },
}
</script>

<style scoped>
.title {
  color: var(--primary-blue);
  font-size: 4rem;
  animation: 3s appear;
  background-color: transparent;
  /* line-height: 70px; */
  text-align: left;
}
img {
  width: 40px;
  animation: 2s appear infinite;
  background-color: transparent;
}
.bottom {
  position: absolute;
  bottom: 10px;
}
p {
  font-size: 2rem;
  color: rgb(44, 44, 44);
  font-weight: bold;
  padding-top: 0.7rem;
}
.d-none {
  display: none;
}
.d-show {
  display: block;
}

.typewriter p {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0; /* Gives that scrolling effect as the typing happens */
  animation: typing 2.5s steps(40, end);
  text-align: left;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes appear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media screen and (max-width: 1100px) {
  .title {
    font-size: 3rem;
  }
  p {
    font-size: 1.5rem;
  }
}
@media screen and (max-width: 700px) {
  .title {
    font-size: 2rem;
  }
  p {
    font-size: 1rem;
  }
}
@media screen and (max-width: 500px) {
  .title {
    font-size: 1.2rem;
    line-height: 40px;
  }
}
</style>