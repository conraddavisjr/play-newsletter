/*

  PLAY NEWSLETTER TEMPLATE

*/

// container for the template's output
let templateOutput = '';
// identify the newsletter element as the output container
const newsletter = document.getElementById('newsletter');

// import the newsletter modules
import docHead from './modules/head.js';
import header from './modules/header.js';
import introBody from './modules/introBody.js';



// add the doc <head> to the templateOutput
templateOutput += docHead;

templateOutput += header;

templateOutput += introBody;
console.log('templateOutput: ', templateOutput)


const domain = 'http://services.google.com/fh/files/emails/'

const songs = [
  { img: `${domain}gp_nl_august17_despacito.jpg`, name: 'Despacito (Remix) (feat. Justin Bieber)', artist: 'Luis Fonsi & Daddy Yankee', url: 'https://play.google.com/store/music/album/Luis_Fonsi_Daddy_Yankee_Despacito_Remix?id=Bnnwic4fkpwhn34md7aoetwhvei&hl=en' },
  { img: `${domain}gp_nl_august17_what_i_like.jpg`, name: 'That\'s What I Like', artist: 'Bruno Mars', url: 'https://play.google.com/store/music/album/Bruno_Mars_24K_Magic?id=Bhz6ypcckwn6irnmjejskqbulym&hl=en' },
  { img: `${domain}gp_nl_august17_humble.jpg`, name: 'HUMBLE.', artist: 'Kendrick Lamar', url: 'https://play.google.com/store/music/album/Kendrick_Lamar_DAMN?id=Bwj4cpxbxjnarequw2jkj5c3a5u&hl=en' },
  { img: `${domain}gp_nl_august17_grateful.jpg`, name: 'I\'m the One (feat. Justin Bieber, Quavo, Chance the Rapper & Lil Wayne)', artist: 'DJ Khaled', url: 'https://play.google.com/store/music/album/DJ_Khaled_Grateful?id=Bb2q2dnzjwybn5usgjwz242jw3m' },
  { img: `${domain}gp_nl_august17_congratulations.jpg`, name: 'Congratulations (feat. Quavo)', artist: 'Post Malone', url: 'https://play.google.com/store/music/album/Post_Malone_Stoney?id=B4vv6e4enk43eu4knvm2bin43by&hl=en' }
]

const songHTML = song => `
<td valign="top" width="100">
  <table cellpadding="0" cellspacing="0" border="0" width="100%">
    <tr>
      <td>
        <table cellpadding="0" cellspacing="0" border="0" align="center">
          <tr>
            <td align="center"> <img src="${song.img}" alt="${song.name}" width="90" height="90" style="display:block;" border="0" /></td>
          </tr>
          <tr>
            <td valign="top" width="100" style="padding-left: 10px;">
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td height="10" style="font-size:1px;line-height:1px;mso-line-height-rule:exactly;padding:0;">&nbsp;</td>
                </tr>
                <tr>
                  <td style="text-align:left;line-height: 14px; font-size: 12px; font-weight: 700;font-family: 'Roboto',Helvetica,Arial,sans-serif; text-transform: uppercase;text-decoration: none !important;"> <a href="${song.url}" target="_blank" style="text-decoration: none !important;color:#414141;font-size:11px;font-family: 'Roboto',Helvetica,Arial,sans-serif;letter-spacing:normal;line-height: 14px; text-transform: uppercase; font-weight: 700;">${song.name}<span style="color:#999999; font-size:12px;letter-spacing:normal;line-height: 14px; font-weight:400;"><br />by ${song.artist}</span></a></td>
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

console.log('\n','\n','\n','\n','\n', 'SONGS')
console.log( songs.map(song => songHTML(song)).join('\n') )
let songCollection = songs.map(song => songHTML(song)).join('\n')

// Add the songCollection to the templateOutput
templateOutput += songCollection


const albums = [
  { img: `${domain}gp_nl_august17_4_44.jpg`, name: '4:44', artist: 'JAY-Z', url: 'https://play.google.com/store/music/album/JAY_Z_4_44?id=Bhlerbl7hnpkofs7fdnt6ljnx64&hl=en' },
  { img: `${domain}gp_nl_august17_evolve.jpg`, name: 'Evolve', artist: 'Imagine Dragons', url: 'https://play.google.com/store/music/album/Imagine_Dragons_Evolve?id=B5ajs37gooyyku2qrkqc3ructey&hl=en' },
  { img: `${domain}gp_nl_august17_grateful.jpg`, name: 'Grateful', artist: 'DJ Khaled', url: 'https://play.google.com/store/music/album/DJ_Khaled_Grateful?id=Bb2q2dnzjwybn5usgjwz242jw3m&hl=en' },
  { img: `${domain}gp_nl_august17_humble.jpg`, name: 'DAMN.', artist: 'Kendrick Lamar', url: 'https://play.google.com/store/music/album/Kendrick_Lamar_DAMN?id=Bwj4cpxbxjnarequw2jkj5c3a5u&hl=en' },
  { img: `${domain}gp_nl_august17_baby_driver.jpg`, name: 'Baby Driver (Music from the Motion Picture)', artist: 'Various Artists', url: 'https://play.google.com/store/music/album/Various_Artists_Baby_Driver_Music_from_the_Motion?id=Byx2zvqvhvfjmcxllclzfgmzzqu&hl=en' }
]

const albumHTML = album => `
<td valign="top" width="100">
  <table cellpadding="0" cellspacing="0" border="0" width="100%">
    <tr>
      <td>
        <table cellpadding="0" cellspacing="0" border="0" align="center">
          <tr>
            <td align="center"> <img src="${album.img}" alt="${album.name}" width="90" height="90" style="display:block;" border="0" /></td>
          </tr>
          <tr>
            <td valign="top" width="100" style="padding-left: 10px;">
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td height="10" style="font-size:1px;line-height:1px;mso-line-height-rule:exactly;padding:0;">&nbsp;</td>
                </tr>
                <tr>
                  <td style="text-align:left;line-height: 14px; font-size: 12px; font-weight: 700;font-family: 'Roboto',Helvetica,Arial,sans-serif; text-transform: uppercase;text-decoration: none !important;"> <a href="${album.url}" target="_blank" style="text-decoration: none !important;color:#414141;font-size:11px;font-family: 'Roboto',Helvetica,Arial,sans-serif;letter-spacing:normal;line-height: 14px; text-transform: uppercase; font-weight: 700;">${album.name}<span style="color:#999999; font-size:12px;letter-spacing:normal;line-height: 14px; font-weight:400;"><br />by ${album.artist}</span></a></td>
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

console.log('\n','\n','\n','\n','\n', 'ALBUMS')
console.log( albums.map(album => albumHTML(album)).join('\n') )


const shows = [
  { img: `${domain}gp_nl_august17_game_of_thrones.jpg`, name: 'Game of Thrones', season: '6', url: 'https://play.google.com/store/tv/show/Game_of_Thrones?id=71Edzxe9gmo&hl=en&cdid=tvseason-4nbnuwQRnoyssv1CM85pfA' },
  { img: `${domain}gp_nl_august17_rick_and_morty.jpg`, name: 'Rick and Morty', season: '3', url: 'https://play.google.com/store/tv/show/Rick_and_Morty?id=hmkH03AZgk0&hl=en' },
  { img: `${domain}gp_nl_august17_doctor_who.jpg`, name: 'Doctor Who', season: '10', url: 'https://play.google.com/store/tv/show/Doctor_Who?id=XOrPOdWv2XE&hl=en&cdid=tvseason-aKp5CakS4frsWPps0y3d2w' },
  { img: `${domain}gp_nl_august17_game_of_thrones.jpg`, name: 'Game of Thrones', season: '7', url: 'https://play.google.com/store/tv/show/Game_of_Thrones?id=71Edzxe9gmo&hl=en&cdid=tvseason-4nbnuwQRnoyssv1CM85pfA' },
  { img: `${domain}gp_nl_august17_game_of_thrones.jpg`, name: 'Game of Thrones', season: '1', url: 'https://play.google.com/store/tv/show/Game_of_Thrones?id=71Edzxe9gmo&hl=en&cdid=tvseason-0uaIRlgLkL4' }
]

const showHTML = show => `
<td valign="top" width="100">
  <table cellpadding="0" cellspacing="0" border="0" width="100%">
    <tr>
      <td>
        <table cellpadding="0" cellspacing="0" border="0" align="center">
          <tr>
            <td align="center"> <img src="${show.img}" alt="${show.name}" width="90" height="90" style="display:block;" border="0" /></td>
          </tr>
          <tr>
            <td valign="top" width="100" style="padding-left: 10px;">
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td height="10" style="font-size:1px;line-height:1px;mso-line-height-rule:exactly;padding:0;">&nbsp;</td>
                </tr>
                <tr>
                  <td style="text-align:left;line-height: 14px; font-size: 12px; font-weight: 700;font-family: 'Roboto',Helvetica,Arial,sans-serif; text-transform: uppercase;text-decoration: none !important;"> <a href="${show.url}" target="_blank" style="text-decoration: none !important;color:#414141;font-size:11px;font-family: 'Roboto',Helvetica,Arial,sans-serif;letter-spacing:normal;line-height: 14px; text-transform: uppercase; font-weight: 700;">${show.name}<span style="color:#999999; font-size:12px;letter-spacing:normal;line-height: 14px; font-weight:400;"><br />SEASON ${show.season}</span></a></td>
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

console.log('\n','\n','\n','\n','\n', 'SHOWS')
console.log( shows.map(show => showHTML(show)).join('\n') )



const movies = [
  { img: `${domain}gp_nl_august17_boss_baby.jpg`, name: 'The Boss Baby', url: 'https://play.google.com/store/movies/details/The_Boss_Baby?id=RBfCQuQqgNs&hl=en' },
  { img: `${domain}gp_nl_august17_f8.jpg`, name: 'The Fate of the Furious', url: 'https://play.google.com/store/movies/details/The_Fate_of_the_Furious?id=YOu6PdMIrkE&hl=en' },
  { img: `${domain}gp_nl_august17_ghost_in_the_shell.jpg`, name: 'Ghost in the Shell', url: 'https://play.google.com/store/movies/details/Ghost_in_the_Shell?id=0nbIdLz2Azo&hl=en' },
  { img: `${domain}gp_nl_august17_kong_skull_island.jpg`, name: 'Kong: Skull Island', url: 'https://play.google.com/store/movies/details/Kong_Skull_Island?id=GviRHm6hI0I&hl=en' },
  { img: `${domain}gp_nl_august17_beauty_and_the_beast.jpg`, name: 'Beauty and the Beast (2017)', url: 'https://play.google.com/store/movies/details/Beauty_and_the_Beast_2017?id=g-DkY-drN9Q&hl=en' }
]

const movieHTML = movie => `
<td valign="top" width="100">
  <table cellpadding="0" cellspacing="0" border="0" width="100%">
    <tr>
      <td>
        <table cellpadding="0" cellspacing="0" border="0" align="center">
          <tr>
            <td align="center"> <img src="${movie.img}" alt="${movie.name}" width="90" height="138" style="display:block;" border="0" /></td>
          </tr>
          <tr>
            <td valign="top" width="100" style="padding-left: 10px;">
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td height="10" style="font-size:1px;line-height:1px;mso-line-height-rule:exactly;padding:0;">&nbsp;</td>
                </tr>
                <tr>
                  <td style="text-align:left;line-height: 14px; font-size: 12px; font-weight: 700;font-family: 'Roboto',Helvetica,Arial,sans-serif; text-transform: uppercase;text-decoration: none !important;"> <a href="${movie.url}" target="_blank" style="text-decoration:none!important;color:#414141;font-size:12px;font-family: 'Roboto',Helvetica,Arial,sans-serif;letter-spacing:normal;line-height:14px; text-transform: uppercase; text-underline: none;">${movie.name}</a></td>
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

console.log('\n','\n','\n','\n','\n', 'MOVIES')
console.log( movies.map(movie => movieHTML(movie)).join('\n') )


// BUILD THE NEWSLETTER
// 
// populate the newsletter with the templateOutputS
// 
newsletter.innerHTML = templateOutput
