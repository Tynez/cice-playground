const API = 'https://jsonplaceholder.typicode.com'

export async function asyncCall() {
  const result = await resolveAfter1Seconds()
  drawPost(result)
}

async function loadPost(number) {
  return fetch(`${API}/posts/${number}`).then(response => response.json())
}

function resolveAfter1Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      const randPost = getRandomInt(5)
      const post = fetch(`${API}/posts/${randPost}`).then(response => response.json())
      resolve(post)
    }, 2000)
  })
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

function drawPost(post) {
  const postList = document.querySelector('#post-list')

  const article = document.createElement('article')
  const h3 = document.createElement('h3')
  const p = document.createElement('p')

  const title = document.createTextNode(post.title)
  const text = document.createTextNode(post.body)

  h3.appendChild(title)
  p.appendChild(text)
  article.appendChild(h3)
  article.appendChild(p)
  article.setAttribute('id', `userId-${post.id}`)

  postList.appendChild(article)
}
