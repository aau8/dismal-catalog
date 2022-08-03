const mix = require('laravel-mix')
const manifestRemove = require('./manifestRemove.cjs')

const DIR_PATH = './prod'

mix.setPublicPath(DIR_PATH)

mix.js('./src/index.js', `${DIR_PATH}/bundle.js`).react()
mix.sass('./src/scss/style.scss', `${DIR_PATH}/style.css`)

mix.copy('./src/index.html', DIR_PATH)
mix.copy('./src/catalog-config.json', DIR_PATH)
mix.copy('./src/img/**/*', `${DIR_PATH}/img`)

mix.browserSync({
	server: 'prod',
	open: false,
});

mix.after(() => { manifestRemove('./prod') })