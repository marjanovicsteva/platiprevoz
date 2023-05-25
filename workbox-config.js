module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{txt,css,js,ico,png,xml,html,svg,webmanifest}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};