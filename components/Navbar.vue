<template>
  <nav id="nav" class="navigation-bar d-none">
    <div class="navigation-content">
      <a
        href="https://drive.google.com/file/d/1z_Nzsw6oLefLsW2Gir9G2R47YrBw86KW/view?usp=sharing"
        target="_blank"
      >Resume.</a>
    </div>
  </nav>
</template>

<script>
export default {
  created() {
    window.addEventListener('scroll', this.handleNav)
  },
  methods: {
    handleNav() {
      let navBar = document.getElementById('nav')
      if (window.scrollY > 600) {
        navBar.classList.remove('d-none')
      } else if (window.scrollY < 200) {
        navBar.classList.add('d-none')
      }
    },
  },
}
</script>

<style scoped>
.d-none {
  display: none;
}
.navigation-bar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: auto;
  padding: 15px 0px;
  background: #ffffff;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
  transition: 0.4s ease-in-out;
  animation: 0.4s appear;
  z-index: 3;
}
.navigation-bar .navigation-content {
  padding: 0.1rem 2rem;
  width: 100%;
  margin: auto;
  text-align: right;
  background: transparent;
}
a {
  color: var(--primary-blue);
  font-size: 1.2rem;
  font-weight: bolder;
  padding: 0px 15px;
  background: transparent;
}
@keyframes appear {
  to {
    opacity: 1;
  }
  from {
    opacity: 0;
  }
}
</style>