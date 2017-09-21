
// parse the last word of the row title (ex: to determine the bgColor of the items row)
function getLastWord(title) {
  var lastWord = title.split(" ");
  return lastWord[lastWord.length - 1].toLowerCase();
}

module.exports = getLastWord