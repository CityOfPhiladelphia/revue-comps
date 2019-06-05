<template>
  <header class="grid-container full site-header app group">
    <!-- if you don't want a full-width header, remove the expanded class -->
    <div class="row expanded grid-x grid-padding-x grid-padding-y align-middle">
      <div class="column cell medium-16">
        <a
          href="https://www.phila.gov/"
          class="logo"
        >
          <img
            src="https://standards.phila.gov/img/logo/city-of-philadelphia-yellow-white.svg"
            width="170"
            height="45"
            alt="City of Philadelphia"
          >
        </a>
        <div class="app-divide hide-for-small-only" />
        <div class="page-title-container">
          <router-link :to="appLink">
            <h1 class="page-title">
              {{ appTitle }}
            </h1>
          </router-link>
        </div>
      </div>
      <div class="column cell medium-auto medium-8 text-right">
        <div class="app-buttons header-link">
          <slot />
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  props: {
    appLink: {
      type: String,
      default: '/',
    },
    appTitle: {
      type: String,
      default: '',
    },
  },
};
</script>
<style lang="scss" scoped>
  h4 {
    font-size: 1rem;
    a {
      font-weight: bold !important;
    }
  }
</style>
