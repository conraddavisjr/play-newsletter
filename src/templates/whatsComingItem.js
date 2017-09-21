const whatsComingDetails = require('./whatsComingDetails')

function whatsComingItem (title, details) {

let output = '';

  output += `

  <div style="display:inline-block;max-width:300px;vertical-align:top;width:100%;">
    <table role="presentation" width="100%" style="width:290px;" border="0" cellpadding="0" cellspacing="0">
      <tr>
        <td>
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td>
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                  <tr>
                    <td>
                      <table cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td height="18" style="font-size:1px;line-height:1px;mso-line-height-rule:exactly;padding:0;">&nbsp;</td>
                        </tr>
                        <tr>
                          <td valign="top">
                            <table cellpadding="0" cellspacing="0" border="0">
                              <tr>
                                <td valign="bottom" style="color:#00bf60; font-size:24px;font-family: 'Roboto',Helvetica,Arial,sans-serif;letter-spacing:normal;line-height: 26px; text-align: left; font-weight: 500; text-transform: uppercase;"> 
                                  ${title}
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
                    <td width="15"></td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <!--[if (gte mso 9)|(IE)]><table width="290" cellpadding="0" cellspacing="0" border="0" align="left"><tr><td valign="top"><![endif]-->
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                  <tr>
                    <td height="5" bgcolor="#00bf60" style="font-size:1px;line-height:1px;mso-line-height-rule:exactly;padding:0; background-color: #00bf60;">&nbsp;</td>
                  </tr>
                </table>
                <!--[if (gte mso 9)|(IE)]></td></tr></table> <![endif]-->
              </td>
            </tr>
            <tr>
              <td height="10" style="font-size:1px;line-height:1px;mso-line-height-rule:exactly;padding:0;">&nbsp;</td>
            </tr>
            <tr>
              <td>
                <!--[if (gte mso 9)|(IE)]><table width="290" bgcolor="#f6f6f6" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td valign="top"><![endif]-->
                <table bgcolor="#f6f6f6" border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td height="10" style="font-size:1px;line-height:1px;mso-line-height-rule:exactly;padding:0;" colspan="3">&nbsp;</td>
                  </tr>
                  <tr>
                    <td width="11"></td>
                    <td height="370" valign="top" class="heightAuto">
                      <table border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                          <td align="center"> <a href="https://play.google.com/store/apps/details?id=com.nexonm.tfa" target="_blank"> <img src="https://services.google.com/fh/files/emails/gp_nl_august17_titanfall.jpg" alt="Titanfall: Assault" style="display: block" width="268" height="268" border="0" /> </a></td>
                        </tr>
                        <tr>
                          <td height="10" style="font-size:1px;line-height:1px;mso-line-height-rule:exactly;padding:0;">&nbsp;</td>
                        </tr>
                        <tr>
                          <td height="5" style="font-size:1px;line-height:1px;mso-line-height-rule:exactly;padding:0;">&nbsp;</td>
                        </tr>`

                        output += whatsComingDetails(details)

                      output += `
                      </table>
                    </td>
                    <td width="11"></td>
                  </tr>
                  <tr>
                    <td height="10" style="font-size:1px;line-height:1px;mso-line-height-rule:exactly;padding:0;">&nbsp;</td>
                  </tr>
                </table>
                <!--[if (gte mso 9)|(IE)]></td></tr></table> <![endif]-->
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>

`
} 

module.exports = whatsComingItem;