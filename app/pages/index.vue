<template>
        <!-- banner-section -->
        <section class="banner-section p_relative">
            <div class="pattern-layer" style="background-image: url(/assets/images/shape/shape-1.png);"></div>
            <div class="banner-carousel owl-theme owl-carousel owl-dots-none" id="bannerCarousel">
                <div v-for="(slider, i) in sliders" :key="slider.id" class="slide-item p_relative">
                    <div class="shape">
                        <div class="shape-1" style="background-image: url(/assets/images/shape/shape-3.png);"></div>
                        <div class="shape-2 float-bob-y" style="background-image: url(/assets/images/shape/shape-4.png);"></div>
                        <div class="shape-3 rotate-me" style="background-image: url(/assets/images/shape/shape-5.png);"></div>
                    </div>
                    <div class="auto-container">
                        <div class="row align-items-center">
                            <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                                <div class="content-box p_relative d_block z_5">
                                    <span class="title-text p_relative d_block">{{ slider[`subtitle_${$i18n.locale}`] }}</span>
                                    <h2 class="p_relative d_block">{{ slider[`title_${$i18n.locale}`] }}</h2>
                                    <div class="btn-box" v-if="slider.button_url">
                                        <a :href="slider.button_url" class="theme-btn btn-one"><span>{{ slider[`button_text_${$i18n.locale}`] || $t('common.more') }}</span></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                                <div class="image-box p_relative">
                                    <div class="image-shape-1" style="background-image: url(/assets/images/shape/shape-2.png);"></div>
                                    <figure class="image clearfix">
                                        <img :src="slider.image_url || `/assets/images/banner/banner-${(i % 3) + 1}.jpg`"
                                             :alt="slider[`title_${$i18n.locale}`]" style="width:100%;border-radius:12px;object-fit:cover;max-height:420px;">
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- banner-section end -->


        <!-- feature-section -->
        <section class="feature-section centred">
            <div class="auto-container">
                <div class="inner-container">
                    <div class="row clearfix">
                        <div v-for="(f, i) in features" :key="i" class="col-lg-4 col-md-6 col-sm-12 feature-block">
                            <div class="feature-block-one wow fadeInUp animated"
                                 :data-wow-delay="(i * 300) + 'ms'" data-wow-duration="1500ms">
                                <div class="inner-box feature-clean">
                                    <div class="icon-box"><i :class="f.icon"></i></div>
                                    <h3><a href="">{{ f.title }}</a></h3>
                                    <p>{{ f.desc }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- feature-section end -->


        <!-- about-section -->
        <section class="about-section">
            <div class="pattern-layer" style="background-image: url(/assets/images/shape/shape-2.png);"></div>
            <div class="auto-container">
                <div class="row clearfix">
                    <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div class="content_block_one">
                            <div class="content-box mr_40">
                                <div class="sec-title mb_25">
                                    <span class="sub-title">{{ $t('about_section.sub_title') }}</span>
                                    <h2>{{ $t('about_section.title') }}</h2>
                                </div>
                                <p>{{ $t('about_section.desc') }}</p>
                                <ul class="list-style-one mb_35 clearfix">
                                    <li>{{ $t('about_section.list_1') }}</li>
                                    <li>{{ $t('about_section.list_2') }}</li>
                                    <li>{{ $t('about_section.list_3') }}</li>
                                </ul>
                                <div class="btn-box">
                                    <a href="/about/organization" class="theme-btn btn-one shadow"><span>{{ $t('about_section.btn') }}</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div class="image_block_one">
                            <div class="image-box pl_130 ml_30">
                                <div class="image-shape"><img src="/assets/images/shape/shape-3.png" alt=""></div>
                                <figure class="image image-1"><img src="/assets/images/resource/about-1.jpg" alt="Chiqindilarni yig'ish"></figure>
                                <figure class="image image-2"><img src="/assets/images/resource/about-2.jpg" alt="Qayta ishlash"></figure>
                                <figure class="image image-3"><img src="/assets/images/resource/about-3.jpg" alt="Toza muhit"></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- about-section end -->

        <!-- news-section -->
        <section class="news-section sec-pad">
          <div class="auto-container">
            <div class="sec-title mb_50 centred">
              <span class="sub-title">{{ $t('nav.news') }}</span>
              <h2>{{ $t('page.bizning_so_ngi_n_yangiliklar_44') }}</h2>
            </div>
            <div class="news-carousel owl-carousel owl-theme owl-dots-none owl-nav-none" id="newsCarousel">
              <div v-for="(item, i) in latestNews" :key="item.id" class="news-block">
                <div class="news-block-one compact-news-card">
                  <div class="inner-box">
                    <div class="image-box">
                      <figure class="image">
                        <a :href="`/news/${item.slug}`">
                          <img :src="item.image_url || `/assets/images/news/news-${i + 1}.jpg`" alt="Yangilik">
                        </a>
                      </figure>
                      <div class="post-date"><h3>{{ formatDate(item.published_at) }}</h3></div>
                    </div>
                    <div class="lower-content">
                      <h3><a :href="`/news/${item.slug}`">{{ item[`title_${$i18n.locale}`] }}</a></h3>
                      <p>{{ item[`excerpt_${$i18n.locale}`] }}</p>
                      <div class="link"><a :href="`/news/${item.slug}`"><i class="icon-26"></i></a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- news-section end -->

        <!-- map-section -->
        <UzbekistanMap :apiRegions="regions" />
        <!-- map-section end -->


        <!-- service-section -->
        <section class="service-section sec-pad centred bg-color-1" style="padding: 50px 0 100px 0;!important;">
            <div class="pattern-layer" style="background-image: url(/assets/images/shape/shape-7.png);"></div>
            <div class="auto-container">
                <div class="sec-title mb_50">
                    <span class="sub-title">{{ $t('footer.services') }}</span>
                    <h2>{{ $t('page.chiqindilarni_boshqarish_nxizm_45') }}</h2>
                </div>
                <div class="row clearfix">
                    <div v-for="(service, i) in services" :key="service.id"
                         class="col-lg-4 col-md-6 col-sm-12 service-block">
                        <div class="service-block-one mb_35 wow fadeInUp animated"
                             :data-wow-delay="(i % 3) * 300 + 'ms'" data-wow-duration="1500ms">
                            <div class="inner-box">
                                <figure class="image-box">
                                    <a href="#">
                                        <img :src="service.image_url || `/assets/images/service/service-${(i % 3) + 1}.jpg`"
                                             :alt="service[`title_${$i18n.locale}`]">
                                    </a>
                                </figure>
                                <div class="lower-content">
                                    <div class="icon-box">
                                        <div class="icon-bg" style="background-image: url(/assets/images/icons/icon-bg-1.png);"></div>
                                        <div class="icon"><i :class="service.icon"></i></div>
                                    </div>
                                    <h3><a href="#">{{ service[`title_${$i18n.locale}`] }}</a></h3>
                                    <p>{{ service[`description_${$i18n.locale}`] }}</p>
                                    <div class="link"><a href="#"><i class="icon-7"></i></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- service-section end -->


        <!-- funfact-section -->
        <section class="funfact-section" v-if="statistics.length">
            <div class="auto-container">
                <div class="four-item-carousel owl-carousel owl-theme owl-dots-none owl-nav-none"></div>
            </div>
        </section>
        <!-- funfact-section end -->

        <!-- chooseus-section -->
        <section class="chooseus-section pt_100">
            <div class="auto-container">
                <div class="row clearfix">
                    <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div class="image_block_two">
                            <div class="image-box">
                                <figure class="image"><img src="/assets/images/resource/chooseus-1.png" alt="Nima uchun biz"></figure>
                                <div class="support-box">
                                    <div class="icon-box"><i class="icon-18"></i></div>
                                    <h5>Tez yordam</h5>
                                    <h3><a :href="`tel:${(settings.chooseus_phone || '').replace(/\s/g,'')}`">
                                        {{ settings.chooseus_phone_label || '+998 95 177 09 09' }}
                                    </a></h3>
                                </div>
                                <div class="image-shape">
                                    <div class="shape-1" style="background-image: url(/assets/images/shape/shape-2.png);"></div>
                                    <div class="shape-2 rotate-me" style="background-image: url(/assets/images/shape/shape-8.png);"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div class="content_block_two">
                            <div class="content-box pt_40 pb_150 ml_30">
                                <div class="sec-title mb_30">
                                    <span class="sub-title">{{ $t('page.nima_uchun_biz_46') }}</span>
                                    <h2>{{ settings[`chooseus_title_${$i18n.locale}`] || ($t('page.nima_uchun_bizning_xizmatlarim_47')) }}</h2>
                                </div>
                                <div class="text-box mb_35">
                                    <p>{{ settings[`chooseus_description_${$i18n.locale}`] || ($t('page.biz_mijozlarimizga_eng_sifatli_48')) }}</p>
                                </div>
                                <div class="inner-box mb_35">
                                    <div class="single-item">
                                        <div class="icon-box"><i :class="settings.chooseus_item_1_icon || 'icon-19'"></i></div>
                                        <h3>{{ settings[`chooseus_item_1_title_${$i18n.locale}`] || ($t('page.uy_joy_chiqindilari_49')) }}</h3>
                                        <p>{{ settings[`chooseus_item_1_desc_${$i18n.locale}`] || $t('page.chooseus_item_1_desc') }}</p>
                                    </div>
                                    <div class="single-item">
                                        <div class="icon-box"><i :class="settings.chooseus_item_2_icon || 'icon-20'"></i></div>
                                        <h3>{{ settings[`chooseus_item_2_title_${$i18n.locale}`] || ($t('page.katta_konteynerlar_50')) }}</h3>
                                        <p>{{ settings[`chooseus_item_2_desc_${$i18n.locale}`] || $t('page.chooseus_item_2_desc') }}</p>
                                    </div>
                                </div>
                                <div class="btn-box">
                                    <nuxt-link to="/contact" class="theme-btn btn-one shadow"><span>{{ $t('common.contact_us') }}</span></nuxt-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- chooseus-section end -->


        <!-- cta-section -->
        <section class="cta-section centred p_relative">
            <div class="bg-layer parallax-bg" data-parallax='{"y": 100}' style="background-image: url(/assets/images/background/cta-bg.jpg);"></div>
            <div class="pattern-layer" style="background-image: url(/assets/images/shape/shape-11.png);"></div>
            <div class="auto-container">
                <div class="inner-box">
                    <h2>{{ settings[`cta_title_${$i18n.locale}`] || ($t('page.bizning_mijozimiz_bo_ling_va_m_51')) }}</h2>
                </div>
            </div>
        </section>
        <!-- cta-section end -->


        <!-- materials-section -->
        <section class="materials-section">
            <div class="auto-container">
                <div class="inner-container">
                    <div class="shape">
                        <div class="shape-1" style="background-image: url(/assets/images/shape/shape-9.png);"></div>
                        <div class="shape-2 rotate-me" style="background-image: url(/assets/images/shape/shape-10.png);"></div>
                    </div>
                    <div class="row clearfix">
                        <div class="col-lg-6 col-md-12 col-sm-12 title-column">
                            <div class="sec-title light pr_90">
                                <span class="sub-title">{{ $t('materials.subtitle') }}</span>
                                <h2>{{ $t('materials.title') }}</h2>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12 list-column">
                            <div class="list-inner pl_140">
                                <div class="row clearfix">
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <ul class="list-style-one clearfix">
                                            <li>{{ $t('materials.list_1') }}</li>
                                            <li>{{ $t('materials.list_2') }}</li>
                                            <li>{{ $t('materials.list_3') }}</li>
                                            <li>{{ $t('materials.list_4') }}</li>
                                            <li>{{ $t('materials.list_5') }}</li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <ul class="list-style-one clearfix">
                                            <li>{{ $t('materials.list_6') }}</li>
                                            <li>{{ $t('materials.list_7') }}</li>
                                            <li>{{ $t('materials.list_8') }}</li>
                                            <li>{{ $t('materials.list_9') }}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- materials-section end -->


        <!-- testimonial-section -->
        <section class="testimonial-section centred sec-pad" style="padding: 50px 0 ;">
            <div class="auto-container">
                <div class="sec-title mb_50">
                    <span class="sub-title">{{ $t('page.mijozlar_fikri_52') }}</span>
                    <h2>{{ $t('page.mijozlarimiz_biz_haqimizda_nni_53') }}</h2>
                </div>
                <div class="three-item-carousel owl-carousel owl-theme owl-dots-none owl-nav-none" id="testimonialCarousel"></div>
            </div>
        </section>
        <!-- testimonial-section end -->



</template>

<script setup>
const config = useRuntimeConfig()

// useAsyncData ensures SSR + client-side refetch if SSR fails
const { data: homeData } = await useAsyncData('home', () =>
  $fetch(`${config.public.apiBase}/home`).catch(() => ({}))
)

const { t, locale } = useI18n()

const sliders      = computed(() => homeData.value?.sliders     || [])
const statistics = computed(() => homeData.value?.statistics || [])
const services     = computed(() => homeData.value?.services    || [])
const latestNews   = computed(() => homeData.value?.latest_news || [])
const testimonials = computed(() => homeData.value?.testimonials || [])
const regions      = computed(() => homeData.value?.regions     || [])
const settings     = computed(() => homeData.value?.settings    || {})

const features = computed(() => [
  { icon: settings.value.feature_1_icon || 'icon-8',  title: settings.value[`feature_1_title_${locale.value}`] || (t('page.konteyner_o_lchamlari_54')), desc: settings.value[`feature_1_desc_${locale.value}`] || (t('page.har_xil_hajmdagi_konteynerlar__55')) },
  { icon: settings.value.feature_2_icon || 'icon-9',  title: settings.value[`feature_2_title_${locale.value}`] || (t('page.chiqindi_yig_ish_56')),       desc: settings.value[`feature_2_desc_${locale.value}`] || (t('page.muntazam_chiqindi_yig_ish_xizm_57')) },
  { icon: settings.value.feature_3_icon || 'icon-10', title: settings.value[`feature_3_title_${locale.value}`] || (t('page.yig_ish_jadvali_58')),        desc: settings.value[`feature_3_desc_${locale.value}`] || (t('page.qulay_vaqtda_chiqindi_olib_ket_59')) },
])

function formatDate(dateStr) {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  const months = ['Yan', 'Fev', 'Mar', 'Apr', 'May', 'Iyn', 'Iyl', 'Avg', 'Sen', 'Okt', 'Noy', 'Dek']
  return `${d.getDate()} ${months[d.getMonth()]}`
}

function initCarousel($el, options) {
  if (!$el || !$el.length) return
  if ($el.hasClass('owl-loaded')) {
    $el.trigger('destroy.owl.carousel')
    $el.removeClass('owl-loaded owl-drag')
  }
  $el.owlCarousel(options)
}

function buildDynamicCarousels() {
  nextTick(() => {
    const $ = window.$
    if (!$ || !$.fn || !$.fn.owlCarousel) return

    // Banner slider
    if (sliders.value.length) {
      initCarousel($('#bannerCarousel'), {
        loop: true, animateOut: 'fadeOut', animateIn: 'fadeIn',
        items: 1, margin: 0, nav: true, dots: false,
        autoplay: true, autoplayTimeout: 5000, smartSpeed: 1000,
        navText: ['<span class="icon-6"></span>', '<span class="icon-7"></span>']
      })
    }

    // Testimonials carousel — HTML manually built to avoid Vue/Owl DOM conflict
    if (testimonials.value.length) {
      const $tc = $('#testimonialCarousel')
      const html = testimonials.value.map((testim, i) => {
        const stars = Array.from({ length: 5 }, (_, s) =>
          `<li><i class="${s < testim.rating ? 'icon-21' : 'icon-22'}"></i></li>`
        ).join('')
        const img = testim.image
          ? testim.image
          : `/assets/images/resource/default-avatar.svg`
        return `
          <div class="testimonial-block-one">
            <div class="inner-box">
              <div class="text-box">
                <ul class="rating clearfix">${stars}</ul>
                <p>${testim['content_' + locale.value] || testim.content_uz || ''}</p>
                <figure class="thumb-box"><img src="${img}" alt="Mijoz"></figure>
              </div>
              <div class="author-box">
                <h3>${testim.name || ''}</h3>
                <span class="designation">${testim['position_' + locale.value] || testim.position_uz || ''}</span>
              </div>
            </div>
          </div>`
      }).join('')
      $tc.html(html)
      initCarousel($tc, {
        loop: testimonials.value.length > 3,
        rewind: testimonials.value.length <= 3,
        margin: 30, nav: false, dots: false,
        autoplay: true, autoplayTimeout: 4000, smartSpeed: 700,
        responsive: { 0: { items: 1 }, 768: { items: 2 }, 1024: { items: 3 } }
      })
    }

    // News carousel
    if (latestNews.value.length) {
      initCarousel($('#newsCarousel'), {
        loop: true,
        margin: 30, nav: false, dots: false,
        autoplay: true, autoplayTimeout: 3500, smartSpeed: 800,
        responsive: { 0: { items: 1 }, 768: { items: 2 }, 1024: { items: 3 } }
      })
    }

    // Funfact stats carousel — HTML manually built to avoid Vue/Owl DOM conflict
    if (statistics.value.length) {
      const $fc = $('.four-item-carousel')
      const statsHtml = statistics.value.map(stat => `
        <div class="funfact-block-one">
          <div class="inner-box">
            <div class="icon-box"><i class="${stat.icon || 'icon-15'}"></i></div>
            <div class="count-outer count-box">
              <span class="count-text" data-speed="1500" data-stop="${stat.value}">${stat.value}</span>
              ${stat.suffix ? `<span>${stat.suffix}</span>` : ''}
            </div>
            <h4>${stat['title_' + locale.value] || stat.title_uz || ''}</h4>
          </div>
        </div>`
      ).join('')
      $fc.html(statsHtml)
      initCarousel($fc, {
        loop: true, margin: 0, nav: false, dots: false,
        autoplay: true, autoplayTimeout: 3000, smartSpeed: 700,
        responsive: { 0: { items: 1 }, 600: { items: 2 }, 992: { items: 4 } }
      })
      // Counter animatsiyasini carousel init dan keyin qo'lda ishga tushirish
      $fc.find('.count-text').each(function () {
        const $this = $(this)
        const stop = parseInt($this.data('stop')) || 0
        $({ Counter: 0 }).animate({ Counter: stop }, {
          duration: 1500,
          step: function () { $this.text(Math.ceil(this.Counter)) },
          complete: function () { $this.text(stop) }
        })
      })
    }
  })
}

onMounted(() => {
  buildDynamicCarousels()
})

watch(locale, () => {
  buildDynamicCarousels()
})

useHead({
  title: computed(() => t('page.trust_standart_chiqindilarni_b_60')),
})
</script>

<style scoped>
.compact-news-card .image-box .image {
  height: 220px;
}

.compact-news-card .image-box .image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.compact-news-card .image-box .post-date h3 {
  font-size: 16px;
  line-height: 16px;
}

.compact-news-card .lower-content {
  padding: 20px 20px 18px;
}

.compact-news-card .lower-content h3 {
  font-size: 22px;
  line-height: 1.2;
  margin-bottom: 10px;
}

.compact-news-card .lower-content h3 a {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.compact-news-card .lower-content p {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 12px;
}

@media (max-width: 767px) {
  .compact-news-card .image-box .image {
    height: 190px;
  }
}
</style>
