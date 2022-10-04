// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@vueuse/nuxt'],
	colorMode: {
		preference: 'system',
		fallback: 'light',
		classSuffix: '',
	},
	css: ['@fortawesome/fontawesome-svg-core/styles.css'],
	plugins: ['~/plugins/fontawesome.js', '~/plugins/AutoAnimate.js'],
	build: {
		transpile: [
			'@fortawesome/vue-fontawesome',
			'@fortawesome/fontawesome-svg-core',
			'@fortawesome/free-brands-svg-icons',
		],
	},
});