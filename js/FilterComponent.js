Vue.component('filter-products', {
  template: `
  <form action="#" class="search-form" @submit.prevent="$parent.filter(request)">
      <input type="text" class="search-field" v-model="request">
      <button type="submit" class="btn-search">
          <i class="fas fa-search"></i>
      </button>
  </form>
  `,
  data() {
    return {
      request: this.userRequest,
    }
  },
  props: ['userRequest']
})