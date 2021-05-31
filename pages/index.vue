<template>
  <div>
    <Sidebar />
    <FirstSection class="primary-bg-1" />
    <SecondSection id="about" class="primary-bg-2" />
    <ThirdSection id="projects" class="primary-bg-1" />
    <FourthSection class="primary-bg-3" />
    <FifthSection class="primary-bg-1" />
    <Footer />
  </div>
</template>

<script>
import Sidebar from './../components/Sidenav.vue'
import FirstSection from './../components/Landing.vue'
import SecondSection from './../components/About.vue'
import ThirdSection from '../components/Projects.vue'
import FourthSection from './../components/Work.vue'
import FifthSection from './../components/Skills.vue'
import Footer from './../components/Footer.vue'
export default {
  components: {
    Sidebar,
    FirstSection,
    SecondSection,
    ThirdSection,
    FourthSection,
    FifthSection,
    Footer,
  },
}
</script>

<style>
</style>
