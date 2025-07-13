import dataNews from './data-news.js'
const buttons = document.querySelectorAll('.product__btn')
const template = document.querySelector('#template-post')
const postViewer = document.querySelector('#post-viewer')

buttons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
        e.preventDefault()
        const post = dataNews[index]
        location.href = `./article.html?id=${post.id}`
    })
})

window.addEventListener('DOMContentLoaded', () => {
    if (location.href.includes('article.html')) {
        const urlParams = new URLSearchParams(window.location.search)
        const id = urlParams.get('id')
        console.log(id)
        const post = dataNews[id]
        const postLink = document.querySelector('#post-link')
        postLink.textContent = post.title
        const clone = template.content.cloneNode(true)
        clone.querySelector('.product__title').textContent = post.tag
        clone.querySelector('.context__subtitle').textContent = post.title
        clone.querySelector('.context__title').textContent = post.date
        clone.querySelector('.product__img').src = post.imgs[0]
        // clone.querySelector('.main-text').innerHTML = post.description.join('')
        post.description.forEach((element) => {
            if (element.startsWith('/')) {
                clone.querySelector('.main-text').innerHTML +=
                    `<img class='main-text__img' src='${element}'>`
            } else {
                clone.querySelector('.main-text').innerHTML +=
                    `<p class='main-text__item'>${element}</p>`
            }
        })
        clone.querySelector('.post__tags').innerHTML += post.postTags.join(' ')
        postViewer.appendChild(clone)
    }
})
