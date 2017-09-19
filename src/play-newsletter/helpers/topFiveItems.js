// output the newsletter's intro body copy
// 

import topFiveItemsRowOne from '../modules/topFiveItemsRowOne.js'
import topFiveItemsRowTwo from '../modules/topFiveItemsRowTwo.js'

const title = 'TOP NEW DOWNLOADED GAMES'
const bgColor = '#f4f4f4'

const TOPGAMES = `

<tr>
  <td>
    <table role="presentation" align="center" cellpadding="0" cellspacing="0" border="0" width="100%">
      <tr>
        <td>
          <!--[if (gte mso 9)|(IE)]><table width="820" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td align="center"> <![endif]-->
          <table role="presentation" align="center" cellpadding="0" cellspacing="0" border="0" width="100%">
            <tr>
              <td align="center">
                <!--[if (gte mso 9)|(IE)]><table width="820" cellpadding="0" cellspacing="0" border="0" bgcolor="f4f4f4"><tr><td valign="top"> <![endif]-->
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="center" style="background-color: ${bgColor}">
                  <tr>
                    <td align="center">
                      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                        <tr>
                          <td width="10"></td>
                          <td align="center">
                            <!--[if (gte mso 9)|(IE)]><table width="600" cellpadding="0" cellspacing="0" border="0"><tr><td width="360" valign="top"><![endif]-->
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px;" align="center">
                              <tr>
                                <td height="20" style="font-size:1px;line-height:1px;mso-line-height-rule:exactly;padding:0;">&nbsp;</td>
                              </tr>
                              <tr>
                                <td style="padding-left: 10px; color:#00bf60; font-size:16px;font-family: 'Roboto',Helvetica,Arial,sans-serif;letter-spacing:normal;line-height: 22px; text-align: left; text-transform: uppercase;font-weight: 700;"> ${title} </td>
                              </tr>
                              <tr>
                                <td class="outlookheight20" height="10" style="font-size:1px;line-height:1px;mso-line-height-rule:exactly;padding:0;">&nbsp;</td>
                              </tr>
                              <tr>
                                <td style="font-size:0;padding:0;max-width:600px;" width="100%" align="center">
                                  ${ topFiveItemsRowOne }
                                  ${ topFiveItemsRowTwo }
                                </td>
                              </tr>
                              <tr>
                                <td height="20"></td>
                              </tr>
                            </table>
                            <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                          </td>
                          <td width="10"></td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
              </td>
              <td width="10"></td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </td>
</tr>
`;

export default TOPGAMES;