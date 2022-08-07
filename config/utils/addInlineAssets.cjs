const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require('fs')
const path = require('path');

function addInlineAssets() {
	const prodPath = path.join(__dirname, '../../prod')

	fs.readFile(path.join(prodPath, './index.html'), 'utf-8', (err, data) => {
		if (err) throw err

		const dom = new JSDOM(data)
		const document = dom.window.document
		const cssLink = document.getElementById('css-link')
		const jsScript = document.getElementById('js-script')

		// Вместо ссылки на css файл мы указываем тег style со содержимым файла
		const dataStyle = fs.readFileSync(path.join(prodPath, cssLink.href), 'utf-8')
		const style = document.createElement('style')

		style.innerHTML = dataStyle
		document.head.append(style)
		cssLink.remove()

		// Вместо тега скрипт с ссылкой на js файл, мы разместим содержимое файла внутри тега script
		const dataScript = fs.readFileSync(path.join(prodPath, jsScript.src), 'utf-8')

		jsScript.textContent = dataScript
		jsScript.removeAttribute('id')
		jsScript.removeAttribute('src')

		// Перезаписываем index.html на html с добавленными в него стилями и скриптами
		fs.writeFileSync(path.join(prodPath, './index.html'), dom.serialize(), err => {
			if (err) throw err
		})
	})
}

module.exports = addInlineAssets