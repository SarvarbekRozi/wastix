<template>
<!-- preloader -->
        <div class="loader-wrap">
            <div class="preloader">
                <div class="preloader-close">close</div>
                <div id="handle-preloader" class="handle-preloader">
                    <div class="animation-preloader">
                        <div class="spinner"></div>
                        <div class="txt-loading">
                            <img src="/images/logo.png" alt="Trust Standart ECO" style="height:80px;object-fit:contain;margin-top:12px;">
                        </div>
                    </div>  
                </div>
            </div>
        </div>
        <!-- preloader end -->


        <!-- page-direction -->
        <div class="page_direction">
            <div class="demo-rtl direction_switch"><button class="rtl">RTL</button></div>
            <div class="demo-ltr direction_switch"><button class="ltr">LTR</button></div>
        </div>
        <!-- page-direction end -->


        <!-- switcher menu -->
        <div class="switcher">
            <div class="switch_btn">
                <button><i class="fas fa-palette"></i></button>
            </div>
            <div class="switch_menu">
                <!-- color changer -->
                <div class="switcher_container">
                    <ul id="styleOptions" title="switch styling">
                        <li>
                            <a href="javascript: void(0)" data-theme="theme-color" class="theme-color"></a>
                        </li>
                        <li>
                            <a href="javascript: void(0)" data-theme="pink" class="pink-color"></a>
                        </li>
                        <li>
                            <a href="javascript: void(0)" data-theme="violet" class="violet-color"></a>
                        </li>
                        <li>
                            <a href="javascript: void(0)" data-theme="crimson" class="crimson-color"></a>
                        </li>
                        <li>
                            <a href="javascript: void(0)" data-theme="orange" class="orange-color"></a>
                        </li>
                    </ul>
                </div> 
            </div>
        </div>
        <!-- end switcher menu -->


        <!--Search Popup-->
        <div id="search-popup" class="search-popup">
            <div class="popup-inner">
                <div class="upper-box clearfix">
                    <figure class="logo-box pull-left"><a href="/"><img src="/assets/images/logo.png" alt="" style="max-height:55px;width:auto;"></a></figure>
                    <div class="close-search pull-right"><span class="far fa-times"></span></div>
                </div>
                <div class="overlay-layer"></div>
                <div class="auto-container">
                    <div class="search-form">
                        <form method="post" action="/">
                            <div class="form-group">
                                <fieldset>
                                    <input type="search" class="form-control" name="search-input" value="" placeholder="Type your keyword and hit" required >
                                    <button type="submit"><i class="far fa-search"></i></button>
                                </fieldset>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


        <!-- main header -->
        <header class="main-header">
            <!-- header-top -->
            <div class="header-top">
                <div class="top-inner">
                    <div class="top-left">
                        <ul class="info-list clearfix">
                            <li><i class="icon-1"></i>Ish vaqti: <span>Dush-Shan 8:00 - 18:00</span></li>
                            <li><i class="icon-2"></i>Email: <a href="mailto:info@waste.uz">info@waste.uz</a></li>
                            <li><i class="icon-3"></i>Manzil: <span>Toshkent sh., Chilonzor tumani</span></li>
                        </ul>
                    </div>
                    <div class="top-right">
<!--                        <div class="login-box"><a href="/">Kirish</a></div>-->
                        <ul class="social-links clearfix">
                            <li><a href="/"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="/"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="/"><i class="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- header-lower -->
            <div class="header-lower">
                <div class="outer-box">
                    <div class="logo-box">
                        <figure class="logo"><a href="/"><img src="/assets/images/logo.png" alt="" style="max-height:65px;width:auto;"></a></figure>
                    </div>
                    <div class="menu-area">
                        <!--Mobile Navigation Toggler-->
                        <div class="mobile-nav-toggler">
                            <i class="icon-bar"></i>
                            <i class="icon-bar"></i>
                            <i class="icon-bar"></i>
                        </div>
                        <nav class="main-menu navbar-expand-md navbar-light clearfix">
                            <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                <ul class="navigation clearfix">
                                    <li class="current"><a href="/">Bosh sahifa</a></li>
                                    <li class="dropdown"><a href="/about/organization">Biz haqimizda</a>
                                        <ul>
                                            <li><a href="/about/organization">Tashkilot haqida</a></li>
                                            <li><a href="/about/leadership">Rahbariyat</a></li>
                                            <li><a href="/about/staff">Xodimlar</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/regions">Bizning hududlar</a></li>
                                    <li><a href="/news">Yangiliklar</a></li>
                                    <li><a href="/announcements">E'lonlar</a></li>
                                    <li><a href="/contact">Aloqa</a></li>
                                </ul>
                            </div>
                        </nav>
                        <ul class="menu-right-content">
                            <li class="support-box">
                                <i class="icon-4"></i>
                                <a href="tel:+998712000000">+998 71 200 00 00</a>
                            </li>
                            <li class="search-box-outer search-toggler">
                                <i class="icon-5"></i>
                            </li>
<!--                            <li class="btn-box">-->
<!--                                <a href="/contact" class="theme-btn btn-one"><span>Ariza qoldirish</span></a>-->
<!--                            </li>-->
                        </ul>
                    </div>
                </div>
            </div>

            <!--sticky Header-->
            <div class="sticky-header">
                <div class="outer-container">
                    <div class="outer-box">
                        <div class="logo-box">
                            <figure class="logo"><a href="/"><img src="/assets/images/logo.png" alt="" style="max-height:65px;width:auto;"></a></figure>
                        </div>
                        <div class="menu-area">
                            <nav class="main-menu clearfix">
                                <!--Keep This Empty / Menu will come through Javascript-->
                            </nav>
                            <ul class="menu-right-content">
                                <li class="support-box">
                                    <i class="icon-4"></i>
                                    <a href="tel:+998712000000">+998 71 200 00 00</a>
                                </li>
                                <li class="search-box-outer search-toggler">
                                    <i class="icon-5"></i>
                                </li>
<!--                                <li class="btn-box">-->
<!--                                    <a href="/contact" class="theme-btn btn-one"><span>Ariza qoldirish</span></a>-->
<!--                                </li>-->
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- main-header end -->

        <!-- Mobile Menu  -->
        <div class="mobile-menu">
            <div class="menu-backdrop"></div>
            <div class="close-btn"><i class="fas fa-times"></i></div>
            
            <nav class="menu-box">
                <div class="nav-logo"><a href="/"><img src="/assets/images/logo-2.png" alt="" title=""></a></div>
                <div class="menu-outer"><!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--></div>
                <div class="contact-info">
                    <h4>Aloqa ma`lumotlari</h4>
                    <ul>
                        <li>Toshkent sh., Chilonzor tumani</li>
                        <li><a href="tel:+998712000000">+998 71 200 00 00</a></li>
                        <li><a href="mailto:info@waste.uz">info@waste.uz</a></li>
                    </ul>
                </div>
                <div class="social-links">
                    <ul class="clearfix">
                        <li><a href="/"><span class="fab fa-twitter"></span></a></li>
                        <li><a href="/"><span class="fab fa-facebook-square"></span></a></li>
                        <li><a href="/"><span class="fab fa-pinterest-p"></span></a></li>
                        <li><a href="/"><span class="fab fa-instagram"></span></a></li>
                        <li><a href="/"><span class="fab fa-youtube"></span></a></li>
                    </ul>
                </div>
            </nav>
        </div><!-- End Mobile Menu -->
</template>




