const whatsComingRow = require('../templates/whatsComingRow.js')


function whatsComingSection( title, rowItems ) {

	let output = '';

  // Whats coming section outter HTML
	output += `
		<tr>
		  <td align="center">
		    <!--[if (gte mso 9)|(IE)]><table width="600" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td valign="top"> <![endif]-->
		    <table role="presentation" align="center" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 640px;">
		      <tr>
		        <td width="20"></td>
		        <td>
		          <table role="presentation" align="center" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px;">
		            <tr>
		              <td>
		                <table role="presentation" align="center" cellpadding="0" cellspacing="0" border="0" width="100%">
		                  <tr>
		                    <td>
		                      <table align="center" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px;">
		                        <tr>
		                          <td style="border-bottom: 1px solid #414141;font-size:1px;line-height:1px;mso-line-height-rule:exactly;padding:0;">&nbsp;</td>
		                        </tr>
		                        <tr>
		                          <td height="5" style="font-size:1px;line-height:1px;mso-line-height-rule:exactly;padding:0;">&nbsp;</td>
		                        </tr>
		                        <tr>
		                          <td style="text-align:left; color:#414141;font-family: 'Roboto',Helvetica,Arial,sans-serif;font-size:32px;letter-spacing:normal;line-height: 34px;">
		                            <h3 style="margin-bottom: 5px; font-size: 32px; font-weight: 200; margin-top: 20px; text-transform: uppercase;">What&#39;s coming to Play in August</h3></td>
		                        </tr>
		                        <tr>
		                          <td height="10" style="font-size:1px;line-height:1px;mso-line-height-rule:exactly;padding:0;">&nbsp;</td>
		                        </tr>
		                      </table>
		                    </td>
		                  </tr>
	`

  output += whatsComingRow();
	
	return output;

} 

module.exports = whatsComingSection;