import dataNews from './data-news.js'
const buttons = document.querySelectorAll('.product__btn')
const template = document.querySelector('#template-post')
const postViewer = document.querySelector('#post-viewer')

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const post = dataNews[index]
        console.log(post)

        const clone = template.content.cloneNode(true)
        clone.querySelector('.product__title').textContent = post.tag
        clone.querySelector('.context__subtitle').textContent = post.title
        clone.querySelector('.context__title').textContent = post.date
        clone.querySelector('.product__img').src = post.imgs[0]
        clone.querySelector('.main-text').innerHTML = post.description.join('')
        clone.querySelector('.post__tags').innerHTML = post.postTags.join('')
        clone.querySelector('.post__links').innerHTML = post.links.join('')
        postViewer.appendChild(clone)
    })
})
