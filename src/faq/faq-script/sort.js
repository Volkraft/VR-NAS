const buttons = document.querySelectorAll('button.link-other-page-empty')
const items = document.querySelectorAll('.faq__point')

buttons.forEach((item) => {
    item.addEventListener('click', (e) => {
        let category = e.target.dataset.choose
        items.forEach((item) => {
            let itemCategory = item.dataset.item
            if (category == itemCategory) {
                item.style.display = 'block'
            } else if (category == '') {
                item.style.display = 'block'
            } else {
                item.style.display = 'none'
            }
        })
    })
})
