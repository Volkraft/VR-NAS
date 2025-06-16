import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const timelinePreview = gsap.timeline({})
const previewInfo = document.querySelectorAll('[data-anim="previewInfo"]')
const previewAvatar = document.querySelectorAll('[data-anim="previewAvatar"]')
const previewText = document.querySelectorAll('[data-anim="previewText"]')
const previewBtn = document.querySelectorAll('[data-anim="previewBtn"]')
const advantages = document.querySelectorAll('[data-anim="advantages"]')

window.onbeforeunload = function () {
    window.scrollTo(0, 0)
}

// preview
previewInfo.forEach((item) => {
    timelinePreview.from(
        item,
        {
            y: 400,
            duration: 2,
            opacity: 0,
            delay: 0.5,
            ease: 'back.out(1.1)',
        },
        '<'
    )
})
previewAvatar.forEach((item) => {
    timelinePreview.from(
        item,
        {
            x: 400,
            duration: 2,
            opacity: 0,
            delay: 0.5,
            ease: 'back.out(1.1)',
        },
        '<'
    )
})
previewText.forEach((item) => {
    timelinePreview.from(
        item,
        {
            y: 400,
            duration: 2,
            opacity: 0,
            delay: 0.5,
            ease: 'back.out(1.1)',
        },
        '<'
    )
})
previewBtn.forEach((item) => {
    timelinePreview.from(
        item,
        {
            y: 400,
            duration: 2,
            opacity: 0,
            delay: 0.5,
            ease: 'back.out(1.1)',
        },
        '<'
    )
})
advantages.forEach((item) => {
    timelinePreview.from(
        item,
        {
            y: 400,
            duration: 2,
            opacity: 0,
            delay: 0,
            ease: 'back.out(1.1)',
        },
        '<'
    )
})

// about-us

gsap.from('#aboutLogo', {
    y: 400,
    opacity: 0,
    scrollTrigger: {
        // markers:true,
        trigger: '#aboutContent',
        start: 'top 80%',
        end: '30% 80%',
        opacity: 1,
        scrub: 1.5,
        toggleActions: 'play reverse play reverse',
        once: true,
    },
})
gsap.from('#aboutTitle', {
    y: 200,
    opacity: 0,
    scrollTrigger: {
        // markers:true,
        trigger: '#aboutContent',
        start: 'top 80%',
        end: '30% 80%',
        opacity: 1,
        scrub: 1.5,
        toggleActions: 'play reverse play reverse',
        once: true,
    },
})
gsap.from('#aboutText', {
    y: 300,
    opacity: 0,
    stagger: 0.3,
    delay: 1,
    scrollTrigger: {
        // markers:true,
        trigger: '#aboutContent',
        start: '40% 80%',
        end: '55% 80%',
        opacity: 1,
        scrub: 1.5,
        toggleActions: 'play reverse play reverse',
        once: true,
    },
})
gsap.from('#aboutList', {
    y: 250,
    opacity: 0,
    stagger: 0.3,
    delay: 0.5,
    scrollTrigger: {
        // markers:true,
        trigger: '#aboutContent',
        start: '50% 80%',
        end: '65% 80%',
        opacity: 1,
        scrub: 1.5,
        toggleActions: 'play reverse play reverse',
        once: true,
    },
})
gsap.from('#aboutBtn', {
    y: 200,
    opacity: 0,
    stagger: 0.3,
    delay: 0.5,
    scrollTrigger: {
        // markers:true,
        trigger: '#aboutContent',
        start: '60% 80%',
        end: '75% 80%',
        opacity: 1,
        scrub: 1.5,
        toggleActions: 'play reverse play reverse',
        once: true,
    },
})

// service

gsap.from('#serviceHeader', {
    y: 100,
    opacity: 0,
    stagger: 0.3,
    delay: 1.5,
    scrollTrigger: {
        // markers:true,
        trigger: '#service',
        start: '-10% 80%',
        end: '10% 80%',
        opacity: 1,
        scrub: 1.5,
        toggleActions: 'play reverse play reverse',
        once: true,
    },
})
gsap.from('#serviceCardsFirst', {
    y: 100,
    opacity: 0,
    stagger: 0.3,
    delay: 0.5,
    scrollTrigger: {
        // markers:true,
        trigger: '#serviceHeader',
        start: '200% 80%',
        end: '390% 80%',
        opacity: 1,
        scrub: 1.5,
        toggleActions: 'play reverse play reverse',
        once: true,
    },
})
gsap.from('#serviceCardsSecond', {
    y: 100,
    opacity: 0,
    stagger: 0.3,
    delay: 1,
    scrollTrigger: {
        // markers:true,
        trigger: '#serviceHeader',
        start: '300% 80%',
        end: '450% 80%',
        opacity: 1,
        scrub: 1.5,
        toggleActions: 'play reverse play reverse',
        once: true,
    },
})

// choouse-us

gsap.from('#choouseLogo', {
    x: 200,
    opacity: 0,
    stagger: 0.3,
    delay: 1,
    scrollTrigger: {
        // markers:true,
        trigger: '#choouse',
        start: 'top 80%',
        end: 'bottom 80%',
        opacity: 1,
        scrub: 1.5,
        toggleActions: 'play reverse play reverse',
        once: true,
    },
})
gsap.from('#choouseTitle', {
    y: 100,
    opacity: 0,
    stagger: 0.3,
    delay: 0.5,
    scrollTrigger: {
        // markers:true,
        trigger: '#choouse',
        start: 'top 80%',
        end: 'bottom 80%',
        opacity: 1,
        scrub: 1.5,
        toggleActions: 'play reverse play reverse',
        once: true,
    },
})
gsap.from('#choouseListFirst', {
    y: 200,
    opacity: 0,
    stagger: 0.3,
    delay: 0.5,
    scrollTrigger: {
        // markers:true,
        trigger: '#choouse',
        start: '50% 80%',
        end: '70% 80%',
        opacity: 1,
        scrub: 1.5,
        toggleActions: 'play reverse play reverse',
        once: true,
    },
})
gsap.from('#choouseListSecond', {
    y: 200,
    opacity: 0,
    stagger: 0.3,
    delay: 0.5,
    scrollTrigger: {
        // markers:true,
        trigger: '#choouse',
        start: '60% 80%',
        end: '70% 80%',
        opacity: 1,
        scrub: 1.5,
        toggleActions: 'play reverse play reverse',
        once: true,
    },
})
gsap.from('#choouseListThird', {
    y: 200,
    opacity: 0,
    stagger: 0.3,
    delay: 0.5,
    scrollTrigger: {
        // markers:true,
        trigger: '#choouse',
        start: '70% 80%',
        end: 'bottom 80%',
        opacity: 1,
        scrub: 1.5,
        toggleActions: 'play reverse play reverse',
        once: true,
    },
})

// get started

gsap.from('#getStartTitle', {
    y: 200,
    opacity: 0,
    stagger: 0.3,
    delay: 0.5,
    scrollTrigger: {
        // markers:true,
        trigger: '#getStartHeader',
        start: 'top 80%',
        end: '20% 80%',
        opacity: 1,
        scrub: 1.5,
        toggleActions: 'play reverse play reverse',
        once: true,
    },
})
gsap.from('#getStartSubtitle', {
    y: 200,
    opacity: 0,
    stagger: 0.3,
    delay: 0.5,
    scrollTrigger: {
        // markers:true,
        trigger: '#getStartHeader',
        start: '60% 80%',
        end: '70% 80%',
        opacity: 1,
        scrub: 1.5,
        toggleActions: 'play reverse play reverse',
        once: true,
    },
})
gsap.from('#player', {
    y: 200,
    opacity: 0,
    stagger: 0.3,
    delay: 0.5,
    scrollTrigger: {
        // markers:true,
        trigger: '#getStartHeader',
        start: '90% 80%',
        end: '100% 80%',
        opacity: 1,
        scrub: 1.5,
        toggleActions: 'play reverse play reverse',
        once: true,
    },
})
gsap.from('#getStartBtn', {
    y: 200,
    opacity: 0,
    stagger: 0.3,
    delay: 0.5,
    scrollTrigger: {
        // markers:true,
        trigger: '#player',
        start: '60% 80%',
        end: '80% 80%',
        opacity: 1,
        scrub: 1.5,
        toggleActions: 'play reverse play reverse',
        once: true,
    },
})

// testimonial

gsap.from('#testimonailContent', {
    z: 500,
    opacity: 0,
    stagger: 0.3,
    delay: 0.5,
    scrollTrigger: {
        // markers:true,
        trigger: '#testimonial',
        start: '20% 80%',
        end: '40% 80%',
        opacity: 1,
        scrub: 1.5,
        toggleActions: 'play reverse play reverse',
        once: true,
    },
})

// price

gsap.from('#priceInfo', {
    y: 200,
    opacity: 0,
    stagger: 0.3,
    delay: 0.5,
    scrollTrigger: {
        // markers:true,
        trigger: '#priceSection',
        start: 'top 80%',
        end: '30% 80%',
        opacity: 1,
        scrub: 1.5,
        toggleActions: 'play reverse play reverse',
        // once: true,
    },
})
gsap.from('#priceCard', {
    y: 200,
    opacity: 0,
    stagger: 0.3,
    delay: 0.5,
    scrollTrigger: {
        // markers:true,
        trigger: '#priceSection',
        start: '35% 80%',
        end: '45% 80%',
        opacity: 0.8,
        scrub: 1.5,
        toggleActions: 'play reverse play reverse',
        once: true,
    },
})

// partners

gsap.from('#partnersInfo', {
    y: 200,
    opacity: 0,
    stagger: 0.3,
    delay: 0.5,
    scrollTrigger: {
        // markers:true,
        trigger: '#partners',
        start: '20% 80%',
        end: '35% 80%',
        opacity: 0.8,
        scrub: 1.5,
        toggleActions: 'play reverse play reverse',
        once: true,
    },
})
gsap.from('#partnersLogo', {
    y: 200,
    opacity: 0,
    stagger: 0.3,
    delay: 0.5,
    scrollTrigger: {
        // markers:true,
        trigger: '#partners',
        start: '45% 80%',
        end: '60% 80%',
        opacity: 0.8,
        scrub: 1.5,
        toggleActions: 'play reverse play reverse',
        once: true,
    },
})

// articles

gsap.from('#articlesHeader', {
    y: 200,
    opacity: 0,
    stagger: 0.3,
    delay: 0.5,
    scrollTrigger: {
        // markers:true,
        trigger: '#articles',
        start: '20% 80%',
        end: '35% 80%',
        opacity: 0.8,
        scrub: 1.5,
        toggleActions: 'play reverse play reverse',
        once: true,
    },
})

gsap.from('#sliderWrapper', {
    x: -100,
    opacity: 0,
    stagger: 0.3,
    delay: 0.5,
    scrollTrigger: {
        // markers:true,
        trigger: '#articles',
        start: '30% 80%',
        end: '65% 80%',
        opacity: 0.8,
        scrub: 1.5,
        toggleActions: 'play reverse play reverse',
        once: true,
    },
})

gsap.from('#products', {
    x: 100,
    opacity: 0,
    stagger: 0.3,
    delay: 0.5,
    scrollTrigger: {
        // markers:true,
        trigger: '#articles',
        start: '30% 80%',
        end: '65% 80%',
        opacity: 0.8,
        scrub: 1.5,
        toggleActions: 'play reverse play reverse',
        once: true,
    },
})

// footer

gsap.from('#subscribe', {
    y: 100,
    opacity: 0,
    stagger: 0.3,
    delay: 0.5,
    scrollTrigger: {
        // markers:true,
        trigger: '#subscribe',
        start: '-15% 80%',
        end: 'bottom 80%',
        opacity: 0.8,
        scrub: 1.5,
        toggleActions: 'play reverse play reverse',
        once: true,
    },
})

gsap.from('#footerContent', {
    y: 100,
    opacity: 0,
    stagger: 0.3,
    delay: 0.5,
    scrollTrigger: {
        // markers:true,
        trigger: '#footer',
        start: 'top 80%',
        end: '48% 80%',
        opacity: 0.8,
        scrub: 1.5,
        toggleActions: 'play reverse play reverse',
        once: true,
    },
})
