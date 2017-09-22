// parse markdown content into email HTML output
// 

// import the markdown data
const markdown = require('../data/markdown.js')

function markdownParser() {

	// MARKDOWN TO ARRAY ITEMS
	// break the markdown into an array of filtered content
	// 
	let parsedContent = 
		markdown.split(/\n/g)
						.map((item) => { return item.replace('\t', '')})
					 	.filter((item) => { return item != '' })

	const htmlFormats = {
		paragraph: (content) => {
			return(
				`
					<tr>
				    <td style="text-align:left; color:#263238;font-family: 'Roboto',Helvetica,Arial,sans-serif;font-size:16px;letter-spacing:normal;line-height: 22px;">
				      ${content}
				    </td>
				  </tr>
				  <tr>
				    <td height="20" style="font-size:1px;line-height:1px;mso-line-height-rule:exactly;padding:0;">&nbsp;</td>
				  </tr>
				`
			)
		},
		h2: (content) => { 
			return (
				`
					<tr>
			      <td style="text-align:left; color:#333333;font-family: 'Roboto',Helvetica,Arial,sans-serif;font-size:30px;letter-spacing:normal;line-height: 35px;">
			        <h2 style="mso-line-height-rule:exactly; margin-bottom: 20px; margin-top: 35px; font-size: 30px; font-weight: 300;">
			          ${content}
			        </h2></td>
			    </tr>
				`
			)
		}
	}

	const { paragraph, h2 } = htmlFormats;

	parsedContent = parsedContent.map((item) => {
		// if the first two characters are not '**' give the content a paragraph output
		return item.substring(0, 2) == '**' ? h2(item) : paragraph(item)
	});


	console.log('parsedContent: ', parsedContent);
	return parsedContent;
}

module.exports = markdownParser;