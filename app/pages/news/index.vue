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
        <h1>Yangiliklar</h1>
        <ul class="bread-crumb clearfix">
          <li><a href="/">Bosh sahifa</a></li>
          <li>Yangiliklar</li>
        </ul>
      </div>
    </div>
  </section>
  <!-- page-title end -->

  <!-- blog-grid -->
  <section class="blog-grid pt_150 pb_150">
    <div class="auto-container">
      <div class="row clearfix">
        <template v-if="news.length">
          <div v-for="(item, index) in news" :key="item.id"
               class="col-lg-4 col-md-6 col-sm-12 news-block">
            <div class="news-block-two compact-news-card wow fadeInUp animated"
                 :data-wow-delay="(index % 3) * 300 + 'ms'" data-wow-duration="1500ms">
              <div class="inner-box">
                <div class="image-box">
                  <figure class="image">
                    <a :href="`/news/${item.slug}`">
                      <img :src="item.image_url || `/assets/images/news/news-${(index % 9) + 4}.jpg`" alt="">
                    </a>
                  </figure>
                  <span class="post-date">{{ formatDate(item.published_at) }}</span>
                </div>
                <div class="lower-content">
                  <span class="category">Yangilik</span>
                  <h3><a :href="`/news/${item.slug}`">{{ item.title_uz }}</a></h3>
                  <p>{{ item.excerpt_uz }}</p>
                </div>
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="col-12 text-center py-5">
            <p>Yangiliklar yuklanmoqda...</p>
          </div>
        </template>
      </div>

      <div v-if="meta && meta.last_page > 1" class="pagination-wrapper centred">
        <ul class="pagination clearfix">
          <li><a href="#" @click.prevent="page > 1 && fetchPage(page - 1)"><i class="far fa-angle-left"></i></a></li>
          <li v-for="p in meta.last_page" :key="p">
            <a href="#" :class="{ current: p === page }" @click.prevent="fetchPage(p)">{{ p }}</a>
          </li>
          <li><a href="#" @click.prevent="page < meta.last_page && fetchPage(page + 1)"><i class="far fa-angle-right"></i></a></li>
        </ul>
      </div>
    </div>
  </section>
  <!-- blog-grid end -->
</template>

<script setup>
const config = useRuntimeConfig()
const page = ref(1)
const news = ref([])
const meta = ref(null)

async function fetchPage(p) {
  page.value = p
  const data = await $fetch(`${config.public.apiBase}/news?page=${p}`)
  news.value = data.data || []
  meta.value = data.meta || null
}

await fetchPage(1)

function formatDate(dateStr) {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  const months = ['YAN', 'FEV', 'MAR', 'APR', 'MAY', 'IYUN', 'IYL', 'AVG', 'SEP', 'OKT', 'NOY', 'DEK']
  return `${d.getDate()} ${months[d.getMonth()]}`
}

useHead({ title: 'Yangiliklar - Truck Standart' })
</script>

<style scoped>
.compact-news-card .image-box .image {
  height: 215px;
}

.compact-news-card .image-box .image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.compact-news-card .lower-content {
  padding: 20px 20px 16px;
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
  margin-bottom: 0;
}

@media (max-width: 767px) {
  .compact-news-card .image-box .image {
    height: 190px;
  }
}
</style>



