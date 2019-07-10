<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  el: '#app',
  components: {Navbar, Footer}
}
</script>

<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
    <Footer></Footer>
  </div>
</template>
