<template>
  <div class="app-nav">
    <div class="row expanded">
      <div class="columns">
        <nav>
          <ul :class="linksClass">
            <li v-for="(link, index) in links" :key="index">
              <template v-if="typeof link.link === 'function'">
                <a @click.prevent="link.link">
                  {{ link.text }}
                </a>
              </template>
              <template v-else-if="typeof link.link === 'string' && !testLink(link.link)">
                <router-link :to="link.link" :target="link.target || '_self'">
                  {{ link.text }}
                </router-link>
              </template>
              <template v-else-if="typeof link.link === 'string' && testLink(link.link)">
                <a :href="link.link" :target="link.target || '_self'">
                  {{ link.text }}
                </a>
              </template>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    linksClass: {
      type: String,
      default: 'text-center'
    },
    links: {
      type: Array,
      default: () => { return [] }
    }
  },
  methods: {
    testLink(link) {
      return (/https?:\/\//.test(link))
    }
  }
}
</script>

