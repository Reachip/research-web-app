<script>
// eslint-disable-next-line no-unused-vars
import {store} from '@/utils/store'

export default {
  name: 'Error',
  props: ['image'],
  mounted () {
    store.setNavbarAndFooterVisible(false)
  }
}
</script>

<template>
  <div class="is-desktop is-vcentered">
    <h3 class="title is-3">Une erreur à été rencontré.</h3>
  </div>
</template>
