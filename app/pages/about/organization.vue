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
        <h1>{{ $t('nav.about_org') }}</h1>
        <ul class="bread-crumb clearfix">
          <li><nuxt-link to="/">{{ $t('nav.home') }}</nuxt-link></li>
          <li>{{ $t('nav.about_org') }}</li>
        </ul>
      </div>
    </div>
  </section>
  <!-- page-title end -->


  <!-- service-details -->
  <section class="service-details">
    <div class="auto-container">
      <div class="row clearfix">
        <div class="col-lg-4 col-md-12 col-sm-12 sidebar-side">
          <div class="service-sidebar default-sidebar mr_40">
            <div class="question-widget sidebar-widget">
              <div class="widget-title">
                <h3>{{ $t('page.savol_bering_8') }}</h3>
              </div>
              <div class="form-inner">
                <form method="post" action="/contact">
                  <div class="form-group">
                    <input type="text" name="name" :placeholder="$t('contact.placeholder_name')" required>
                  </div>
                  <div class="form-group">
                    <input type="email" name="email" :placeholder="$t('contact.placeholder_email')" required>
                  </div>
                  <div class="form-group">
                    <input type="text" name="phone" :placeholder="$t('contact.placeholder_phone')" required>
                  </div>
                  <div class="form-group">
                    <textarea name="message" :placeholder="$t('contact.placeholder_msg')"></textarea>
                  </div>
                  <div class="form-group message-btn">
                    <button type="submit" class="theme-btn btn-one"><span>{{ $t('contact.send_btn') }}</span></button>
                  </div>
                </form>
              </div>
            </div>
            <div class="contact-widget centred">
              <div class="widget-content">
                <div class="icon-box"><i class="icon-39"></i></div>
                <h3>Yordam <br />kerakmi?</h3>
                <div class="lower-box">
                  <p><a href="mailto:example@info.com">example@info.com</a></p>
                  <h2><a href="tel:913336660021">(+91) 333 666 0021</a></h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8 col-md-12 col-sm-12 content-side">
          <div class="service-details-content">
            <div class="content-one mb_65">
              <figure class="image-box"><img src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80" alt="Chiqindi xizmatlari"></figure>
              <div class="text-box">
                <h2>Chiqindi olib ketish</h2>
                <p>Biz chiqindilarni belgilangan jadval bo‘yicha olib ketib, hududni ozoda saqlashga yordam beramiz. Jarayon tez, tartibli va ekologik talablarga mos tarzda tashkil qilinadi.</p>
                <p>Xizmatimiz kichik biznesdan tortib, yirik obyektlargacha moslashtiriladi. Kerakli konteynerlar, yig‘ish punktlari va tashish yo‘nalishlari sizning ehtiyojingizga qarab belgilanadi.</p>
              </div>
              <div class="inner-box">
                <div class="row clearfix">
                  <div class="col-lg-6 col-md-6 col-sm-12 single-column">
                    <div class="single-item">
                      <div class="icon-box"><i class="icon-40"></i></div>
                      <h3>{{ $t('page.chiqindini_yig_ish_9') }}</h3>
                      <p>{{ $t('page.hududingiz_bo_yicha_xavfsiz_va_10') }}</p>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12 single-column">
                    <div class="single-item">
                      <div class="icon-box"><i class="icon-40"></i></div>
                      <h3>{{ $t('page.qayta_ishlash_11') }}</h3>
                      <p>{{ $t('page.ajratilgan_chiqindilarni_qayta_12') }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="content-two mb_65">
              <div class="text-box mb_65">
                <h3>{{ $t('page.xizmat_afzalliklari_13') }}</h3>
                <p>{{ $t('page.tartibli_reja_aniq_muddatlar_v_14') }}</p>
                <ul class="list-style-one clearfix">
                  <li>{{ $t('page.moslashuvchan_jadval_va_tezkor_15') }}</li>
                  <li>{{ $t('page.ekologik_talablarga_rioya_16') }}</li>
                  <li>{{ $t('page.mutaxassislar_nazorati_17') }}</li>
                </ul>
              </div>
              <div class="image-inner">
                <div class="row clearfix">
                  <div class="col-lg-6 col-md-6 col-sm-12 image-column">
                    <figure class="image-box"><img src="/assets/images/service/service-5.jpg" alt="Chiqindi konteyneri"></figure>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12 image-column">
                    <figure class="image-box"><img src="/assets/images/service/service-6.jpg" alt="Qayta ishlash"></figure>
                  </div>
                </div>
              </div>
            </div>
            <div class="content-three">
              <div class="text-box mb_55">
                <h3>{{ $t('page.yechimlarimiz_18') }}</h3>
                <p>{{ $t('page.hududingiz_va_hajmingizga_mos__19') }}</p>
              </div>
              <div class="accordion-inner">
                <h3>{{ $t('page.biz_sizga_mas_uliyat_bilan_yor_20') }}</h3>
                <ul class="accordion-box">
                  <li class="accordion block active-block">
                    <div class="acc-btn active">
                      <div class="icon-box"><i class="icon-33"></i></div>
                      <h4>{{ $t('page.biznesim_uchun_qaysi_hajmdagi__21') }}</h4>
                    </div>
                    <div class="acc-content current">
                      <div class="text">
                        <p>{{ $t('page.chiqindi_hajmi_yig_ish_tezligi_22') }}</p>
                      </div>
                    </div>
                  </li>
                  <li class="accordion block">
                    <div class="acc-btn">
                      <div class="icon-box"><i class="icon-33"></i></div>
                      <h4>{{ $t('page.konteynerlar_qayerga_o_rnatila_23') }}</h4>
                    </div>
                    <div class="acc-content">
                      <div class="text">
                        <p>{{ $t('page.qulay_kirish_va_xavfsizlikni_i_24') }}</p>
                      </div>
                    </div>
                  </li>
                  <li class="accordion block">
                    <div class="acc-btn">
                      <div class="icon-box"><i class="icon-33"></i></div>
                      <h4>{{ $t('page.chiqindi_qanchalik_tez_tez_oli_25') }}</h4>
                    </div>
                    <div class="acc-content">
                      <div class="text">
                        <p>{{ $t('page.jadval_sizning_ehtiyojingizga__26') }}</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- service-details end -->




  <!-- jequery plugins -->












  <!-- main-js -->

</template>

<script setup>
const { t } = useI18n()
useHead({
  title: computed(() => `${t('nav.about_org')} - Trust Standart`),
})
</script>








