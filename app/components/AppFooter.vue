<template>
<!-- main-footer -->
        <footer class="main-footer">
            <div class="pattern-layer" style="background-image: url(/assets/images/shape/shape-13.png);"></div>
            <div class="footer-top">
                <div class="auto-container">
                    <div class="row clearfix">
                        <div class="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div class="footer-widget logo-widget mr_60">
                                <figure class="footer-logo"><a href="/"><img src="/assets/images/logo-white.png" alt="" style="max-height:70px;width:auto;"></a></figure>
                                <div class="text-box">
                                    <p>{{ $t('page.chiqindilarni_yig_ish_tashish__85') }}</p>
                                    <p>{{ $t('page.barqaror_ekologiya_va_toza_sha_86') }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-6 col-sm-12 footer-column">
                            <div class="footer-widget links-widget ml_40">
                                <div class="widget-title">
                                    <h3>{{ $t('page.havolalar_87') }}</h3>
                                </div>
                                <div class="widget-content">
                                    <ul class="links-list clearfix">
                                        <li><nuxt-link to="/about/organization">{{ $t('nav.about_org') }}</nuxt-link></li>
                                        <li><nuxt-link to="/regions">{{ $t('nav.regions') }}</nuxt-link></li>
                                        <li><nuxt-link to="/news">{{ $t('nav.news') }}</nuxt-link></li>
                                        <li><nuxt-link to="/announcements">{{ $t('nav.announcements') }}</nuxt-link></li>
                                        <li><nuxt-link to="/contact">{{ $t('nav.contact') }}</nuxt-link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 footer-column">
                            <div class="footer-widget schedule-widget ml_60 mr_70">
                                <div class="widget-title">
                                    <h3>{{ $t('header.work_time') }}</h3>
                                </div>
                                <div class="widget-content">
                                    <p>{{ $t('page.qabul_va_xizmatlar_jadvali_88') }}</p>
                                    <ul class="schedule-list clearfix">
                                        <li>{{ $t('page.dush_juma_9_00_18_00_89') }}</li>
                                        <li>{{ $t('page.shan_yak_9_00_14_00_90') }}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div class="footer-widget contact-widget">
                                <div class="widget-title">
                                    <h3>{{ $t('common.contact_us') }}</h3>
                                </div>
                                <div class="widget-content">
                                    <ul class="info-list mb_30 clearfix">
                                        <li><i class="icon-3"></i>{{ $t('header.address') }} {{ $t('page.toshkent_sh_chilonzor_tumani_91') }}</li>
                                        <li style="display: flex; gap: 5px;"><i class="icon-2"></i>Email: <a href="mailto:Truststandartuz@gmail.com">Truststandartuz@gmail.com</a></li>
                                        <li><i class="icon-4"></i>{{ $t('page.telefon_92') }}:  <a href="tel:+998712000000">+998 71 200 00 00</a></li>
                                    </ul>
                                    <ul class="social-links clearfix">
                                        <li><a href="/"><i class="fab fa-instagram"></i></a></li>
                                        <li><a href="/"><i class="fab fa-telegram-plane"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom centred">
                <div class="auto-container">
                    <div class="copyright">
                        <p>Copyright 2024 by <a href="/">Truststandart</a>. {{ $t('footer.rights') }}.</p>
                    </div>
                </div>
            </div>
        </footer>
        <!-- main-footer -->



        <!--Scroll to top-->
        <div class="scroll-to-top">
            <div>
                <div class="scroll-top-inner">
                    <div class="scroll-bar">
                        <div class="bar-inner"></div>
                    </div>
                    <div class="scroll-bar-text">Go To Top</div>
                </div>
            </div>
        </div>
        <!-- Scroll to top end -->
</template>
