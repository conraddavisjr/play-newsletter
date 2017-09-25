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
  p: input => `
    <tr>
      <td>
        ${input}
      </td>
    </tr>
  `,
  h1: input => `
    <tr>
      <td>
        ${input}
      </td>
    </tr>
  `,
  h2: input => `
    <tr>
      <td>
        ${input}
      </td>
    </tr>
  `,
  other: input => input
}

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
    const style = 'style="color:blue;"'
    $a.replaceWith(`<a data-party ${style} href="${$a.attr('href')}">${$a.text()}</a>`)
  })

  output.push(template(el.outerHTML))
})

console.log(output.join('\n\n'))
