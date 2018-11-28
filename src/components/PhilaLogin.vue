<template>
  <div>
    <slot name="header">
    </slot>
    <form action="" @submit.prevent="submitClick">
      <slot name="form-header">
      </slot>
      <input v-for="(input, index) in inputs" :key="index" v-model="form[input.model]" v-bind="input" required>
      <div class="grid-x align-middle">
        <div class="cell small-24 medium-auto links">
          <router-link v-for="(link, indx) in links" :key="indx" :to="link.to" v-bind="link.attrs || {}">
            {{ link.text }}
          </router-link>
        </div>
        <div class="cell small-24 medium-auto medium-shrink small-text-center text-right">
          <button :disabled="disabledOnSubmit" type="submit">
            {{ submitText }}
          </button>
        </div>
      </div>
      <slot name="form-footer">
      </slot>
    </form>
    <slot name="footer">
    </slot>
  </div>
</template>
<script>
export default {
  props: {
    submitText: {
      type: String,
      default() {
        return 'Submit'
      }
    },
    submitEvent: {
      type: Function,
      required: true,
    },
    inputs: {
      type: Array,
      default() {
        return [
          {
            type: 'text',
            placeholder: 'Username',
            model: 'username'
          },
          {
            type: 'password',
            placeholder: 'Password',
            model: 'password'
          }
        ]
      }
    },
    disabledOnSubmit: {
      type: Boolean,
      default: false,
    },
    links: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {
      form: {},
    }
  },
  created() {
    this.inputs.forEach((input) => {
      if (typeof input.value !== undefined) {
        this.form[input.model] = input.value
      } else {
        this.form[input.model] = ''
      }
    })
  },
  methods: {
    submitClick() {
      this.submitEvent(this.form)
    }
  }
}
</script>
