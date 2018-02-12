var tailwindcss = require('tailwindcss');

module.exports = {
	plugins: [
		tailwindcss('./tailwind-config.js'),
		require('auto-prefixer')
	]
}
