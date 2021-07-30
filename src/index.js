//global variables
const imageURL = ' https://distinct-vaulted-freesia.glitch.me/image'
const image = el('fg-image')

const title = el('fg-title')

const likes = el('fg-likes')
const likeBtn = el('like-button')

const fgComments = el('fg-comments')
const comments = el('comment-form')
counter = 0
//function to pull DOM elements easier
function el(id) {
    return document.getElementById(id)
}
fetch(imageURL)
.then(resp => resp.json())
.then(data => renderData(data))

function renderData(data) {
    title.innerText = data.title
    image.src = data.image
    counter = data.likes
    renderCounter()
    loadComments(data.comments)
}

function renderCounter() {
    likes.innerText = `${counter} likes`
}

likeBtn.addEventListener('click', () => {
    counter += 1
    renderCounter()
})

function loadComments(comments){
    fgComments.innerHTML = ''
    comments.forEach(comment => addComment(comment.content))
}

comments.addEventListener('submit', e => {
    e.preventDefault()
    addComment(e.target[0].value)
    e.target[0].value = ''
})

function addComment(comment) {
    const li = document.createElement('li')
    li.innerText = comment
    fgComments.append(li)
}

