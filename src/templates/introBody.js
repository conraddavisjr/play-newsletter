// output the newsletter's intro body copy
// 

htmlParser = require('../helpers/htmlParser.js')

function introBody() {

	let output = ''

															output += 
																`
																<tr>
															    <td align="center">
															      <table style="max-width: 600px;" border="0" cellpadding="0" cellspacing="0" width="100%">
															      `
															        output += htmlParser

																			output +=
																				`</table>
																		    </td>
																		  </tr>
																		</table>
																	</td>
						                    </tr>
						                  </table>
						                </td>
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
            </table>
            <!--[if (gte mso 9)|(IE)]></td></tr></table> <![endif]-->
          </td>
          <td width="20">&nbsp;</td>
        </tr>
      </table>
      <!--[if (gte mso 9)|(IE)]></td></tr></table> <![endif]-->
    </td>
  </tr>
`

return output
} 

module.exports = introBody;