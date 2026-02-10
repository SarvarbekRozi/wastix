import HighchartsVue from 'highcharts-vue'

export default defineNuxtPlugin(async (nuxtApp) => {
  const Highcharts = (await import('highcharts')).default
  const HighchartsMap = (await import('highcharts/modules/map')).default
  if (typeof HighchartsMap === 'function') {
    HighchartsMap(Highcharts)
  }
  nuxtApp.vueApp.use(HighchartsVue)
})
