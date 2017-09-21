const trendingAppsItem = require('../templates/trendingAppsItem.js')

function trendingApps(appItems) {

let output = '';

output += `
	<tr>
    <td align="center">
      <!--[if (gte mso 9)|(IE)]><table width="640" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td align="center"> <![endif]-->
      <table role="presentation" align="center" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 640px;">
        <tr>
          <td width="20">&nbsp;</td>
          <td align="center">
            <!--[if (gte mso 9)|(IE)]><table width="600" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td align="center"> <![endif]-->
            <table role="presentation" align="center" style="Margin:0 auto;max-width:600px;" border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td bgcolor="#00bf60" align="center">
                  <!--[if (gte mso 9)|(IE)]><table width="600" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td align="center"> <![endif]-->
                  <table role="presentation" align="center" cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tr>
                      <td width="30" style="font-size:1px;line-height:1px;mso-line-height-rule:exactly;padding:0;">&nbsp;</td>
                      <td>
                        <table style="max-width: 400px;" align="center" cellpadding="0" cellspacing="0" border="0" width="100%">
                          <tr>
                            <td style="text-align:center; text-transform: uppercase;color:#ffffff;font-family: Roboto,Helvetica,Arial,sans-serif;font-size:24px;letter-spacing:normal;line-height: 34px;">
                              <h3 style="font-size: 24px; margin-top: 25px; margin-bottom: 25px;"><strong>TOP TRENDING APPS IN July</strong></h3></td>
                          </tr>
                        </table>
                      </td>
                      <td width="30" style="font-size:1px;line-height:1px;mso-line-height-rule:exactly;padding:0;">&nbsp;</td>
                    </tr>
                  </table>
                  <!--[if (gte mso 9)|(IE)]></td></tr></table> <![endif]-->
                </td>
              </tr>
              <tr>
                <td bgcolor="#f5f5f5">
                  <!--[if (gte mso 9)|(IE)]><table width="600" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td align="center"> <![endif]-->
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tr>
                      <td>
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px;">
                          <tr>
                            <td width="20"></td>
                            <td valign="top">
                              <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 560px;" align="center">
                              `
                                appItems.map((appItem) => {
                                  output += trendingAppsItem(appItem);
                                })

                            output += `
                              </table>
                            </td>
                            <td width="20"></td>
                          </tr>
                          <tr>
                            <td height="30" style="font-size:1px;line-height:1px;mso-line-height-rule:exactly;padding:0;">&nbsp;</td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                  <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                </td>
              </tr>
              <tr>
                <td height="40" style="font-size:1px;line-height:1px;mso-line-height-rule:exactly;padding:0;"></td>
              </tr>
              <tr>
                <td align="center">
                  <!--[if (gte mso 9)|(IE)]><table width="600" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td align="center"> <![endif]-->
                  <table align="center" cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tr>
                      <td style="border-bottom: 1px solid #414141;font-size:1px;line-height:1px;mso-line-height-rule:exactly;padding:0;">&nbsp;</td>
                    </tr>
                    <tr>
                      <td height="5" style="font-size:1px;line-height:1px;mso-line-height-rule:exactly;padding:0;">&nbsp;</td>
                    </tr>
                    <tr>
                      <td style="text-align:left; color:#414141;font-family: 'Roboto',Helvetica,Arial,sans-serif;font-size:32px;letter-spacing:normal;line-height: 34px;">
                        <h3 style="margin-bottom: 5px; font-size: 32px; font-weight: 200; margin-top: 20px; text-transform: uppercase;">THE U.S. TOP CHARTS FROM July</h3></td>
                    </tr>
                  </table>
                  <!--[if (gte mso 9)|(IE)]></td></tr></table> <![endif]-->
                </td>
              </tr>
              <tr>
                <td height="20"></td>
              </tr>
            </table>
            <!--[if (gte mso 9)|(IE)]></td></tr></table> <![endif]-->
          </td>
          <td width="20">&nbsp;</td>
        </tr>
      </table>
      <!--[if (gte mso 9)|(IE)]></td></tr></table> <![endif]-->
    </td>
  </tr>
`;


  return output;                         
} 


                              

// 
module.exports = trendingApps;