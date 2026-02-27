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
        <h1>Bizning hududlar</h1>
        <ul class="bread-crumb clearfix">
          <li><a href="/">Bosh sahifa</a></li>
          <li>Hududlar</li>
        </ul>
      </div>
    </div>
  </section>
  <!-- page-title end -->

  <!-- sidebar-page-container -->
  <section class="sidebar-page-container pt_150 pb_150">
    <div class="auto-container">
      <div class="row clearfix">
        <div class="col-lg-8 col-md-12 col-sm-12 content-side">
          <div class="blog-classic-content">
            <div v-for="(region, i) in regions" :key="region.id"
                 class="news-block-one wow fadeInUp animated"
                 :data-wow-delay="(i * 200) + 'ms'" data-wow-duration="1500ms">
              <div class="inner-box">
                <div class="image-box">
                  <figure class="image">
                    <a :href="`/regions/${region.slug}`">
                      <img :src="region.image_url || `/assets/images/project/project-${(i % 6) + 1}.jpg`" :alt="region.name_uz">
                    </a>
                  </figure>
                  <div v-if="region.districts_count" class="post-date"><h3>{{ region.districts_count }} tuman</h3></div>
                </div>
                <div class="lower-content">
                  <ul v-if="region.phone" class="post-info mb_6 clearfix">
                    <li><i class="icon-4"></i>{{ region.phone }}</li>
                  </ul>
                  <h3><a :href="`/regions/${region.slug}`">{{ region.name_uz }}</a></h3>
                  <p>{{ region.description_uz }}</p>
                  <div class="link"><a :href="`/regions/${region.slug}`"><i class="icon-26"></i></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12 sidebar-side">
          <div class="blog-sidebar default-sidebar ml_40">
            <div class="sidebar-widget category-widget">
              <div class="widget-title">
                <h3>Xizmat turlari</h3>
              </div>
              <div class="widget-content">
                <ul class="category-list clearfix">
                  <li><a href="#"><span>Chiqindi yig'ish</span></a></li>
                  <li><a href="#"><span>Konteyner ijarasi</span></a></li>
                  <li><a href="#"><span>Qayta ishlash</span></a></li>
                  <li><a href="#"><span>Sanoat chiqindilari</span></a></li>
                  <li><a href="#"><span>Turar-joy xizmati</span></a></li>
                  <li><a href="#"><span>Maxsus chiqindilar</span></a></li>
                </ul>
              </div>
            </div>
            <div class="sidebar-widget contact-widget centred">
              <div class="widget-content">
                <div class="icon-box"><i class="icon-39"></i></div>
                <h3>Yordam <br />kerakmi?</h3>
                <div class="lower-box">
                  <p><a href="mailto:info@wastix.uz">info@wastix.uz</a></p>
                  <h2><a href="tel:+998712000000">+998 71 200 00 00</a></h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- sidebar-page-container end -->
</template>

<script setup>
const config = useRuntimeConfig()
const data = await $fetch(`${config.public.apiBase}/regions`).catch(() => ({ data: [] }))
const regions = data.data || []

useHead({ title: 'Bizning hududlar - Truck Standart' })
</script>



