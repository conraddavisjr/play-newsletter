const whatsComingItem = require('./whatsComingItem')

function whatsComingRow(rowItems, whatsComingItems) {

  let output = '';


  output += `
    <tr>
      <td style="font-size:0;padding:0;" align="center">
    `
      rowItems.map((item) => { output += whatsComingItem(item, whatsComingItems[item].details) })

  output += `
      </td>
    </tr>

  `

  return output;

}



module.exports = whatsComingRow;