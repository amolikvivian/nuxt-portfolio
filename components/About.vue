<template>
  <div class="container"></div>
</template>

<script>
export default {}
</script>

<style scoped>
.title {
  color: var(--primary-white);
  font-size: 2rem;
  animation: 2s appear;
  background-color: transparent;
}
.container,
p {
  background-color: transparent;
  color: #f3f3f3;
}
.container {
  width: 80%;
}
p {
  padding: 5rem 0;
  font-size: 1.5rem;
  line-height: 3rem;
}

@keyframes appear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>