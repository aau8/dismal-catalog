const mix = require('laravel-mix')
const manifestRemove = require('./utils/manifestRemove.cjs')
const addInlineAssets = require('./utils/addInlineAssets.cjs')

const DIR_PATH = './prod/dismal-assets'

mix.setPublicPath(DIR_PATH)

mix.js('./src/index.js', `${DIR_PATH}/bundle.js`).react()
mix.sass('./src/scss/style.scss', `${DIR_PATH}/style.css`)

mix.copy('./src/index.html', './prod')
mix.copy('./src/catalog-config.json', './prod')
mix.copy('./src/img/**/*', './prod/img')

mix.browserSync({
	server: 'prod',
	open: false,
	watch: true,
	disableNotifications: true,
	disableSuccessNotifications: true,
});

mix.after(() => {
	manifestRemove('./prod')

	if (process.env.NODE_ENV === 'production') {
		addInlineAssets()
	}
})
