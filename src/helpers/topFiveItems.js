// output the newsletter's intro body copy
// 

const topFiveItemsRowOne = require('../templates/topFiveItemsRowOne.js')
const topFiveItemsRowTwo = require('../templates/topFiveItemsRowTwo.js')
const rowSpecs = require('../helpers/rowSpecs.js')
const getLastWord = require('../helpers/getLastWord.js')

function topFiveItems( title, rowItems ) {

  const { dimensions, titleColor, bgcolor } = rowSpecs[getLastWord(title)]
  const imgWidth = dimensions[0]
  const imgHeight = dimensions[1]
  const rowTitleColor = titleColor
  const backgroundColor = bgcolor || '#ffffff'

  // splice the rowItems into rows one and two
  const rowOneItems = rowItems.slice(0, 3)
  const rowTwoItems = rowItems.slice(3, 5)

  // container for the top five items
  let topFiveItems = ''
  
  // top scaffolding for the top five items row element
  topFiveItems += `
  <tr class="top_five_row" bgcolor="#ffffff">
    <td>
      <table role="presentation" align="center" cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="${backgroundColor}">
        <tr>
          <td>
            <!--[if (gte mso 9)|(IE)]><table width="820" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td align="center"> <![endif]-->
            <table role="presentation" align="center" cellpadding="0" cellspacing="0" border="0" width="100%" >
              <tr>
                <td align="center">
                  <!--[if (gte mso 9)|(IE)]><table width="820" cellpadding="0" cellspacing="0" border="0" bgcolor="f4f4f4"><tr><td valign="top"> <![endif]-->
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="center">
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
                                  <td style="padding-left: 10px; color:${titleColor}; font-size:16px;font-family: 'Roboto',Helvetica,Arial,sans-serif;letter-spacing:normal;line-height: 22px; text-align: left; text-transform: uppercase;font-weight: 700;"> ${title} </td>
                                </tr>
                                <tr>
                                  <td class="outlookheight20" height="10" style="font-size:1px;line-height:1px;mso-line-height-rule:exactly;padding:0;">&nbsp;</td>
                                </tr>
                                <tr>
                                  <td style="font-size:0;padding:0;max-width:600px;" width="100%" align="center">`

                                  // OUTPUT THE INDIVIDUAL ITEMS
                                  topFiveItems += topFiveItemsRowOne(rowOneItems, imgWidth, imgHeight)
                                  topFiveItems += topFiveItemsRowTwo(rowTwoItems, imgWidth, imgHeight)
                                    
                                  // bottom scaffolding for the top five items row element
                                  topFiveItems += `
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

  return topFiveItems;
}

module.exports = topFiveItems;