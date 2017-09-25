// output the header of the newsletter
// 

function header(month, year){

  let output = ''

  output += `
    <table role="presentation" align="center" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 820px;" bgcolor="#ffffff">
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
                    <td align="center">
                      <!--[if (gte mso 9)|(IE)]><table width="600" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td align="center"> <![endif]-->
                      <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                          <td style="background: #ffffff;">
                            <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
                              <tr>
                                <td align="center">
                                  <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
                                    <tr>
                                      <td height="25" style="font-size:1px;line-height:1px;mso-line-height-rule:exactly;padding:0;">&nbsp;</td>
                                    </tr>
                                    <tr>
                                      <td align="center">
                                        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
                                          <tr>
                                            <td> <a href="https://play.google.com/store" style="color: #757575; font-weight: 700;"> <img src="http://services.google.com/fh/files/newsletters/gp_nl_logo.png" alt="Google Play" width="250" height="50" style="display: block;" border="0" /> </a></td>
                                          </tr>
                                          <tr>
                                            <td height="40" style="font-size:1px;line-height:1px;mso-line-height-rule:exactly;padding:0;">&nbsp;</td>
                                          </tr>
                                          <tr>
                                            <td align="center" style="border-bottom: 1px solid #999999; border-top: 1px solid #999999;">
                                              <table border="0" cellpadding="0" cellspacing="0" width="100%" align="center">
                                                <tr>
                                                  <td style="text-align:left; line-height: 24px; font-weight: bold; color:#999999;font-family: 'Roboto',Helvetica,Arial,sans-serif;letter-spacing:normal;text-transform: uppercase;">
                                                    <h1 style="mso-line-height-rule:exactly; margin-bottom: 10px; margin-top: 10px; font-size: 20px; font-weight: 400;">GOOGLE PLAY NEWSLETTER ${month} ${year}</h1></td>
                                                </tr>
                                              </table>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td height="30" style="font-size:1px;line-height:1px;mso-line-height-rule:exactly;padding:0;">&nbsp;</td>
                                          </tr>
                                          `
  return output;                                       
} 

module.exports = header;