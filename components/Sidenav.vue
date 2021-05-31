<template>
  <div>
    <div class="sidenav">
      <a href="https://www.github.com/amolikvivian" target="_blank">
        <img src="./../assets/icons/github.svg" alt srcset />
      </a>
      <a href="https://www.linkedin.com/in/amolikvivian" target="_blank">
        <img src="./../assets/icons/linkedin.svg" alt srcset />
      </a>
      <a href="https://amolikvivian.medium.com/" target="_blank">
        <img src="./../assets/icons/medium.svg" alt srcset />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {},
}
</script>

<style>
.sidenav img {
  background-color: transparent;
  width: 40px;
  margin: 1.5rem 0;
  transition: 0.2s ease-in-out;
}
.sidenav img:hover {
  filter: drop-shadow(2px 2px #cfcfcf);
  transition: 0.2s ease-in-out;
}
.sidenav a {
  background-color: transparent;
}
.sidenav {
  height: 100%;
  width: 5rem;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
@media screen and (max-width: 600px) {
  .sidenav img {
    width: 25px;
  }
  .sidenav {
    width: 2.5rem;
    top: none;
    left: none;
    bottom: 0;
  }
}
</style>