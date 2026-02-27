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
        <h1>E'lon tafsilotlari</h1>
        <ul class="bread-crumb clearfix">
          <li><a href="/">Bosh sahifa</a></li>
          <li><a href="/announcements">E'lonlar</a></li>
          <li>Tafsilotlar</li>
        </ul>
      </div>
    </div>
  </section>
  <!-- page-title end -->

  <!-- sidebar-page-container -->
  <section class="sidebar-page-container blog-details pt_150 pb_150">
    <div class="auto-container">
      <div v-if="item" class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 content-side">
          <div class="blog-details-content">
            <div class="news-block-one">
              <div class="inner-box">
                <div class="image-box">
                  <figure class="image">
                    <img :src="item.image_url || '/assets/images/news/news-14.jpg'" :alt="item.title_uz">
                  </figure>
                  <div class="post-date"><h3>{{ formatDate(item.published_at) }}</h3></div>
                </div>
                <div class="lower-content">
                  <h3>{{ item.title_uz }}</h3>
                  <div v-html="item.content_uz || item.excerpt_uz"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="text-center py-5">
        <p>E'lon topilmadi.</p>
        <a href="/announcements" class="theme-btn btn-one mt-3"><span>E'lonlarga qaytish</span></a>
      </div>
    </div>
  </section>
  <!-- sidebar-page-container end -->
</template>

<script setup>
const config = useRuntimeConfig()
const route = useRoute()
const item = ref(null)

try {
  const data = await $fetch(`${config.public.apiBase}/announcements/${route.params.id}`)
  item.value = data.data
} catch (e) {
  item.value = null
}

function formatDate(dateStr) {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  const months = ['YAN', 'FEV', 'MAR', 'APR', 'MAY', 'IYUN', 'IYL', 'AVG', 'SEP', 'OKT', 'NOY', 'DEK']
  return `${d.getDate()} ${months[d.getMonth()]}`
}

useHead({ title: item.value ? item.value.title_uz + " - Truck Standart" : "E'lon" })
</script>
<style scoped>
.blog-details-content .news-block-one .inner-box .image-box .image {
  height: 360px;
}

.blog-details-content .news-block-one .inner-box .image-box .image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 767px) {
  .blog-details-content .news-block-one .inner-box .image-box .image {
    height: 220px;
  }
}
</style>



