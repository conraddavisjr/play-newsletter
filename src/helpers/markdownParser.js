// import the markdown data
const markdown = require('../data/markdown.js')

// MARKDOWN TO ARRAY ITEMS
// break the markdown into an array of filtered content
// 
let parsedContent = 
	markdown.split(/\n/g)
					.map((item) => { return item.replace('\t', '')})
				 	.filter((item) => { return item != '' })

const markdownParser = console.log('parsedContent: ', parsedContent);


module.exports = markdownParser;