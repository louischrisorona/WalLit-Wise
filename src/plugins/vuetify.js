import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#1A2C5B',
                secondary: '#B8DFF0',
                accent: '#7971EA',
                info: '#EFEFEF',
            }
        }
    }
});
