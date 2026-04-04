export default defineNuxtPlugin((nuxtApp) => {
  const cookie = useCookie('i18n_locale', {
    maxAge: 365 * 24 * 60 * 60,
    sameSite: 'lax',
    path: '/',
  })

  // nuxtApp.$i18n.locale - bu component instance talab qilmaydi
  const locale = nuxtApp.$i18n.locale

  // Lokal o'zgarganda cookie ga yozish
  watch(locale, (val) => {
    cookie.value = val
  }, { immediate: true })
})
