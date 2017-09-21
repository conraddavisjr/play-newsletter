function trendingAppsItem(appItem) {

  const { src, alt, title, copy } = appItem
	let output = '';

	output += `
		<tr>
      <td height="20" style="font-size:1px;line-height:1px;mso-line-height-rule:exactly;padding:0;">&nbsp;</td>
    </tr>
    <tr>
      <td style="font-size:0;padding:0;max-width:560px;" width="100%" align="center">
        <!--[if (gte mso 9)|(IE)]><table width="560" cellpadding="0" cellspacing="0" border="0"><tr><td width="205" valign="top"> <![endif]-->
        <div style="display:inline-block;max-width:205px;vertical-align:top;width:100%;">
          <table cellpadding="0" cellspacing="0" border="0" width="100%">
            <tr>
              <td valign="top" align="center"> <img src="${src}" alt="${alt}" border="0" width="146" height="146" style="display: block;" /></td>
            </tr>
          </table>
        </div>
        <!--[if (gte mso 9)|(IE)]></td><td width="330" valign="top"><![endif]-->
        <div style="display:inline-block;max-width:355px;vertical-align:top;width:100%;">
          <table cellpadding="0" cellspacing="0" style="max-width: 330px;" align="left" border="0" width="100%">
            <tr>
              <td class="center" valign="top" style="padding-top:4px; mso-line-height-rule:exactly;color:#039be5;font-family: Roboto,Helvetica,Arial,sans-serif;font-size:16px;letter-spacing:normal;line-height:1.25;font-weight:400; text-transform: uppercase;"> 
                <a href="https://play.google.com/store/apps/details?id=com.hbo.hbonow" style="color:#039be5; text-decoration: underline;" target="_blank">
                  <strong>${title}</strong>
                </a>
              </td>
            </tr>
            <tr>
              <td height="5" style="font-size:1px;line-height:1px;mso-line-height-rule:exactly;padding:0;">&nbsp;</td>
            </tr>
            <tr>
              <td valign="top" style="padding:0px;mso-line-height-rule:exactly;text-decoration:none;color:#666666;font-family: Roboto,Helvetica,Arial,sans-serif;font-size:15px;font-weight:400;letter-spacing:normal;line-height:1.25;text-align:left;">
                ${copy}
              </td>
            </tr>
          </table>
        </div>
        <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
      </td>
    </tr>

	`
	return output;

}

module.exports = trendingAppsItem;