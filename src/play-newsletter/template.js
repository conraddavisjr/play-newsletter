/*

  PLAY NEWSLETTER TEMPLATE

*/


import newsletterData from './data/newsletter-data.json'; 

console.log('newsletterData: ', newsletterData.topFive.games )

const title = 'TOP NEW DOWNLOADED GAMES'
const bgColor = '#f4f4f4'

// container for the template's output
let templateOutput = '';
// identify the newsletter element as the output container
const newsletter = document.getElementById('newsletter');

// import the newsletter modules
import docHead from './modules/head.js';
import header from './modules/header.js';
import introBody from './modules/introBody.js';
import trendingApps from './modules/trendingApps.js';
import topGames from './helpers/topFiveItems.js';
import topSongs from './helpers/topFiveItems.js';


// add the doc <head> to the templateOutput
templateOutput += docHead
// add the newsletter header to the templateOutput
templateOutput += header
// add the newsletter's intro body to the templateOutput
templateOutput += introBody
// 
templateOutput += trendingApps
// title, imgWidth, imgHeight, rowItems

templateOutput += `<table class="top_five_row" role="presentation" align="center" cellpadding="0" cellspacing="0" border="0" width="100%">`

templateOutput += topGames(newsletterData.topFive.games.title, newsletterData.topFive.games.rowItems)
// 
templateOutput += topSongs(newsletterData.topFive.games.title, newsletterData.topFive.games.rowItems)
templateOutput += topSongs(newsletterData.topFive.games.title, newsletterData.topFive.games.rowItems)

templateOutput += `</table>`

console.log('templateOutput: ', templateOutput)



// BUILD THE NEWSLETTER
// 
// populate the newsletter with the templateOutput content
// 
newsletter.innerHTML = templateOutput
