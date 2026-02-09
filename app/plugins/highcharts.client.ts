import HighchartsVue from 'highcharts-vue'
import Highcharts from 'highcharts'
import HighchartsMap from 'highcharts/modules/map'

export default defineNuxtPlugin((nuxtApp) => {
  HighchartsMap(Highcharts)
  nuxtApp.vueApp.use(HighchartsVue)
})
