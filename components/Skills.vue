<template>
  <div class="center-container">
    <h1 class="title">Tools n' Technologies</h1>
    <div class="row" style>
      <img
        align="left"
        alt="HTML5"
        width="70px"
        title="html"
        src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
      />
      <img
        align="left"
        alt="CSS3"
        width="70px"
        title="CSS"
        src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
      />
      <img
        align="left"
        alt="JavaScript"
        width="70px"
        title="JavaScript"
        src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
      />
      <img
        align="left"
        alt="Vue"
        width="70px"
        title="Vue JS"
        src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png"
      />
      <img
        align="left"
        alt="Bootstrap"
        width="70px"
        title="Bootstrap"
        src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/bootstrap/bootstrap.png"
      />
      <img
        align="left"
        alt="Tailwind"
        width="70px"
        title="Tailwind"
        src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/tailwind/tailwind.png"
      />
      <img
        align="left"
        alt="Sass"
        width="70px"
        title="Sass"
        src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png"
      />
    </div>
    <div class="row">
      <img
        align="left"
        alt="Python"
        width="70px"
        title="Python"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png"
      />
      <img
        align="left"
        alt="TF"
        width="70px"
        title="Tensorflow"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1200px-Tensorflow_logo.svg.png"
      />
      <img
        align="left"
        alt="OpenCV"
        width="70px"
        title="OpenCV"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/OpenCV_Logo_with_text_svg_version.svg/831px-OpenCV_Logo_with_text_svg_version.svg.png"
      />
      <img
        align="left"
        alt="Arduino"
        width="70px"
        title="Arduino"
        src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/arduino/arduino.png"
      />
      <img
        align="left"
        alt="MySQL"
        width="70px"
        title="MySQL"
        src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png"
      />
      <img
        align="left"
        alt="Firebase"
        width="70px"
        title="Firebase"
        src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png"
      />
      <img
        align="left"
        alt="Git"
        width="70px"
        title="Git"
        src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
      />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.center-container {
  height: auto;
  padding: 0 3rem;
}
.title {
  padding: 5rem 0;
  font-size: 2.6rem;
  color: #1a1a1a;
}
.row {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  flex-basis: 20%;
  width: 85vw;
  margin-top: 2%;
}
.row:nth-child(3) {
  margin-bottom: 7%;
  margin-top: 7%;
}
@media screen and (max-width: 800px) {
  .center-container {
    padding: 0 4rem;
  }
  img {
    width: 40px;
    margin: 5% 4%;
  }
  .row {
    margin-top: -5%;
  }
  .title {
    font-size: 1.8rem;
    padding: 2.5rem 0;
  }
}
</style>