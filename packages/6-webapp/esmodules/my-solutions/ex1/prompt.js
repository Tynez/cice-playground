export function promptOption() {
  const options = ['a', 'b', 'c']
  let response

  do {
    response = prompt('Choose an option: A, B or C')
    response = response !== null ? response.toLowerCase() : response
  } while (!options.includes(response) && response !== null)

  if (response !== null) {
    loadJavaSCript(response)
  }
}

async function loadJavaSCript(resp) {
  const module = await import(`./${resp}.js`)
  module.default()
}
