const API = 'https://jsonplaceholder.typicode.com'
//loadPosts()

const postList = [1, 2, 3]
loadSelectedPost()

function loadPosts() {
  const posts = fetch(`${API}/posts`)
    .then(response => response.json())
    .then(result => {
      Object.keys(result).forEach(postId => {
        const user = result[postId]
        drawPost(user)
      })
    })
}

function loadSelectedPost() {
  const promise1 = loadPost(1)
  const promise2 = loadPost(2)
  const promise3 = loadPost(3)

  Promise.all([promise1, promise2, promise3]).then(([a, b, c]) => {
    drawPost(a)
    drawPost(b)
    drawPost(c)
  })
}

async function loadPost(number) {
  return fetch(`${API}/posts/${number}`).then(response => response.json())
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
