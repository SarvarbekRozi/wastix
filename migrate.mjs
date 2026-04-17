import fs from 'fs';
import path from 'path';

const pagesDir = 'd:/loyiha/wastix-nuxt/app/pages';
const compDir = 'd:/loyiha/wastix-nuxt/app/components';

const uzMap = {};
const ruMap = {};
let keyCounter = 1;

function toKey(str) {
    let base = str.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '').substring(0, 30);
    if (!base) base = 'text';
    return base + '_' + (keyCounter++);
}

const existingUz = {
  nav: {
    home: 'Bosh sahifa',
    about: 'Biz haqimizda',
    about_org: 'Tashkilot haqida',
    leadership: 'Rahbariyat',
    staff: 'Xodimlar',
    supervisor: 'Nazoratchilar',
    driver: 'Haydovchilar',
    regions: 'Bizning hududlar',
    news: 'Yangiliklar',
    announcements: "E'lonlar",
    contact: 'Aloqa',
  },
  header: {
    work_time: 'Ish vaqti:',
    work_time_val: 'Dush-Shan 09:00 - 18:00',
    address: 'Manzil:',
    address_val: 'Toshkent shahar Mirzo Ulug‘bek tumani Xumoyun ko‘chasi 3a-uy',
  },
  footer: {
    contact_info: 'Aloqa ma`lumotlari',
    rights: 'Barcha huquqlar himoyalangan',
    useful_links: 'Foydali havolalar',
    services: 'Xizmatlar',
  },
  common: {
    more: 'Batafsil',
    read_more: "Ko'proq o'qish",
    contact_us: "Bog'lanish",
    close: 'Yopish',
    loading: 'Yuklanmoqda...',
  },
  contact: {
    title: 'Aloqa',
    address_title: 'Bizning manzil',
    get_in_touch: "Jamoa bilan bog'laning",
    desc: 'Taklif va murojaatlaringizni yuboring, tez orada javob beramiz.',
    address_label: 'Manzil',
    address_val: "Toshkent shahar Mirzo Ulug‘bek tumani Xumoyun ko‘chasi 3a-uy",
    phone_label: 'Telefon',
    email_label: 'Email',
    placeholder_name: 'Ismingiz',
    placeholder_email: 'Email manzil',
    placeholder_phone: 'Telefon',
    placeholder_subject: 'Mavzu',
    placeholder_msg: 'Xabar',
    send_btn: 'Xabar yuborish',
    sending_btn: 'Yuborilmoqda...',
    error_msg: "Xabar yuborishda xatolik yuz berdi. Iltimos qayta urinib ko'ring.",
    success_msg: "Xabaringiz muvaffaqiyatli yuborildi!"
  },
  page: uzMap
};

const existingRu = {
  nav: {
    home: 'Главная',
    about: 'О нас',
    about_org: 'Об организации',
    leadership: 'Руководство',
    staff: 'Сотрудники',
    supervisor: 'Контролеры',
    driver: 'Водители',
    regions: 'Наши регионы',
    news: 'Новости',
    announcements: 'Объявления',
    contact: 'Контакты',
  },
  header: {
    work_time: 'Время работы:',
    work_time_val: 'Пн-Сб 09:00 - 18:00',
    address: 'Адрес:',
    address_val: 'г. Ташкент, Мирзо-Улугбекский район, улица Хумоюн 3а',
  },
  footer: {
    contact_info: 'Контактная информация',
    rights: 'Все права защищены',
    useful_links: 'Полезные ссылки',
    services: 'Услуги',
  },
  common: {
    more: 'Подробнее',
    read_more: 'Читать далее',
    contact_us: 'Связаться',
    close: 'Закрыть',
    loading: 'Загрузка...',
  },
  contact: {
    title: 'Контакты',
    address_title: 'Наш адрес',
    get_in_touch: 'Связаться с командой',
    desc: 'Отправьте ваши предложения и жалобы, мы ответим в ближайшее время.',
    address_label: 'Адрес',
    address_val: 'г. Ташкент, Мирзо-Улугбекский район, улица Хумоюн 3а',
    phone_label: 'Телефон',
    email_label: 'Email',
    placeholder_name: 'Ваше имя',
    placeholder_email: 'Email адрес',
    placeholder_phone: 'Телефон',
    placeholder_subject: 'Тема',
    placeholder_msg: 'Сообщение',
    send_btn: 'Отправить сообщение',
    sending_btn: 'Отправка...',
    error_msg: 'Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте снова.',
    success_msg: "Ваше сообщение было успешно отправлено!"
  },
  page: ruMap
};

function processFiles(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const full = path.join(dir, file);
        if (fs.statSync(full).isDirectory()) {
            processFiles(full);
        } else if (full.endsWith('.vue')) {
            let content = fs.readFileSync(full, 'utf8');
            let originalContent = content;

            // Simple match for exactly logic I added
            // like: `locale.value === 'uz' ? 'Konteyner o\'lchamlari' : 'Размеры контейнеров'`
            // or: `$i18n.locale === 'uz' ? '...' : '...'`
            
            // Re-eval regex to catch multi-line strings as well: [\s\S]*?
            const rx1 = /(?:\$i18n\.)?locale(?:\.value)?\s*===\s*['"`]uz['"`]\s*\?\s*(['"`])(.*?)\1\s*:\s*(['"`])(.*?)\3/g;
            
            content = content.replace(rx1, (match, q1, uzText, q3, ruText) => {
                const key = toKey(uzText);
                uzMap[key] = uzText.replace(/\\n/g, '\n');
                ruMap[key] = ruText.replace(/\\n/g, '\n');
                
                if (match.includes('$i18n.')) return `$t('page.${key}')`;
                return `t('page.${key}')`;
            });

            if (content !== originalContent) {
                fs.writeFileSync(full, content);
                console.log('Updated:', full);
            }
        }
    }
}

processFiles(pagesDir);
processFiles(compDir);

const localesDir = 'd:/loyiha/wastix-nuxt/app/locales';
if (!fs.existsSync(localesDir)) fs.mkdirSync(localesDir, { recursive: true });

fs.writeFileSync(path.join(localesDir, 'uz.json'), JSON.stringify(existingUz, null, 2));
fs.writeFileSync(path.join(localesDir, 'ru.json'), JSON.stringify(existingRu, null, 2));
console.log('uz.json and ru.json generated.');
