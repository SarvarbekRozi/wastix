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
                    <h1>Aloqa</h1>
                    <ul class="bread-crumb clearfix">
                        <li><a href="/">Bosh sahifa</a></li>
                        <li>Aloqa</li>
                    </ul>
                </div>
            </div>
        </section>
        <!-- page-title end -->


        <!-- contact-section -->
        <section class="contact-section pt_150 pb_150">
            <div class="auto-container">
                <div class="row clearfix">
                    <div class="col-lg-4 col-md-12 col-sm-12 content-column">
                        <div class="content-box mr_70">
                            <div class="sec-title mb_45">
                                <span class="sub-title">Bizning manzil</span>
                                <h2>Jamoa bilan bog‘laning</h2>
                                <p>Taklif va murojaatlaringizni yuboring, tez orada javob beramiz.</p>
                            </div>
                            <ul class="info-list clearfix">
                                <li>
                                    <div class="icon"><i class="icon-43"></i></div>
                                    <h4>Manzil</h4>
                                    <p>Toshkent shahri, O‘zbekiston</p>
                                </li>
                                <li>
                                    <div class="icon"><i class="icon-4"></i></div>
                                    <h4>Telefon</h4>
                                    <p><a href="tel:+998712000000">+998 (71) 200 00 00</a></p>
                                </li>
                                <li>
                                    <div class="icon"><i class="icon-2"></i></div>
                                    <h4>Email</h4>
                                    <p><a href="mailto:info@example.uz">info@example.uz</a></p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-12 col-sm-12 form-column">
                        <div class="form-inner">
                            <form method="post" action="sendemail.php" id="contact-form" class="default-form"> 
                                <div class="row clearfix">
                                    <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <input type="text" name="username" placeholder="Ismingiz" required="">
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <input type="email" name="email" placeholder="Email manzil" required="">
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <input type="text" name="phone" required="" placeholder="Telefon">
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <input type="text" name="subject" required="" placeholder="Mavzu">
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <textarea name="message" placeholder="Xabar"></textarea>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-12 form-group message-btn centred">
                                        <button class="theme-btn btn-one shadow" type="submit" name="submit-form"><span>Xabar yuborish</span></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

</template>

<script setup>
useHead({
  title: 'Aloqa',
  script: [
    {
      src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyA-CE0deH3Jhj6GN4YvdCFZS7DpbXexzGU',
      tagPosition: 'bodyClose'
    }
  ]
})
</script>






