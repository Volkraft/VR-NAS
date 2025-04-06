const header = document.querySelector('#header')

const toggleSublist = (currentBtn) => {
    const allActiveItems = header.querySelectorAll('[data-acrList].active')

    allActiveItems.forEach((item) => {
        if (item !== currentBtn.closest('[data-acrList]')) {
            item.classList.remove('active')
        }
    })

    const currentItem = currentBtn.closest('[data-acrList]')
    currentItem.classList.toggle('active')
}

const mobileMenu = (burgerEl) => {
    const menu = header.querySelector('#menu')
    burgerEl.classList.toggle('active')
    menu.classList.toggle('open')
}

const handlerEvent = (e) => {
    const isActionBtn = e.target.closest('[data-acrList]')
    const isBurger = e.target.closest('#burger')

    if (isActionBtn) {
        toggleSublist(isActionBtn)
    } else if (isBurger) {
        mobileMenu(isBurger)
    }
}

header.addEventListener('click', handlerEvent)
