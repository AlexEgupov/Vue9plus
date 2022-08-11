import Vue from 'vue'

Vue.filter('readMore', (text) => {
    if (text.length >= 400) {
        return text.substring(0, 400);
    }
})