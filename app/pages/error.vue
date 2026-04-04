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
                    <h1>{{ $t('page.404_xatolik_39') }}</h1>
                    <ul class="bread-crumb clearfix">
                        <li><nuxt-link to="/">{{ $t('nav.home') }}</nuxt-link></li>
                        <li>{{ $t('page.404_xatolik_40') }}</li>
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
                    <h2>{{ $t('page.kechirasiz_sahifa_topilmadi_41') }}</h2>
                    <nuxt-link to="/" class="theme-btn btn-one"><i class="icon-44"></i> {{ $t('page.bosh_sahifaga_qaytish_42') }}</nuxt-link>
                </div>
            </div>
        </section>
        <!-- error-section end -->


        
        
    <!-- jequery plugins -->
    
    
    
    
    
    
    
    
    
    
    

    <!-- main-js -->
    
</template>

<script setup>
const { t, locale } = useI18n()
useHead({
  title: computed(() => `${t('page.sahifa_topilmadi_43')} - Trust Standart`),
})
</script>





