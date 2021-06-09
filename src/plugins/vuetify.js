import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#B8DFF0', // pressed effect -20% alpha
                secondary: '#1A2C5B', // pressed effect -20% alpha --> radio selection
                accent: '#7971EA',
                info: '#EFEFEF', // background
            }
        }
    }
});
