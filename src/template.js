/*

  PLAY NEWSLETTER TEMPLATE

*/

// container for the template's output
let templateOutput = '';

// JSON data
newsletterData = require('./data/newsletter-data.json')
const { topFive } = newsletterData

// import the newsletter templates
header = require('./templates/header.js')
introBody = require('./templates/introBody.js')
trendingApps = require('./templates/trendingApps.js')
topFiveItems = require('./helpers/topFiveItems.js')

// add the newsletter header to the templateOutput
templateOutput += header
// add the newsletter's intro body to the templateOutput
templateOutput += introBody
// add the trending apps section to the templateOutput
templateOutput += trendingApps

// 
// TOP FIVE SECTION
// 
templateOutput += `<table class="top_five_row" role="presentation" align="center" cellpadding="0" cellspacing="0" border="0" width="100%">`

Object.keys(topFive).map((rowItem) => {
  templateOutput += topFiveItems(topFive[rowItem].title, topFive[rowItem].rowItems)
})

templateOutput += `</table>`

console.log('templateOutput: ', templateOutput)



// BUILD THE NEWSLETTER
// 
// populate the newsletter with the templateOutput content
// 
module.exports = templateOutput
