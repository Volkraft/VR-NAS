const validRoutes = [
    '/',
    '/index.html',
    '/src/about-us/about-us.html',
    '/src/service/service.html',
    '/src/price/price.html',
    '/src/detail/detail.html',
    '/src/team/team.html',
    '/src/faq/faq.html',
    '/src/t&c/t&c.html',
    '/src/policy/policy.html',
    '/src/articles/articles.html',
    '/src/articles/article.html',
]

const checkRoute = () => {
    const route = window.location.pathname
    // console.log(validRoutes.includes(route), route);
    if (!validRoutes.includes(route)) {
        window.location.href = '/src/404/404.html'
    }
}
window.addEventListener('load', checkRoute)

export default checkRoute
