<template>
  <div id="application">
    <phila-header />
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
  data() {
    return {
      subHeaderLinks: [
        {
          link: 'http://example.com',
          text: 'Go to example',
          target: '_blank'
        }
      ]
    }
  },
  methods: {
    loginEvent(data) {
      console.log(data)
    }
  }

}
</script>