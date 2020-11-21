export function promptOption() {
  const options = ['a', 'b', 'c']
  var response
  do {
    response = prompt('Choose an option: A, B or C')
    response = response !== null ? response.toLowerCase() : response
  } while (!options.includes(response) && response !== null)

  if (response !== null) {
    ;(async function () {
      const module = await import(`./${response}.js`)
      module.default()
    })()
  }
}
