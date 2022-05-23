Vue.component('error', {
  template: `
              <h3 class='error' v-show="$root.error">Ошибка загрузки данных с сервера</h3>
            `,
  data() {
    return {
      status: false,
    }
  }
})