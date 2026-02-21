// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'app',
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: 'http://127.0.0.1:8000/api/v1',
    }
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
        }
      ],
      link: [
        { rel: 'icon', href: '/assets/images/favicon.ico', type: 'image/x-icon' },
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;0,9..144,800;0,9..144,900;1,9..144,300;1,9..144,400;1,9..144,500;1,9..144,600;1,9..144,700;1,9..144,800;1,9..144,900&display=swap'
        },
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
        },
        { rel: 'stylesheet', href: '/assets/css/font-awesome-all.css' },
        { rel: 'stylesheet', href: '/assets/css/flaticon.css' },
        { rel: 'stylesheet', href: '/assets/css/owl.css' },
        { rel: 'stylesheet', href: '/assets/css/bootstrap.css' },
        { rel: 'stylesheet', href: '/assets/css/jquery.fancybox.min.css' },
        { rel: 'stylesheet', href: '/assets/css/animate.css' },
        { rel: 'stylesheet', href: '/assets/css/nice-select.css' },
        { rel: 'stylesheet', href: '/assets/css/elpath.css' },
        { rel: 'stylesheet', href: '/assets/css/color/theme-color.css', id: 'jssDefault' },
        { rel: 'stylesheet', href: '/assets/css/switcher-style.css' },
        { rel: 'stylesheet', href: '/assets/css/rtl.css' },
        { rel: 'stylesheet', href: '/assets/css/style.css' },
        { rel: 'stylesheet', href: '/assets/css/module-css/banner.css' },
        { rel: 'stylesheet', href: '/assets/css/module-css/feature.css' },
        { rel: 'stylesheet', href: '/assets/css/module-css/about.css' },
        { rel: 'stylesheet', href: '/assets/css/module-css/blog-details.css' },
        { rel: 'stylesheet', href: '/assets/css/module-css/clients.css' },
        { rel: 'stylesheet', href: '/assets/css/module-css/contact.css' },
        { rel: 'stylesheet', href: '/assets/css/module-css/service.css' },
        { rel: 'stylesheet', href: '/assets/css/module-css/service-details.css' },
        { rel: 'stylesheet', href: '/assets/css/module-css/funfact.css' },
        { rel: 'stylesheet', href: '/assets/css/module-css/chooseus.css' },
        { rel: 'stylesheet', href: '/assets/css/module-css/cta.css' },
        { rel: 'stylesheet', href: '/assets/css/module-css/materials.css' },
        { rel: 'stylesheet', href: '/assets/css/module-css/page-title.css' },
        { rel: 'stylesheet', href: '/assets/css/module-css/testimonial.css' },
        { rel: 'stylesheet', href: '/assets/css/module-css/project.css' },
        { rel: 'stylesheet', href: '/assets/css/module-css/project-details.css' },
        { rel: 'stylesheet', href: '/assets/css/module-css/news.css' },
        { rel: 'stylesheet', href: '/assets/css/module-css/order-service.css' },
        { rel: 'stylesheet', href: '/assets/css/module-css/pricing.css' },
        { rel: 'stylesheet', href: '/assets/css/module-css/error.css' },
        { rel: 'stylesheet', href: '/assets/css/module-css/faq.css' },
        { rel: 'stylesheet', href: '/assets/css/module-css/sidebar.css' },
        { rel: 'stylesheet', href: '/assets/css/module-css/skills.css' },
        { rel: 'stylesheet', href: '/assets/css/module-css/subscribe.css' },
        { rel: 'stylesheet', href: '/assets/css/module-css/team.css' },
        { rel: 'stylesheet', href: '/assets/css/module-css/team-details.css' },
        { rel: 'stylesheet', href: '/assets/css/module-css/working.css' },
        { rel: 'stylesheet', href: '/assets/css/responsive.css' }
      ],
      script: [
        { src: '/assets/js/jquery.js', tagPosition: 'bodyClose' },
        { src: '/assets/js/bootstrap.min.js', tagPosition: 'bodyClose' },
        { src: '/assets/js/owl.js', tagPosition: 'bodyClose' },
        { src: '/assets/js/wow.js', tagPosition: 'bodyClose' },
        { src: '/assets/js/validation.js', tagPosition: 'bodyClose' },
        { src: '/assets/js/jquery.fancybox.js', tagPosition: 'bodyClose' },
        { src: '/assets/js/appear.js', tagPosition: 'bodyClose' },
        { src: '/assets/js/isotope.js', tagPosition: 'bodyClose' },
        { src: '/assets/js/parallax-scroll.js', tagPosition: 'bodyClose' },
        { src: '/assets/js/jquery.nice-select.min.js', tagPosition: 'bodyClose' },
        { src: '/assets/js/jQuery.style.switcher.min.js', tagPosition: 'bodyClose' },
        { src: '/assets/js/pagenav.js', tagPosition: 'bodyClose' },
        { src: '/assets/js/gmaps.js', tagPosition: 'bodyClose' },
        { src: '/assets/js/map-helper.js', tagPosition: 'bodyClose' },
        { src: '/assets/js/script.js', tagPosition: 'bodyClose' }
      ]
    }
  }
})
