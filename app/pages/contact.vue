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
              <h2>Jamoa bilan bog'laning</h2>
              <p>Taklif va murojaatlaringizni yuboring, tez orada javob beramiz.</p>
            </div>
            <ul class="info-list clearfix">
              <li>
                <div class="icon"><i class="icon-43"></i></div>
                <h4>Manzil</h4>
                <p>Toshkent shahri, O'zbekiston</p>
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
            <div v-if="successMsg" class="alert alert-success mb-3" style="padding:12px 16px;border-radius:8px;background:#e8f5ed;color:#1a7f3c;border:1px solid #b7dfca;">
              {{ successMsg }}
            </div>
            <form @submit.prevent="submitForm" id="contact-form" class="default-form">
              <div class="row clearfix">
                <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input type="text" v-model="form.username" placeholder="Ismingiz" required>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input type="email" v-model="form.email" placeholder="Email manzil" required>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                  <input type="text" v-model="form.phone" placeholder="Telefon">
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                  <input type="text" v-model="form.subject" placeholder="Mavzu">
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                  <textarea v-model="form.message" placeholder="Xabar" required></textarea>
                </div>
                <div v-if="errorMsg" style="color:red;font-size:13px;padding:0 15px 10px;">{{ errorMsg }}</div>
                <div class="col-lg-12 col-md-12 col-sm-12 form-group message-btn centred">
                  <button class="theme-btn btn-one shadow" type="submit" :disabled="sending">
                    <span>{{ sending ? 'Yuborilmoqda...' : 'Xabar yuborish' }}</span>
                  </button>
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
const config = useRuntimeConfig()
const form = ref({ username: '', email: '', phone: '', subject: '', message: '' })
const sending = ref(false)
const successMsg = ref('')
const errorMsg = ref('')

async function submitForm() {
  sending.value = true
  errorMsg.value = ''
  successMsg.value = ''
  try {
    const res = await $fetch(`${config.public.apiBase}/contact`, {
      method: 'POST',
      body: form.value,
    })
    if (res.success) {
      successMsg.value = res.message
      form.value = { username: '', email: '', phone: '', subject: '', message: '' }
    }
  } catch (e) {
    errorMsg.value = "Xabar yuborishda xatolik yuz berdi. Iltimos qayta urinib ko'ring."
  }
  sending.value = false
}

useHead({ title: 'Aloqa - Truck Standart' })
</script>



