<template>
  <header class="grid-container full site-header app group">
    <div class="grid-x grid-padding-x grid-padding-y align-middle">
      <!-- if you don't want a full-width header, remove the expanded class -->
      <div class="cell medium-16">
        <a href="http://phila.gov/" class="logo">
          <img src="https://standards.phila.gov/img/logo/city-of-philadelphia-yellow-white.svg" width="170" height="45" alt="City of Philadelphia">
        </a>
        <div class="app-divide hide-for-small-only">
        </div>
        <div class="page-title-container">
          <RouterLink :to="appLink">
            <h1 class="page-title">
              {{ appTitle }}
            </h1>
          </RouterLink>
        </div>
      </div>
      <div class="cell medium-auto small-centered text-center">
        <div class="app-buttons header-link">
          <slot></slot>
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
      default: '/'
    },
    appTitle: {
      type: String,
      default: 'App Title'
    },
  }
}
</script>

