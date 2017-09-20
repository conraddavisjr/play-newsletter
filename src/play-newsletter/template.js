/*

  PLAY NEWSLETTER TEMPLATE

*/

// container for the template's output
let templateOutput = '';
// identify the newsletter element as the output container
const newsletter = document.getElementById('newsletter');

import newsletterData from './data/newsletter-data.json'; 
const { topFive } = newsletterData

console.log('topFive: ', Object.keys(topFive))


console.log('newsletterData: ', newsletterData.topFive.games )

const bgColor = '#f4f4f4'

// import the newsletter modules
import docHead from './modules/head.js';
import header from './modules/header.js';
import introBody from './modules/introBody.js';
import trendingApps from './modules/trendingApps.js';
import topFiveItems from './helpers/topFiveItems.js';


// add the doc <head> to the templateOutput
templateOutput += docHead
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
newsletter.innerHTML = templateOutput
