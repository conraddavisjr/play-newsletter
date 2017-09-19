// output the newsletter's top items (1st row)
// 

function topFiveItemsRowOne(images, imgWidth, imgHeight) { 

  // container for the row of items
  let rowOne = ''

  // HTML for the top portion of the row two container
  rowOne +=
  `
    <!--[if (gte mso 9)|(IE)]><table width="600" cellpadding="0" cellspacing="0" border="0"><tr><td width="360" valign="top"> <![endif]-->
    <div style="display:inline-block;max-width:360px;vertical-align:top;width:100%;">
      <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
        <tr>
          <td valign="top" align="center">
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr>`

              // loop through the items in row
              images.map((item, i) => {
                rowOne += `<td valign="top" width="100">
                  <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tr>
                      <td>
                        <table cellpadding="0" cellspacing="0" border="0" align="center">
                          <tr>
                            <td align="center"> <img src="${images[i].src}" alt="${images[i].alt}" width="${imgWidth}" height="${imgHeight}" style="display:block;" border="0" /></td> 
                          </tr>
                          <tr>
                            <td valign="top" width="100" style="padding-left: 10px;">
                              <table cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                  <td height="10" style="font-size:1px;line-height:1px;mso-line-height-rule:exactly;padding:0;">&nbsp;</td>
                                </tr>
                                <tr>
                                  <td style="text-align:left;line-height: 14px; font-size: 12px; font-weight: 700;font-family: 'Roboto',Helvetica,Arial,sans-serif; text-transform: uppercase;text-decoration: none !important;"> <a href="https://play.google.com/store/apps/details?id=com.tinyco.futurama" target="_blank" style="text-decoration: none !important;color:#414141;font-size:11px;font-family: 'Roboto',Helvetica,Arial,sans-serif;letter-spacing:normal;line-height: 14px; text-transform: uppercase; font-weight: 700;">Futurama: Worlds of Tomorrow<span style="color:#999999; font-size:12px;letter-spacing:normal;line-height: 14px; font-weight:400;"><br />by TinyCo</span></a></td>
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
            rowOne +=
             `</tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
    `
    
  return rowOne

}

export default topFiveItemsRowOne;

// const ROWONE = `

// <!--[if (gte mso 9)|(IE)]><table width="600" cellpadding="0" cellspacing="0" border="0"><tr><td width="360" valign="top"> <![endif]-->
// <div style="display:inline-block;max-width:360px;vertical-align:top;width:100%;">
//   <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
//     <tr>
//       <td valign="top" align="center">
//         <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
//           <tr>



//             <td valign="top" width="100">
//               <table cellpadding="0" cellspacing="0" border="0" width="100%">
//                 <tr>
//                   <td>
//                     <table cellpadding="0" cellspacing="0" border="0" align="center">
//                       <tr>
//                         <td align="center"> <img src="https://services.google.com/fh/files/emails/gp_nl_august17_futurama.png" alt="Futurama: Worlds of Tomorrow" width="90" height="90" style="display:block;" border="0" /></td>
//                         <td align="center"> <img src="${images[0].src}" alt="${images[0].alt}" width="${imgWidth}" height="${imgHeight}" style="display:block;" border="0" /></td> 
//                       </tr>
//                       <tr>
//                         <td valign="top" width="100" style="padding-left: 10px;">
//                           <table cellpadding="0" cellspacing="0" border="0">
//                             <tr>
//                               <td height="10" style="font-size:1px;line-height:1px;mso-line-height-rule:exactly;padding:0;">&nbsp;</td>
//                             </tr>
//                             <tr>
//                               <td style="text-align:left;line-height: 14px; font-size: 12px; font-weight: 700;font-family: 'Roboto',Helvetica,Arial,sans-serif; text-transform: uppercase;text-decoration: none !important;"> <a href="https://play.google.com/store/apps/details?id=com.tinyco.futurama" target="_blank" style="text-decoration: none !important;color:#414141;font-size:11px;font-family: 'Roboto',Helvetica,Arial,sans-serif;letter-spacing:normal;line-height: 14px; text-transform: uppercase; font-weight: 700;">Futurama: Worlds of Tomorrow<span style="color:#999999; font-size:12px;letter-spacing:normal;line-height: 14px; font-weight:400;"><br />by TinyCo</span></a></td>
//                             </tr>
//                           </table>
//                         </td>
//                       </tr>
//                       <tr>
//                         <td height="5" style="font-size:1px;line-height:1px;mso-line-height-rule:exactly;padding:0;">&nbsp;</td>
//                       </tr>
//                     </table>
//                   </td>
//                 </tr>
//               </table>
//             </td>




//             <td valign="top" width="100">
//               <table cellpadding="0" cellspacing="0" border="0" width="100%">
//                 <tr>
//                   <td>
//                     <table cellpadding="0" cellspacing="0" border="0" align="center">
//                       <tr>
//                         <td align="center"> <img src="https://services.google.com/fh/files/emails/gp_nl_august17_snoopy_pop.png" alt="Snoopy Pop" width="90" height="90" style="display:block;" border="0" /></td>
//                       </tr>
//                       <tr>
//                         <td valign="top" width="100" style="padding-left: 10px;">
//                           <table cellpadding="0" cellspacing="0" border="0">
//                             <tr>
//                               <td height="10" style="font-size:1px;line-height:1px;mso-line-height-rule:exactly;padding:0;">&nbsp;</td>
//                             </tr>
//                             <tr>
//                               <td style="text-align:left;line-height: 14px; font-size: 12px; font-weight: 700;font-family: 'Roboto',Helvetica,Arial,sans-serif; text-transform: uppercase;text-decoration: none !important;"> <a href="https://play.google.com/store/apps/details?id=com.jamcity.snoopypop" target="_blank" style="text-decoration: none !important;color:#414141;font-size:11px;font-family: 'Roboto',Helvetica,Arial,sans-serif;letter-spacing:normal;line-height: 14px; text-transform: uppercase; font-weight: 700;">Snoopy Pop<span style="color:#999999; font-size:12px;letter-spacing:normal;line-height: 14px; font-weight:400;"><br />by Jam City</span></a></td>
//                             </tr>
//                           </table>
//                         </td>
//                       </tr>
//                       <tr>
//                         <td height="5" style="font-size:1px;line-height:1px;mso-line-height-rule:exactly;padding:0;">&nbsp;</td>
//                       </tr>
//                     </table>
//                   </td>
//                 </tr>
//               </table>
//             </td>
//             <td valign="top" width="100">
//               <table cellpadding="0" cellspacing="0" border="0" width="100%">
//                 <tr>
//                   <td>
//                     <table cellpadding="0" cellspacing="0" border="0" align="center">
//                       <tr>
//                         <td align="center"> <img src="https://services.google.com/fh/files/emails/gp_nl_august17_elder_scrolls.png" alt="The Elder Scrolls®: Legends™" width="90" height="90" style="display:block;" border="0" /></td>
//                       </tr>
//                       <tr>
//                         <td valign="top" width="100" style="padding-left: 10px;">
//                           <table cellpadding="0" cellspacing="0" border="0">
//                             <tr>
//                               <td height="10" style="font-size:1px;line-height:1px;mso-line-height-rule:exactly;padding:0;">&nbsp;</td>
//                             </tr>
//                             <tr>
//                               <td style="text-align:left;line-height: 14px; font-size: 12px; font-weight: 700;font-family: 'Roboto',Helvetica,Arial,sans-serif; text-transform: uppercase;text-decoration: none !important;"> <a href="https://play.google.com/store/apps/details?id=com.bethsoft.theelderscrollslegends" target="_blank" style="text-decoration: none !important;color:#414141;font-size:11px;font-family: 'Roboto',Helvetica,Arial,sans-serif;letter-spacing:normal;line-height: 14px; text-transform: uppercase; font-weight: 700;">The Elder Scrolls®: Legends™<span style="color:#999999; font-size:12px;letter-spacing:normal;line-height: 14px; font-weight:400;"><br />by Bethesda</span></a></td>
//                             </tr>
//                           </table>
//                         </td>
//                       </tr>
//                       <tr>
//                         <td height="5" style="font-size:1px;line-height:1px;mso-line-height-rule:exactly;padding:0;">&nbsp;</td>
//                       </tr>
//                     </table>
//                   </td>
//                 </tr>
//               </table>
//             </td>

//           </tr>
//         </table>
//       </td>
//     </tr>
//   </table>
// </div>
// `;

// export default ROWONE;