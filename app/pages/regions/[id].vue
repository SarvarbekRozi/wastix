<template>





  <!-- page-title -->
  <section class="page-title p_relative centred">
    <div class="bg-layer" style="background-image: url(https://images.unsplash.com/photo-1532996122724-e3c893ab4ffa?w=1920&q=80);"></div>
    <div class="pattern-layer">
      <div class="pattern-1" style="background-image: url(/assets/images/shape/shape-14.png);"></div>
      <div class="pattern-2" style="background-image: url(/assets/images/shape/shape-14.png);"></div>
      <div class="pattern-3 rotate-me" style="background-image: url(/assets/images/shape/shape-15.png);"></div>
      <div class="pattern-4 float-bob-y" style="background-image: url(/assets/images/shape/shape-16.png);"></div>
    </div>
    <div class="auto-container">
      <div class="content-box">
        <h1>{{ $t('page.hudud_tafsilotlari_74') }}</h1>
        <ul class="bread-crumb clearfix">
          <li><nuxt-link to="/">{{ $t('nav.home') }}</nuxt-link></li>
          <li>{{ $t('page.hudud_tafsilotlari_75') }}</li>
        </ul>
      </div>
    </div>
  </section>
  <!-- page-title end -->


  <!-- sidebar-page-container -->
  <section class="sidebar-page-container blog-details pt_150 pb_150">
    <div class="auto-container">
      <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 content-side">
          <div class="blog-details-content">
            <div class="news-block-one">
              <div class="inner-box">
                <div class="image-box">
                  <figure class="image"><img src="/assets/images/news/news-15.jpg" alt=""></figure>
                </div>
                <div class="lower-content">
                  <h3>{{ $t('page.hudud_haqida_qisqacha_76') }}</h3>
                  <p>{{ $t('page.ushbu_sahifa_hududning_asosiy__77') }}</p>
                  <p>{{ $t('page.hududda_ekologiya_chiqindilarn_78') }}</p>
                </div>
              </div>
            </div>
            <div class="content-one mb_100">
              <div class="group-title">
                <h3>{{ $t('page.hududdagi_xizmatlar_79') }}</h3>
              </div>
              <p>{{ $t('page.hudud_aholisiga_qulaylik_yarat_80') }}</p>
              <ul class="list-style-one clearfix">
                <li>{{ $t('page.chiqindilarni_yig_ish_va_olib__81') }}</li>
                <li>{{ $t('page.qayta_ishlashga_yo_naltirish_v_82') }}</li>
                <li>{{ $t('page.aholi_bilan_murojaat_va_xizmat_83') }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- sidebar-page-container end -->




  <!-- jequery plugins -->












  <!-- main-js -->

</template>

<script setup>
const { t, locale } = useI18n()
useHead({
  title: computed(() => `${t('page.hudud_tafsilotlari_84')} - Trust Standart`),
})
</script>








