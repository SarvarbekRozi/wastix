<template>
<!-- preloader -->
        <div class="loader-wrap">
            <div class="preloader">
                <div class="preloader-close" title="Yopish">&#x2715;</div>
                <div id="handle-preloader" class="handle-preloader custom-preloader">
                    <div class="pre-bg-overlay"></div>
                    <div class="pre-particles">
                        <span class="particle particle-1"></span>
                        <span class="particle particle-2"></span>
                        <span class="particle particle-3"></span>
                        <span class="particle particle-4"></span>
                        <span class="particle particle-5"></span>
                        <span class="particle particle-6"></span>
                        <span class="particle particle-7"></span>
                        <span class="particle particle-8"></span>
                    </div>
                    <div class="animation-preloader pre-center">
                        <!-- SVG ring -->
                        <div class="pre-ring-wrap">
                            <svg class="pre-ring" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle class="pre-ring-bg" cx="60" cy="60" r="54" stroke-width="4"/>
                                <circle class="pre-ring-dash" cx="60" cy="60" r="54" stroke-width="4" stroke-linecap="round"/>
                            </svg>
                            <div class="pre-logo-wrap">
                                <img src="/assets/images/logo.png" alt="Wastix" class="pre-logo">
                            </div>
                        </div>
                        <!-- company name -->
                        <div class="pre-name">
                            <span class="pre-name-main">TRUST STANDART</span>
                            <span class="pre-name-sub">Chiqindilarni boshqarish</span>
                        </div>
                        <!-- progress bar -->
                        <div class="pre-progress-wrap">
                            <div class="pre-progress-bar"></div>
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

<style>
/* ===== CUSTOM PRELOADER ===== */
.custom-preloader {
  background: linear-gradient(135deg, #0d2b0f 0%, #1a5c28 50%, #0d2b0f 100%) !important;
  overflow: hidden;
}

/* fon overlay */
.pre-bg-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, rgba(46,160,67,0.15) 0%, transparent 70%);
  pointer-events: none;
}

/* uchib yuruvchi zarralar */
.pre-particles { position: absolute; inset: 0; pointer-events: none; }
.particle {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(46,160,67,0.5);
  animation: floatParticle 6s infinite ease-in-out;
}
.particle-1  { top: 20%; left: 10%; animation-delay: 0s;    animation-duration: 7s; }
.particle-2  { top: 70%; left: 15%; animation-delay: 1s;    animation-duration: 5s; }
.particle-3  { top: 30%; left: 80%; animation-delay: 2s;    animation-duration: 8s; }
.particle-4  { top: 80%; left: 75%; animation-delay: 0.5s;  animation-duration: 6s; }
.particle-5  { top: 10%; left: 50%; animation-delay: 1.5s;  animation-duration: 9s; width:10px; height:10px; opacity:.3; }
.particle-6  { top: 60%; left: 90%; animation-delay: 3s;    animation-duration: 7s; }
.particle-7  { top: 90%; left: 40%; animation-delay: 2.5s;  animation-duration: 5s; width:4px; height:4px; }
.particle-8  { top: 45%; left: 5%;  animation-delay: 0.8s;  animation-duration: 8s; width:8px; height:8px; opacity:.4; }

@keyframes floatParticle {
  0%, 100% { transform: translateY(0) scale(1); opacity: 0.4; }
  50%       { transform: translateY(-30px) scale(1.3); opacity: 0.8; }
}

/* markaziy blok */
.pre-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

/* SVG ring */
.pre-ring-wrap {
  position: relative;
  width: 160px;
  height: 160px;
}
.pre-ring {
  width: 160px;
  height: 160px;
  transform: rotate(-90deg);
  animation: ringRotate 2.4s linear infinite;
}
.pre-ring-bg {
  stroke: rgba(255,255,255,0.08);
}
.pre-ring-dash {
  stroke: #4cde6e;
  stroke-dasharray: 339.3;
  stroke-dashoffset: 254;
  animation: ringDash 2.4s ease-in-out infinite;
  filter: drop-shadow(0 0 6px #4cde6e);
}

@keyframes ringRotate {
  to { transform: rotate(270deg); }
}
@keyframes ringDash {
  0%   { stroke-dashoffset: 310; }
  50%  { stroke-dashoffset: 80; }
  100% { stroke-dashoffset: 310; }
}

/* logo ichida */
.pre-logo-wrap {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ringRotate 0s linear; /* reset rotation */
}
.pre-ring-wrap .pre-logo-wrap {
  animation: none;
}
.pre-logo {
  width: 90px;
  height: 90px;
  object-fit: contain;
  filter: drop-shadow(0 2px 12px rgba(0,0,0,0.4));
  animation: logoPulse 2.4s ease-in-out infinite;
}

@keyframes logoPulse {
  0%, 100% { transform: scale(1);    opacity: 1; }
  50%       { transform: scale(1.06); opacity: 0.9; }
}

/* kompaniya nomi */
.pre-name {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  animation: fadeSlideUp 0.8s ease forwards;
}
.pre-name-main {
  font-family: var(--title-font, sans-serif);
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 8px;
  color: #ffffff;
  text-shadow: 0 0 20px rgba(76,222,110,0.6);
}
.pre-name-sub {
  font-size: 13px;
  letter-spacing: 3px;
  color: rgba(255,255,255,0.55);
  text-transform: uppercase;
}

@keyframes fadeSlideUp {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* progress bar */
.pre-progress-wrap {
  width: 200px;
  height: 3px;
  background: rgba(255,255,255,0.1);
  border-radius: 4px;
  overflow: hidden;
}
.pre-progress-bar {
  height: 100%;
  width: 0%;
  background: linear-gradient(90deg, #4cde6e, #a8ff9a);
  border-radius: 4px;
  box-shadow: 0 0 8px #4cde6e;
  animation: progressLoad 2.5s ease-in-out forwards;
}

@keyframes progressLoad {
  0%   { width: 0%; }
  30%  { width: 40%; }
  70%  { width: 75%; }
  90%  { width: 92%; }
  100% { width: 100%; }
}

/* close button yangi ko'rinish */
.preloader-close {
  width: 36px !important;
  height: 36px !important;
  line-height: 36px !important;
  font-size: 16px !important;
  background: rgba(255,255,255,0.15) !important;
  color: #fff !important;
  border: 1px solid rgba(255,255,255,0.3) !important;
  backdrop-filter: blur(4px);
  transition: background 0.2s;
}
.preloader-close:hover {
  background: rgba(76,222,110,0.3) !important;
}
</style>




