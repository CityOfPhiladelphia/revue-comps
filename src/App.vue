<template>
  <div id="application">
    <PhilaHeader />
    <phila-sub-header-nav />
    <phila-login :submit-event="loginEvent" />
    <phila-footer />
    <router-view />
  </div>
</template>

<script>
import PhilaHeader from './components/PhilaHeader.vue'
import PhilaFooter from './components/PhilaFooter.vue'
import PhilaSubHeaderNav from './components/PhilaSubHeaderNav.vue'
import PhilaLogin from './components/PhilaLogin.vue'

export default {
  name: 'App',
  components: {
    PhilaHeader,
    PhilaFooter,
    PhilaSubHeaderNav,
    PhilaLogin
  },

  methods: {
    loginEvent(data) {
      console.log(data)
    }
  }

}
</script>