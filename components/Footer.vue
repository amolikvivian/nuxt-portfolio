<template>
  <footer class="footer">
    <div class="row">
      <div class="column">
        <h2>Developed by @amolikvivian.</h2>
        <h4>
          This portfolio is developed as an
          Open Source Portfolio with Nuxt JS.
        </h4>

        <p>Feel free to fork (⭐, maybe?) and make your own changes.</p>

        <p>
          Find all source code 💻
          <a
            href="https://www.github.com/amolikvivian/nuxt-portfolio"
            target="_blank"
          >here.</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
.footer {
  background-color: var(--primary-blue);
  min-height: auto;
}
div,
.column,
.row,
p,
a,
h1,
h2,
h4,
img {
  background-color: transparent;
  color: white;
}
h4 {
  padding-top: 4rem;
  font-size: 1.2rem;
}
p {
  padding-top: 1.7rem;
  font-size: 1.2rem;
}
.row {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10rem 0rem;
}
.column {
  flex-direction: column;
  display: flex;
  flex: 50%;
  align-items: left;
  font-weight: bold;
  letter-spacing: 0.5px;
  justify-content: center;
  padding-left: 10rem;
}

a {
  text-decoration: underline 2px white;
}

@media screen and (max-width: 800px) {
  .column {
    flex: 100%;
    padding: 0 3rem 0 4rem;
  }
  p,
  h4 {
    font-size: 1rem;
  }
  h2 {
    font-size: 1.3rem;
  }
}
</style>