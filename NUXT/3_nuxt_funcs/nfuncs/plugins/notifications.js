// vue notification kullanacağız npm ile yükleyelim
// npm i vue-notifications -s
// Vue.use(...) yapıktan sonra nuxt.config.js içinde plugin içine de eklememiz gerekiyor, plugins: ['~plugins/notification'], şeklinde ekleyeceğiz, artık kullanabiliriz

import Vue from 'vue'
import VueNotifications from 'vue-notifications'

Vue.use(VueNotifications)
