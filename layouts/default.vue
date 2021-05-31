<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');

html {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  scroll-behavior: smooth;
}

:root {
  --background: #ffffff;
  --primary-white: #ffffff;
  --primary-blue: #23365f;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: var(--background);
}

/* width */
::-webkit-scrollbar {
  width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Centered Container */
.center-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

a {
  text-decoration: none;
}

.primary-bg {
  background-color: var(--background);
}
.primary-bg-2 {
  background-image: url('./../assets/bg-2.png');
}
.primary-bg-3 {
  background-color: #2d467c;
}
</style>
