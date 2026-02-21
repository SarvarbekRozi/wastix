<template>
  <!-- page-title -->
  <section class="page-title p_relative centred">
    <div class="bg-layer" style="background-image: url(/assets/images/background/page-title.jpg);"></div>
    <div class="pattern-layer">
      <div class="pattern-1" style="background-image: url(/assets/images/shape/shape-14.png);"></div>
      <div class="pattern-2" style="background-image: url(/assets/images/shape/shape-14.png);"></div>
      <div class="pattern-3 rotate-me" style="background-image: url(/assets/images/shape/shape-15.png);"></div>
      <div class="pattern-4 float-bob-y" style="background-image: url(/assets/images/shape/shape-16.png);"></div>
    </div>
    <div class="auto-container">
      <div class="content-box">
        <h1>{{ settings.about_subtitle || 'Biz haqimizda' }}</h1>
        <ul class="bread-crumb clearfix">
          <li><a href="/">Bosh sahifa</a></li>
          <li>Tashkilot haqida</li>
        </ul>
      </div>
    </div>
  </section>
  <!-- page-title end -->


  <!-- about-section -->
  <section class="about-section sec-pad">
    <div class="pattern-layer" style="background-image: url(/assets/images/shape/shape-2.png);"></div>
    <div class="auto-container">
      <div class="row clearfix">
        <div class="col-lg-6 col-md-12 col-sm-12 content-column">
          <div class="content_block_one">
            <div class="content-box mr_40">
              <div class="sec-title mb_25">
                <span class="sub-title">Biz haqimizda</span>
                <h2>{{ settings.about_subtitle || 'Chiqindilarni boshqarish sohasida tajriba' }}</h2>
              </div>
              <p>{{ settings.about_text || "Biz 10 yildan ortiq tajribaga ega bo'lgan kompaniyamiz." }}</p>
              <ul class="list-style-one mb_35 clearfix">
                <li v-if="settings.about_list_1">{{ settings.about_list_1 }}</li>
                <li v-if="settings.about_list_2">{{ settings.about_list_2 }}</li>
                <li v-if="settings.about_list_3">{{ settings.about_list_3 }}</li>
              </ul>
              <div class="btn-box">
                <a href="/contact" class="theme-btn btn-one shadow"><span>Bog'lanish</span></a>
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


  <!-- mission-vision -->
  <section class="chooseus-section pt_100 pb_100" v-if="settings.about_mission || settings.about_vision">
    <div class="auto-container">
      <div class="row clearfix">
        <div class="col-lg-6 col-md-12 col-sm-12 mb_30">
          <div class="content-card" style="background:#f8faf8;border-radius:12px;padding:32px;height:100%;">
            <div class="icon-box mb_20">
              <i class="icon-19" style="font-size:40px;color:#1a7f3c;"></i>
            </div>
            <h3 class="mb_15">Missiyamiz</h3>
            <p style="color:#555;line-height:1.8;">{{ settings.about_mission }}</p>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12 mb_30">
          <div class="content-card" style="background:#f8faf8;border-radius:12px;padding:32px;height:100%;">
            <div class="icon-box mb_20">
              <i class="icon-20" style="font-size:40px;color:#1a7f3c;"></i>
            </div>
            <h3 class="mb_15">Maqsadimiz</h3>
            <p style="color:#555;line-height:1.8;">{{ settings.about_vision }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- mission-vision end -->


  <!-- funfact-section -->
  <section class="funfact-section" v-if="statistics.length">
    <div class="auto-container">
      <div class="row clearfix">
        <div v-for="stat in statistics" :key="stat.id" class="col-lg-3 col-md-6 col-sm-12">
          <div class="funfact-block-one">
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
    </div>
  </section>
  <!-- funfact-section end -->


  <!-- team section preview -->
  <section class="sec-pad centred" v-if="leadership.length">
    <div class="auto-container">
      <div class="sec-title mb_50">
        <span class="sub-title">Rahbariyat</span>
        <h2>Tashkilot rahbariyati</h2>
      </div>
      <div class="row clearfix">
        <div v-for="member in leadership" :key="member.id"
             class="col-lg-3 col-md-6 col-sm-12 team-block mb_30">
          <div class="team-block-one wow fadeInUp animated">
            <div class="inner-box">
              <figure class="image-box">
                <img :src="member.image_url || '/assets/images/team/team-1.jpg'" :alt="member.name_uz">
              </figure>
              <div class="lower-content">
                <h3>{{ member.name_uz }}</h3>
                <span class="designation">{{ member.position_uz }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt_20">
        <a href="/about/leadership" class="theme-btn btn-one"><span>Barchasi</span></a>
      </div>
    </div>
  </section>
  <!-- team end -->
</template>

<script setup>
const config = useRuntimeConfig()

const { data: aboutData } = await useAsyncData('about', () =>
  $fetch(`${config.public.apiBase}/about`).catch(() => ({}))
)

const settings   = computed(() => aboutData.value?.settings   || {})
const statistics = computed(() => aboutData.value?.statistics || [])
const leadership = computed(() => aboutData.value?.leadership || [])

useHead({
  title: 'Truck Standart - Tashkilot haqida',
})
</script>
