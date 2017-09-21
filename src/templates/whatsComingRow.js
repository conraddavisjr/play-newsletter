const whatsComingItem = require('./whatsComingItem')

function whatsComingRow() {

  let output = '';


  output += `

    <tr>
      <td style="font-size:0;padding:0;" align="center">

        ${whatsComingItem}
        ${whatsComingItem}

      </td>
    </tr>

  `

  return output;

}



module.exports = whatsComingRow;