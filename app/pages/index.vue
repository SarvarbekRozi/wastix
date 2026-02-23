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
                                    <span class="title-text p_relative d_block">{{ slider.subtitle_uz }}</span>
                                    <h2 class="p_relative d_block">{{ slider.title_uz }}</h2>
                                    <div class="btn-box" v-if="slider.button_url">
                                        <a :href="slider.button_url" class="theme-btn btn-one"><span>{{ slider.button_text_uz || 'Batafsil' }}</span></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                                <div class="image-box p_relative">
                                    <div class="image-shape-1" style="background-image: url(/assets/images/shape/shape-2.png);"></div>
                                    <figure class="image clearfix">
                                        <img :src="slider.image_url || `/assets/images/banner/banner-${(i % 3) + 1}.jpg`"
                                             :alt="slider.title_uz" style="width:100%;border-radius:12px;object-fit:cover;max-height:420px;">
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
                                    <span class="sub-title">Biz haqimizda</span>
                                    <h2>Chiqindilarni boshqarish sohasida tajriba</h2>
                                </div>
                                <p>Biz 10 yildan ortiq tajribaga ega bo'lgan chiqindilarni yig'ish va qayta ishlash kompaniyasimiz. Zamonaviy texnologiyalar va malakali mutaxassislar yordamida shahar va tumanlarni toza saqlashga hissa qo'shamiz.</p>
                                <ul class="list-style-one mb_35 clearfix">
                                    <li>Maishiy chiqindilarni yig'ish</li>
                                    <li>Sanoat chiqindilarini qayta ishlash</li>
                                    <li>Ekologik xavfsiz utilizatsiya</li>
                                </ul>
                                <div class="btn-box">
                                    <a href="/about/organization" class="theme-btn btn-one shadow"><span>Batafsil</span></a>
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


        <!-- map-section -->
        <UzbekistanMap :apiRegions="regions" />
        <!-- map-section end -->


        <!-- service-section -->
        <section class="service-section sec-pad centred bg-color-1" style="padding: 50px 0 100px 0;!important;">
            <div class="pattern-layer" style="background-image: url(/assets/images/shape/shape-7.png);"></div>
            <div class="auto-container">
                <div class="sec-title mb_50">
                    <span class="sub-title">Xizmatlar</span>
                    <h2>Chiqindilarni boshqarish <br />xizmatlari</h2>
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
                                             :alt="service.title_uz">
                                    </a>
                                </figure>
                                <div class="lower-content">
                                    <div class="icon-box">
                                        <div class="icon-bg" style="background-image: url(/assets/images/icons/icon-bg-1.png);"></div>
                                        <div class="icon"><i :class="service.icon"></i></div>
                                    </div>
                                    <h3><a href="#">{{ service.title_uz }}</a></h3>
                                    <p>{{ service.description_uz }}</p>
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
        <section class="funfact-section">
            <div class="auto-container">
                <div class="four-item-carousel owl-carousel owl-theme owl-dots-none owl-nav-none">
                    <div v-for="stat in statistics" :key="stat.id" class="funfact-block-one">
                        <div class="inner-box">
                            <div class="icon-box"><i :class="stat.icon || 'icon-15'"></i></div>
                            <div class="count-outer count-box">
                                <span class="count-text" data-speed="1500" :data-stop="stat.value">0</span>
                                <span v-if="stat.suffix">{{ stat.suffix }}</span>
                            </div>
                            <h4>{{ stat.title_uz }}</h4>
                        </div>
                    </div>
                </div>
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
                                        {{ settings.chooseus_phone_label || '+998 71 200 00 00' }}
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
                                    <span class="sub-title">Nima uchun biz</span>
                                    <h2>{{ settings.chooseus_title || 'Nima uchun bizning xizmatlarimizni tanlash kerak' }}</h2>
                                </div>
                                <div class="text-box mb_35">
                                    <p>{{ settings.chooseus_description || 'Biz mijozlarimizga eng sifatli xizmatlarni taqdim etishga intilamiz.' }}</p>
                                </div>
                                <div class="inner-box mb_35">
                                    <div class="single-item">
                                        <div class="icon-box"><i :class="settings.chooseus_item_1_icon || 'icon-19'"></i></div>
                                        <h3>{{ settings.chooseus_item_1_title || 'Uy-joy chiqindilari' }}</h3>
                                        <p>{{ settings.chooseus_item_1_desc }}</p>
                                    </div>
                                    <div class="single-item">
                                        <div class="icon-box"><i :class="settings.chooseus_item_2_icon || 'icon-20'"></i></div>
                                        <h3>{{ settings.chooseus_item_2_title || 'Katta konteynerlar' }}</h3>
                                        <p>{{ settings.chooseus_item_2_desc }}</p>
                                    </div>
                                </div>
                                <div class="btn-box">
                                    <a href="/contact" class="theme-btn btn-one shadow"><span>Bog'lanish</span></a>
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
                    <h2>{{ settings.cta_title || "Bizning mijozimiz bo'ling va maxsus xizmatlardan foydalaning" }}</h2>
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
                                <span class="sub-title">Qayta ishlanadigan materiallar</span>
                                <h2>Biz barcha turdagi materiallarni yig'amiz va qayta ishlaymiz</h2>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12 list-column">
                            <div class="list-inner pl_140">
                                <div class="row clearfix">
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <ul class="list-style-one clearfix">
                                            <li>Temir va po'lat</li>
                                            <li>Plastmassa</li>
                                            <li>Lampalar va chiroqlar</li>
                                            <li>Kitob va qog'oz</li>
                                            <li>Shisha idishlar</li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <ul class="list-style-one clearfix">
                                            <li>Oziq-ovqat qoldiqlari</li>
                                            <li>Maishiy chiqindilar</li>
                                            <li>Gazeta va jurnallar</li>
                                            <li>Elektron chiqindilar</li>
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
        <section class="testimonial-section centred sec-pad" style="padding: 50px 0 0 0;">
            <div class="auto-container">
                <div class="sec-title mb_50">
                    <span class="sub-title">Mijozlar fikri</span>
                    <h2>Mijozlarimiz biz haqimizda <br />nima deydi</h2>
                </div>
                <div class="three-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one" id="testimonialCarousel">
                    <div v-for="(t, i) in testimonials" :key="t.id" class="testimonial-block-one">
                        <div class="inner-box">
                            <div class="text-box">
                                <ul class="rating clearfix">
                                    <li v-for="n in t.rating" :key="n"><i class="icon-21"></i></li>
                                    <li v-for="n in (5 - t.rating)" :key="'e'+n"><i class="icon-22"></i></li>
                                </ul>
                                <p>{{ t.content_uz }}</p>
                                <figure class="thumb-box">
                                    <img :src="`/assets/images/resource/testimonial-${(i % 3) + 1}.png`" alt="Mijoz">
                                </figure>
                            </div>
                            <div class="author-box">
                                <h3>{{ t.name }}</h3>
                                <span class="designation">{{ t.position_uz }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- testimonial-section end -->


        <!-- news-section -->
        <section class="news-section sec-pad">
            <div class="auto-container">
                <div class="sec-title mb_50 centred">
                    <span class="sub-title">Yangiliklar</span>
                    <h2>Bizning so'nggi <br />yangiliklar</h2>
                </div>
                <div class="row clearfix">
                    <div v-for="(item, i) in latestNews" :key="item.id"
                         class="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div class="news-block-one wow fadeInUp animated"
                             :data-wow-delay="(i * 300) + 'ms'" data-wow-duration="1500ms">
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
                                    <ul class="post-info mb_6 clearfix">
                                        <li><i class="icon-24"></i><span>{{ item.author || 'Tahririyat' }}</span></li>
                                        <li><i class="icon-25"></i>{{ item.views }}</li>
                                    </ul>
                                    <h3><a :href="`/news/${item.slug}`">{{ item.title_uz }}</a></h3>
                                    <p>{{ item.excerpt_uz }}</p>
                                    <div class="link"><a :href="`/news/${item.slug}`"><i class="icon-26"></i></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- news-section end -->
</template>

<script setup>
const config = useRuntimeConfig()

// useAsyncData ensures SSR + client-side refetch if SSR fails
const { data: homeData } = await useAsyncData('home', () =>
  $fetch(`${config.public.apiBase}/home`).catch(() => ({}))
)

const sliders      = computed(() => homeData.value?.sliders     || [])
const statistics   = computed(() => homeData.value?.statistics  || [])
const services     = computed(() => homeData.value?.services    || [])
const latestNews   = computed(() => homeData.value?.latest_news || [])
const testimonials = computed(() => homeData.value?.testimonials || [])
const regions      = computed(() => homeData.value?.regions     || [])
const settings     = computed(() => homeData.value?.settings    || {})

const features = computed(() => [
  { icon: settings.value.feature_1_icon || 'icon-8',  title: settings.value.feature_1_title || "Konteyner o'lchamlari", desc: settings.value.feature_1_desc || "Har xil hajmdagi konteynerlar mavjud." },
  { icon: settings.value.feature_2_icon || 'icon-9',  title: settings.value.feature_2_title || "Chiqindi yig'ish",       desc: settings.value.feature_2_desc || "Muntazam chiqindi yig'ish xizmati." },
  { icon: settings.value.feature_3_icon || 'icon-10', title: settings.value.feature_3_title || "Yig'ish jadvali",        desc: settings.value.feature_3_desc || "Qulay vaqtda chiqindi olib ketish." },
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

onMounted(() => {
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

    // Testimonials carousel
    if (testimonials.value.length) {
      initCarousel($('#testimonialCarousel'), {
        loop: testimonials.value.length > 2,
        margin: 30, nav: true, dots: false,
        autoplay: true, autoplayTimeout: 4000, smartSpeed: 700,
        navText: ['<span class="icon-30"></span>', '<span class="icon-31"></span>'],
        responsive: { 0: { items: 1 }, 768: { items: 2 }, 1024: { items: 3 } }
      })
    }

    // Funfact stats carousel
    if (statistics.value.length) {
      initCarousel($('.four-item-carousel'), {
        loop: true, margin: 0, nav: false, dots: false,
        autoplay: true, autoplayTimeout: 3000, smartSpeed: 700,
        responsive: { 0: { items: 1 }, 600: { items: 2 }, 992: { items: 4 } }
      })
    }
  })
})

useHead({
  title: 'Truck Standart - Chiqindilarni boshqarish xizmatlari',
})
</script>
