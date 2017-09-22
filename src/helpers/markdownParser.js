const markdown = require('../data/markdown.js')

let parsedContent = markdown.split(/\n/g)
parsedContent = parsedContent.map((item) => {
	return item.replace('\t', '')
})
parsedContent = parsedContent.filter((item) => {
	return item != ''
})
const markdownParser = console.log('parsedContent: ', parsedContent);


module.exports = markdownParser;