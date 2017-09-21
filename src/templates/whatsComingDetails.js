function whatsComingDetails(details) {

	console.log('details HERE: ', details)
	let output = '';

	details.map((detail) => {
		const { title, author, href } = detail;
		console.log('detail: ', detail);
		console.log('DESTRUCTURED: title, author, href - ', title, author, href)
		output += `
			<tr>
			  <td style="padding:0px;mso-line-height-rule:exactly; text-transform: uppercase;color:#414141;font-family: 'Roboto',Helvetica,Arial,sans-serif;font-size:11px;letter-spacing:normal;line-height: 16px !important;text-align:left; font-weight: 700;">
				  <a href="${href}" target="_blank" style="text-decoration:none!important;color:#414141; line-height: 16px !important; text-underline: none;">
				  	${title}
				  	<span style="color: #808080;font-weight: 400; line-height: 16px;">
					  	<br/>
					  	${author}
				  	</span>
			  	</a>
			 	</td>
			</tr>
			<tr>
			  <td height="5" style="font-size:1px;line-height:1px;mso-line-height-rule:exactly;padding:0;">&nbsp;</td>
			</tr>

		`
	})

	return output;

}

module.exports = whatsComingDetails;