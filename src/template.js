/*

  PLAY NEWSLETTER TEMPLATE

*/

// container for the template's output
let templateOutput = '';

// JSON data
newsletterData = require('./data/newsletter-data.json')
// deconstruct the data obj
const { topFive } = newsletterData

// import the newsletter templates
htmlHead = require('./templates/htmlHead.js')
header = require('./templates/header.js')
introBody = require('./templates/introBody.js')
trendingApps = require('./templates/trendingApps.js')
topFiveItems = require('./helpers/topFiveItems.js')
whatsComingSection = require('./helpers/whatsComingSection.js')
cta = require('./templates/cta.js')
footer = require('./templates/footer.js')
htmlFoot = require('./templates/htmlFoot.js')


// add the newsletter DOC head to the templateOutput
templateOutput += htmlHead
// add the newsletter header to the templateOutput
templateOutput += header
// add the newsletter's intro body to the templateOutput
templateOutput += introBody
// add the trending apps section to the templateOutput
templateOutput += trendingApps

// 
// TOP FIVE SECTION
// 
templateOutput += `<tr><td><table class="top_five_row" role="presentation" align="center" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 820px;" bgcolor="#ffffff">`

Object.keys(topFive).map((rowItem) => {
  templateOutput += topFiveItems(topFive[rowItem].title, topFive[rowItem].rowItems)
})

templateOutput += `</table></td></tr>`

console.log('templateOutput: ', templateOutput)


// WHAT'S COMING SECTION
templateOutput += whatsComingSection()

templateOutput += cta
templateOutput += footer

// add the newsletter DOC closing tags to the templateOutput
templateOutput += htmlFoot

// BUILD THE NEWSLETTER
// 
// populate the newsletter with the templateOutput content
// 
module.exports = templateOutput
