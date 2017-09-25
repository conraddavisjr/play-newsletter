const fs = require('fs')
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const $ = require('jquery')(window);

const { document } = window
const html = fs.readFileSync('src/data/intro.html', 'utf-8')

// Set up/clean document
document.body.innerHTML = html
$('*').removeAttr('class')
$('span').contents().unwrap()

const TEMPLATES = {
	p: content	=> `
	  <tr>
	    <td height="10" style="font-size:1px;line-height:1px;mso-line-height-rule:exactly;padding:0;">&nbsp;</td>
	  </tr>
		<tr>
	    <td style="text-align:left; color:#263238;font-family: 'Roboto',Helvetica,Arial,sans-serif;font-size:16px;letter-spacing:normal;line-height: 22px;">
	      ${content}
	    </td>
	  </tr>
	`,
	h2: content => `
		<tr>
      <td style="text-align:left; color:#333333;font-family: 'Roboto',Helvetica,Arial,sans-serif;font-size:30px;letter-spacing:normal;line-height: 35px;">
        <h2 style="mso-line-height-rule:exactly; margin-bottom: 20px; margin-top: 35px; font-size: 30px; font-weight: 300;">
          ${content}
        </h2></td>
    </tr>
	`,
	image: content => `
		<tr>
      <td height="10" style="font-size:1px;line-height:1px;mso-line-height-rule:exactly;padding:0;">&nbsp;</td>
    </tr>
    <tr>
      <td align="center"> <img src="https://services.google.com/fh/files/emails/gp_nl_august17_hero.jpg" alt="" width="600" height="320" border="0" style="display:block; max-width: 600px; width: 100%; height:auto;" /></td>
    </tr>
	`,
	other: input => input
};

const BLACKLISTED_ELS = ['meta', 'style']

let output = []
$('body > *').each((i, el) => {
  $el = $(el)

  const type = el.nodeName.toLowerCase()
  const template = TEMPLATES[type] || TEMPLATES['other']

  // Escape if unsupported type
  if (BLACKLISTED_ELS.includes(type)) return
  if ($el.html() === '<span></span>') return

  // Update nested <a>'s
  $('a', el).map((j, a) => {
    const $a = $(a)
    $a.replaceWith(`<a href="${$a.attr('href')}" target="_blank" style="color:#039be5; font-weight: 400; text-decoration:underline!important;">${$a.text()}</a>`)
  })

  output.push(template(el.outerHTML))
})

console.log(output.join('\n\n'))
