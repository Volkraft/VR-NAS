const menu = document.querySelector('#testimonailContent')
const toggleSublist = (e) => {
    const isActionBtn = e.target.closest('[data-testimonial-action]')

    if (isActionBtn) {
        const allActiveItems = menu.querySelectorAll(
            '[data-testimonial-action].active'
        )

        allActiveItems.forEach((item) => {
            if (item !== isActionBtn.closest('[data-testimonial-action]')) {
                item.classList.remove('active')
            }
        })

        const currentItem = isActionBtn.closest('[data-testimonial-action]')
        currentItem.classList.toggle('active')
    }
}

menu.addEventListener('click', toggleSublist)
