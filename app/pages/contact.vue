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
        <h1>{{ $t('contact.title') }}</h1>
        <ul class="bread-crumb clearfix">
          <li><nuxt-link to="/">{{ $t('nav.home') }}</nuxt-link></li>
          <li>{{ $t('contact.title') }}</li>
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
              <span class="sub-title">{{ $t('contact.address_title') }}</span>
              <h2>{{ $t('contact.get_in_touch') }}</h2>
              <p>{{ $t('contact.desc') }}</p>
            </div>
            <ul class="info-list clearfix">
              <li>
                <div class="icon"><i class="icon-43"></i></div>
                <h4>{{ $t('contact.address_label') }}</h4>
                <p>{{ $t('contact.address_val') }}</p>
              </li>
              <li>
                <div class="icon"><i class="icon-4"></i></div>
                <h4>{{ $t('contact.phone_label') }}</h4>
                <p><a href="tel:+998951770909">+998 (95) 177 09 09</a></p>
              </li>
              <li>
                <div class="icon"><i class="icon-2"></i></div>
                <h4>{{ $t('contact.email_label') }}</h4>
                <p><a href="mailto:Truststandartuz@gmail.com">Truststandartuz@gmail.com</a></p>
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
                  <input type="text" v-model="form.username" :placeholder="$t('contact.placeholder_name')" required>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input type="email" v-model="form.email" :placeholder="$t('contact.placeholder_email')" required>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                  <input type="text" v-model="form.phone" :placeholder="$t('contact.placeholder_phone')">
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                  <input type="text" v-model="form.subject" :placeholder="$t('contact.placeholder_subject')">
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                  <textarea v-model="form.message" :placeholder="$t('contact.placeholder_msg')" required></textarea>
                </div>
                <div v-if="errorMsg" style="color:red;font-size:13px;padding:0 15px 10px;">{{ errorMsg }}</div>
                <div class="col-lg-12 col-md-12 col-sm-12 form-group message-btn centred">
                  <button class="theme-btn btn-one shadow" type="submit" :disabled="sending">
                    <span>{{ sending ? $t('contact.sending_btn') : $t('contact.send_btn') }}</span>
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
const { t, locale } = useI18n()
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
    errorMsg.value = t('contact.error_msg')
  }
  sending.value = false
}

useHead({ title: computed(() => `${t('contact.title')} - Trust Standart`) })
</script>
