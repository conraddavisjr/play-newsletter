// output the newsletter's top items (2nd row)
// 

function topFiveItemsRowTwo(rowItems, imgWidth, imgHeight) { 

	// container for the row of items
	let rowTwo = ''

	// HTML for the top portion of the row two container
	rowTwo +=
	`
		<!--[if (gte mso 9)|(IE)]></td><td width="240" valign="top"><![endif]-->
		<div style="display:inline-block;max-width:240px;vertical-align:top;width:100%;">
		  <table width="100%" align="center" border="0" cellpadding="0" cellspacing="0">
		    <tr>
		      <td>
		        <table border="0" cellpadding="0" cellspacing="0" width="100%">
		          <tr>`

		          // loop through the items in row
							rowItems.map((item, i) => {
		          	rowTwo += `<td valign="top" width="100">
		              <table cellpadding="0" cellspacing="0" border="0" width="100%">
		                <tr>
		                  <td>
		                    <table cellpadding="0" cellspacing="0" border="0" align="center">
		                      <tr>
		                        <td align="center"> <img src="${rowItems[i].src}" alt="${rowItems[i].alt}" width="${imgWidth}" height="${imgHeight}" style="display:block;" border="0" /></td>
		                      </tr>
		                      <tr>
		                        <td valign="top" width="100" style="padding-left: 10px;">
		                          <table cellpadding="0" cellspacing="0" border="0">
		                            <tr>
		                              <td height="10" style="font-size:1px;line-height:1px;mso-line-height-rule:exactly;padding:0;">&nbsp;</td>
		                            </tr>
		                            <tr>
		                              <td style="text-align:left;line-height: 14px; font-size: 12px; font-weight: 700;font-family: 'Roboto',Helvetica,Arial,sans-serif; text-transform: uppercase;text-decoration: none !important;"> 
		                              	<a href="${rowItems[i].href}" target="_blank" style="text-decoration: none !important;color:#414141;font-size:11px;font-family: 'Roboto',Helvetica,Arial,sans-serif;letter-spacing:normal;line-height: 14px; text-transform: uppercase; font-weight: 700;">
		                              		${rowItems[i].title}
			                              	<span style="color:#999999; font-size:12px;letter-spacing:normal;line-height: 14px; font-weight:400;">
				                              	<br />
				                              	${rowItems[i].author}
			                              	</span>
			                              </a>
			                            </td>
		                            </tr>
		                          </table>
		                        </td>
		                      </tr>
		                      <tr>
		                        <td height="5" style="font-size:1px;line-height:1px;mso-line-height-rule:exactly;padding:0;">&nbsp;</td>
		                      </tr>
		                    </table>
		                  </td>
		                </tr>
		              </table>
		            </td>`
		          })

						// HTML for the bottom portion of the row two container
		        rowTwo +=
		         ` </tr>
		        </table>
		      </td>
		    </tr>
		  </table>
		</div>
		<!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
		`

	return rowTwo

}

export default topFiveItemsRowTwo;