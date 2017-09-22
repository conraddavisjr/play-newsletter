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

// `<tr>
//   <td style="text-align:left; color:#263238;font-family: 'Roboto',Helvetica,Arial,sans-serif;font-size:16px;letter-spacing:normal;line-height: 22px;">
//     To celebrate this once in a lifetime event, <b>Google</b> and the <b>University of California at Berkeley</b> are partnering for the <a href="https://eclipsemega.movie/" target="_blank" style="color:#039be5; font-weight: 400; text-decoration:underline!important;">Eclipse Megamovie Project</a> that encourages citizen scientists around the country to help gather images of the sun and its atmosphere, the corona. Volunteers armed with standard photography equipment—a camera, telephoto lens, and tripod—will capture photos of the eclipse as the moon’s shadow passes over their part of the country. Once this huge dataset is collected, it’s Google’s turn. We’ll use our technology to algorithmically align and process the submitted images to create a continuous view of the eclipse: the Eclipse Megamovie.
//   </td>
// </tr>
// <tr>
//   <td height="20" style="font-size:1px;line-height:1px;mso-line-height-rule:exactly;padding:0;">&nbsp;</td>
// </tr>`


	const htmlFormats = {
		paragraph: (content) => {
			// console.log('paragraph content: ', content);
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
		},
		image: (content) => { 
			return (
				`
					<tr>
            <td height="10" style="font-size:1px;line-height:1px;mso-line-height-rule:exactly;padding:0;">&nbsp;</td>
          </tr>
          <tr>
            <td align="center"> <img src="https://services.google.com/fh/files/emails/gp_nl_august17_hero.jpg" alt="" width="600" height="320" border="0" style="display:block; max-width: 600px; width: 100%; height:auto;" /></td>
          </tr>
				`
			)
		}
	}

	const { paragraph, h2 } = htmlFormats;

	// decide what wrapper to place the content in
	parsedContent = parsedContent.map((item) => {
		// if the first two characters are not '**' give the content a paragraph output
		// console.log("item.substring(0, 2) == '**' ? h2(item) : paragraph(item): ", item.substring(0, 2) == '**' ? h2(item) : paragraph(item));
		return item.substring(0, 2) == '**' ? h2(item) : paragraph(item)
	});


	// console.log('parsedContent: ', parsedContent);
	return parsedContent;
}

module.exports = markdownParser;