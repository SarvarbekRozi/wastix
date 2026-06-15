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
        <h1>{{ $t('nav.announcements') }}</h1>
        <ul class="bread-crumb clearfix">
          <li><nuxt-link to="/">{{ $t('nav.home') }}</nuxt-link></li>
          <li><nuxt-link to="/announcements">{{ $t('nav.announcements') }}</nuxt-link></li>
          <li>{{ $t('page.tafsilotlar_36') }}</li>
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
                <div class="news-gallery" :class="{ 'has-thumbs': images.length > 1 }">
                  <div class="image-box">
                    <figure class="image">
                      <a :href="activeImage" class="lightbox-image" data-fancybox="announcement-gallery"
                         :data-caption="item[`title_${$i18n.locale}`]">
                        <img :src="activeImage" :alt="item.title_uz">
                        <span class="zoom-hint"><i class="icon-23"></i></span>
                      </a>
                    </figure>
                    <div class="post-date"><h3>{{ formatDate(item.published_at) }}</h3></div>
                  </div>
                  <div v-if="images.length > 1" class="news-gallery-thumbs">
                    <button v-for="(img, i) in images" :key="i" type="button" class="thumb"
                            :class="{ active: img === activeImage }" @click="activeImage = img">
                      <img :src="img" :alt="`${item.title_uz} - ${i + 1}`">
                    </button>
                  </div>
                </div>
                <div class="lower-content">
                  <h3>{{ item[`title_${$i18n.locale}`] }}</h3>
                  <div v-html="item[`content_${$i18n.locale}`] || item[`excerpt_${$i18n.locale}`]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="text-center py-5">
        <p>{{ $t('page.e_lon_topilmadi_37') }}</p>
        <nuxt-link to="/announcements" class="theme-btn btn-one mt-3"><span>{{ $t('page.e_lonlarga_qaytish_38') }}</span></nuxt-link>
      </div>
    </div>
  </section>
  <!-- sidebar-page-container end -->
</template>

<script setup>
const config = useRuntimeConfig()
const route = useRoute()

const { data } = await useAsyncData(`announcement-${route.params.id}`, () =>
  $fetch(`${config.public.apiBase}/announcements/${route.params.id}`).catch(() => null)
)

const item = computed(() => data.value?.data || null)

const images = computed(() => {
  const urls = item.value?.image_urls
  if (Array.isArray(urls) && urls.length) return urls
  if (item.value?.image_url) return [item.value.image_url]
  return ['/assets/images/news/news-14.jpg']
})

const activeImage = ref(images.value[0])
watch(images, (v) => { activeImage.value = v[0] })

function formatDate(dateStr) {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  const monthsUz = ['YAN', 'FEV', 'MAR', 'APR', 'MAY', 'IYUN', 'IYL', 'AVG', 'SEP', 'OKT', 'NOY', 'DEK']
  const monthsRu = ['ЯНВ', 'ФЕВ', 'МАР', 'АПР', 'МАЙ', 'ИЮН', 'ИЮЛ', 'АВГ', 'СЕН', 'ОКТ', 'НОЯ', 'ДЕК']
  const { locale } = useI18n()
  const months = locale.value === 'ru' ? monthsRu : monthsUz
  return `${d.getDate()} ${months[d.getMonth()]}`
}

const { t, locale } = useI18n()
useHead({ title: computed(() => item.value ? item.value[`title_${locale.value}`] + " - Trust Standart" : t('nav.announcements')) })
</script>
<style scoped>
/* Gallery: big image left, vertical thumbnails right — full inner-box width */
.news-gallery {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.blog-details-content .news-block-one .inner-box .image-box {
  position: relative;
  flex: 1 1 auto;
  min-width: 0;
  margin: 0;
}

.blog-details-content .news-block-one .inner-box .image-box .image {
  position: relative;
  margin: 0;
  height: 540px;
  border-radius: 16px;
  overflow: hidden;
  background: #eef0f3;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.10);
}

.blog-details-content .news-block-one .inner-box .image-box .image a {
  display: block;
  width: 100%;
  height: 100%;
  cursor: zoom-in;
}

.blog-details-content .news-block-one .inner-box .image-box .image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s ease;
}

.blog-details-content .news-block-one .inner-box .image-box .image:hover img {
  transform: scale(1.05) !important;
}

/* Zoom cue on hover */
.blog-details-content .news-block-one .inner-box .image-box .image .zoom-hint {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.8);
  width: 58px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.45);
  color: #fff;
  font-size: 20px;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
}

.blog-details-content .news-block-one .inner-box .image-box .image:hover .zoom-hint {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}

/* Date badge overlays the hero corner instead of hanging below */
.blog-details-content .news-block-one .inner-box .image-box .post-date {
  right: 24px;
  bottom: 24px;
  z-index: 2;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.22);
}

/* Vertical thumbnail column on the right */
.news-gallery-thumbs {
  flex: 0 0 130px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0;
  max-height: 540px;
  overflow-y: auto;
  overflow-x: hidden;
}

.news-gallery-thumbs .thumb {
  width: 100%;
  height: 92px;
  flex: 0 0 auto;
  padding: 0;
  border: 2px solid transparent;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  background: none;
  opacity: 0.6;
  transition: opacity 0.25s ease, border-color 0.25s ease;
}

.news-gallery-thumbs .thumb:hover,
.news-gallery-thumbs .thumb.active {
  opacity: 1;
  border-color: var(--theme-color, #44bf63);
}

.news-gallery-thumbs .thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media (max-width: 767px) {
  .news-gallery {
    flex-direction: column;
  }

  .blog-details-content .news-block-one .inner-box .image-box .image {
    height: auto;
    aspect-ratio: 4 / 3;
    max-height: 300px;
    border-radius: 12px;
  }

  .blog-details-content .news-block-one .inner-box .image-box .post-date {
    right: 16px;
    bottom: 16px;
  }

  .news-gallery-thumbs {
    flex: 0 0 auto;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    max-height: none;
    overflow: visible;
  }

  .news-gallery-thumbs .thumb {
    width: 80px;
    height: 60px;
  }
}
</style>



