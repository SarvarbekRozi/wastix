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
        <h1>404 Xatolik</h1>
        <ul class="bread-crumb clearfix">
          <li><a href="/">Bosh sahifa</a></li>
          <li>404 Xatolik</li>
        </ul>
      </div>
    </div>
  </section>
  <!-- page-title end -->

  <!-- error-section -->
  <section class="error-section centred">
    <div class="auto-container">
      <div class="content-box">
        <figure class="error-image"><img src="/assets/images/icons/error.png" alt=""></figure>
        <h2>Uzr! Bu sahifa topilmadi.</h2>
        <a href="/" class="theme-btn btn-one"><i class="icon-44"></i> Bosh sahifaga qaytish</a>
      </div>
    </div>
  </section>
  <!-- error-section end -->
</template>

<script setup>
defineProps({
  error: {
    type: Object,
    default: () => ({}),
  },
})

useHead({
  title: 'Sahifa topilmadi',
})
</script>
