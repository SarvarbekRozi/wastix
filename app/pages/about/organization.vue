<template>
  <section class="about-page">
    <div class="auto-container">
      <h1 class="sr-only">{{ $t('nav.about_org') }}</h1>

      <figure class="about-hero">
        <img :src="hero.src" :alt="$t('nav.about_org')" :width="hero.width" :height="hero.height" fetchpriority="high">
      </figure>

      <div class="about-text">
        <p v-for="(p, i) in paragraphs" :key="i" v-html="p"></p>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t, locale } = useI18n()

const hero = computed(() => locale.value === 'ru'
  ? { src: '/assets/images/about/biz-haqimizda-ru.jpg', width: 1280, height: 720 }
  : { src: '/assets/images/about/biz-haqimizda.png', width: 1717, height: 916 }
)

const aboutText = {
  uz: [
    `<strong>"Trust Standart"</strong> mas'uliyati cheklangan jamiyat qo'shma korxonasi <strong>2013-yilda</strong> tashkil etilgan bo'lib, dastlab Toshkent shahrining <strong>Mirzo Ulug'bek tumanidagi</strong> Ahmad Yugnakiy, Xumoyun va Al-Farobiy mahalla fuqarolar yig'inlariga chiqindilarni yig'ish va olib chiqish xizmatlarini ko'rsatib kelgan.`,
    `Korxona faoliyati davomida yuzaga kelgan moliyaviy qiyinchiliklar sababli <strong>2019-yil 30-noyabrda</strong> tashkilot boshqaruvi <strong>Ruziyeva Dildora Yunusovna</strong> rahbarligiga o'tkazildi. Yangi rahbar korxonani qabul qilib olgan paytda korxona atigi <strong>2 ta maxsus chiqindi tashuvchi texnika</strong> va <strong>6 nafar xodim</strong> bilan faoliyat yuritayotgan edi.`,
    `<strong>Ruziyeva Dildora Yunusovna</strong> rahbarligida korxona faoliyati tubdan qayta tashkil etildi. Xodimlar sonini ko'paytirish, ularning mehnat sharoitlari va moddiy ta'minotini yaxshilash maqsadida Toshkent viloyati <strong>Qibray tumanidagi 14 ta mahallaga</strong> xizmat ko'rsatish huquqi auksion savdolari orqali qo'lga kiritildi. Biroq korxonaning yangi hududlarda faoliyat boshlashi jarayonida turli tashkiliy va amaliy to'siqlar hamda qarshiliklarga duch kelishiga qaramay, rahbariyatning qat'iyati va fidokorona mehnati natijasida barcha muammolar bosqichma-bosqich bartaraf etildi.`,
    `Aholiga sifatli va uzluksiz xizmat ko'rsatishni ta'minlash maqsadida korxona moddiy-texnik bazasini mustahkamlashga alohida e'tibor qaratildi. Natijada dastlabki 2 ta maxsus texnika soni bugungi kunga kelib <strong>30 tadan oshdi</strong>. Shuningdek, korxona tomonidan maxsus chiqindi yig'ish shahobchalari ta'mirlanib, ularga zamonaviy chiqindi konteynerlari o'rnatildi. Hozirgi kunga qadar jami <strong>1030 ta yangi chiqindi konteyneri</strong> joylashtirildi.`,
    `Korxona aholi va yuridik shaxslarga sifatli xizmat ko'rsatish tizimini yo'lga qo'ygach, faoliyat ko'lamini yanada kengaytirdi. Jumladan, Toshkent shahrida faoliyat yuritayotgan <strong>37 ta xorijiy davlat elchixonalari</strong> bilan shartnomalar tuzilib, ularga chiqindilarni boshqarish xizmatlari ko'rsatib kelinmoqda. Bundan tashqari, korxona respublikadagi yirik savdo tarmoqlaridan biri bo'lgan <strong>"Korzinka"</strong> supermarketlarining <strong>102 ta filialiga</strong> ham xizmat ko'rsatmoqda. Shu bilan birga <strong>"Makro"</strong> supermarketlariga, <strong>"Yunusabad Gallery"</strong> hamda <strong>Xonsaroy</strong> uylariga xizmat ko'rsatilmoqda.`,
    `Bugungi kunda <strong>"Trust Standart" MChJ QK</strong> Toshkent shahrining <strong>Mirzo Ulug'bek tumaniga</strong> to'liq xizmat ko'rsatib, chiqindilarni boshqarish sohasida yetakchi korxonalardan biriga aylangan. Korxonada <strong>134 nafar xodim</strong> faoliyat yuritib, aholi va tashkilotlarga sifatli xizmat ko'rsatib kelmoqda.`,
    `Korxona rivojiga katta hissa qo'shgan <strong>Ruziyeva Dildora Yunusovna</strong> hozirgi kunda Chiqindilarni boshqarish va sirkulyar iqtisodiyotni rivojlantirish agentligi Toshkent viloyati boshqarmasi boshlig'ining buyrug'i asosida Toshkent viloyati <strong>"Toza hudud" davlat muassasasi direktori</strong> lavozimida samarali faoliyat yuritmoqda.`,
  ],
  ru: [
    `Совместное предприятие в форме общества с ограниченной ответственностью <strong>«Trust Standart»</strong> было основано в <strong>2013 году</strong> и первоначально оказывало услуги по сбору и вывозу отходов для махаллинских сходов граждан имени Ахмада Югнакий, Хумоюн и Аль-Фараби <strong>Мирзо-Улугбекского района</strong> города Ташкента.`,
    `В связи с финансовыми трудностями, возникшими в ходе деятельности предприятия, <strong>30 ноября 2019 года</strong> руководство организацией было передано <strong>Рузиевой Дильдоре Юнусовне</strong>. На момент принятия предприятия под своё руководство оно располагало всего <strong>двумя специализированными мусоровозами</strong> и <strong>шестью сотрудниками</strong>.`,
    `Под руководством <strong>Рузиевой Дильдоры Юнусовны</strong> деятельность предприятия была кардинально реорганизована. С целью увеличения численности персонала, улучшения условий труда и материального обеспечения сотрудников посредством аукционных торгов было получено право на обслуживание <strong>14 махаллей Кибрайского района</strong> Ташкентской области. Несмотря на различные организационные и практические препятствия, а также сопротивление, с которыми предприятие столкнулось при начале работы на новых территориях, благодаря настойчивости руководства и самоотверженному труду все проблемы были поэтапно решены.`,
    `Для обеспечения качественного и бесперебойного обслуживания населения особое внимание было уделено укреплению материально-технической базы предприятия. В результате количество специализированной техники увеличилось с первоначальных двух единиц до <strong>более чем тридцати</strong>. Кроме того, были отремонтированы специальные пункты сбора отходов и оснащены современными контейнерами. На сегодняшний день установлено в общей сложности <strong>1030 новых контейнеров</strong> для отходов.`,
    `После налаживания системы качественного обслуживания населения и юридических лиц предприятие значительно расширило масштабы своей деятельности. В частности, были заключены договоры с <strong>37 посольствами иностранных государств</strong>, действующими в городе Ташкенте, которым оказываются услуги по управлению отходами. Кроме того, предприятие обслуживает <strong>102 филиала сети супермаркетов «Korzinka»</strong>, являющейся одной из крупнейших торговых сетей республики. Также услуги оказываются супермаркетам <strong>«Makro»</strong>, комплексу <strong>«Yunusabad Gallery»</strong> и жилым домам <strong>«Xonsaroy»</strong>.`,
    `Сегодня <strong>СП ООО «Trust Standart»</strong> полностью обслуживает <strong>Мирзо-Улугбекский район</strong> города Ташкента и стало одним из ведущих предприятий в сфере управления отходами. На предприятии работают <strong>134 сотрудника</strong>, обеспечивающие качественное обслуживание населения и организаций.`,
    `Рузиева Дильдора Юнусовна, внесшая значительный вклад в развитие предприятия, в настоящее время эффективно работает в должности <strong>директора государственного учреждения «Toza hudud»</strong> Ташкентской области на основании приказа начальника Ташкентского областного управления Агентства по развитию управления отходами и циркулярной экономики.`,
  ],
}

const paragraphs = computed(() => aboutText[locale.value] || aboutText.uz)

useHead({
  title: computed(() => `${t('nav.about_org')} - Trust Standart`),
})
</script>

<style scoped>
.about-page {
  padding: 60px 0 100px;
}

.about-hero {
  margin: 0 0 50px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 22px 55px rgba(0, 0, 0, 0.12);
}

.about-hero img {
  width: 100%;
  height: auto;
  display: block;
}

.about-text {
  max-width: 1040px;
  margin: 0 auto;
}

.about-text p {
  font-size: 17px;
  line-height: 1.95;
  color: #515a66;
  margin-bottom: 22px;
  text-align: justify;
}

.about-text p:last-child {
  margin-bottom: 0;
}

.about-text :deep(strong) {
  color: #1f7a3d;
  font-weight: 700;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (max-width: 767px) {
  .about-page {
    padding: 36px 0 64px;
  }

  .about-hero {
    margin-bottom: 30px;
    border-radius: 12px;
  }

  .about-text p {
    font-size: 15px;
    line-height: 1.8;
    text-align: left;
    margin-bottom: 18px;
  }
}
</style>
