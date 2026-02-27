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
        <h1>Xodimlar</h1>
        <ul class="bread-crumb clearfix">
          <li><a href="/">Bosh sahifa</a></li>
          <li>Xodimlar</li>
        </ul>
      </div>
    </div>
  </section>
  <!-- page-title end -->

  <!-- team-section -->
  <section class="team-section team-page alternat-2 pt_150 pb_100 centred">
    <div class="auto-container">
      <div class="row clearfix">
        <div v-for="(member, i) in members" :key="member.id"
             class="col-lg-4 col-md-6 col-sm-12 team-block">
          <div class="team-block-one mb_75 wow fadeInUp animated"
               :data-wow-delay="(i % 3) * 300 + 'ms'" data-wow-duration="1500ms">
            <div class="inner-box">
              <figure class="image-box">
                <img :src="member.image_url || `/assets/images/team/team-${(i % 6) + 7}.jpg`"
                     :alt="member.name_uz">
              </figure>
              <div class="lower-content">
                <h3>{{ member.name_uz }}</h3>
                <span class="designation">{{ member.title_uz }}</span>
                <div class="share-box">
                  <div class="share-icon"><i class="fas fa-share-alt"></i></div>
                  <ul class="social-links clearfix">
                    <li><a href="/"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="/"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="/"><i class="fab fa-linkedin-in"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- team-section end -->
</template>

<script setup>
const config = useRuntimeConfig()
const data = await $fetch(`${config.public.apiBase}/team/staff`).catch(() => ({ data: [] }))
const members = data.data || []

useHead({ title: 'Xodimlar - Truck Standart' })
</script>
