/*

  PLAY NEWSLETTER TEMPLATE

*/


import newsletterData from './data/newsletter-data.json'; 

console.log('newsletterData: ', newsletterData )

const title = 'TOP NEW DOWNLOADED GAMES'
const bgColor = '#f4f4f4'
const imgWidth = 90
const imgHeight = 90

// TEMP rowItems
// TODO: make json file (perhaps)

const rowItems = [
  {
    title: 'Futurama: Worlds of Tomorrow',
    author: 'by TinyCo',
    src: 'https://services.google.com/fh/files/emails/gp_nl_august17_valerian.png',
    alt: 'Valerian: City of Alpha',
    href: 'https://play.google.com/store/apps/details?id=com.tinyco.futurama'
  },
  {
    title: 'Futurama: Worlds of Tomorrow',
    author: 'by TinyCo',
    src: 'https://services.google.com/fh/files/emails/gp_nl_august17_valerian.png',
    alt: 'Valerian: City of Alpha',
    href: 'https://play.google.com/store/apps/details?id=com.tinyco.futurama'
  },
  {
    title: 'Futurama: Worlds of Tomorrow',
    author: 'by TinyCo',
    src: 'https://services.google.com/fh/files/emails/gp_nl_august17_valerian.png',
    alt: 'Valerian: City of Alpha',
    href: 'https://play.google.com/store/apps/details?id=com.tinyco.futurama'
  },
  {
    title: 'Futurama: Worlds of Tomorrow',
    author: 'by TinyCo',
    src: 'https://services.google.com/fh/files/emails/gp_nl_august17_valerian.png',
    alt: 'Valerian: City of Alpha',
    href: 'https://play.google.com/store/apps/details?id=com.tinyco.futurama'
  },
  {
    title: 'Futurama: Worlds of Tomorrow',
    author: 'by TinyCo',
    src: 'https://services.google.com/fh/files/emails/gp_nl_august17_valerian.png',
    alt: 'Valerian: City of Alpha',
    href: 'https://play.google.com/store/apps/details?id=com.tinyco.futurama'
  }
]


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
import topSongs from './modules/topSongs.js';


// add the doc <head> to the templateOutput
templateOutput += docHead
// add the newsletter header to the templateOutput
templateOutput += header
// add the newsletter's intro body to the templateOutput
templateOutput += introBody
// 
templateOutput += trendingApps
// title, bgColor, imgWidth, imgHeight, rowItems
// templateOutput += topGames()
// 
templateOutput += topSongs

console.log('templateOutput: ', templateOutput)



// BUILD THE NEWSLETTER
// 
// populate the newsletter with the templateOutput content
// 
newsletter.innerHTML = templateOutput
