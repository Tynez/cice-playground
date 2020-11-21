export function getTime() {
  const today = new Date()
  const sec = seconds_since_epoch(today)

  console.log('Seconds since epoch: ' + sec)
}

function seconds_since_epoch(d) {
  return Math.floor(d / 1000)
}
