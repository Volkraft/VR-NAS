import { defineConfig } from 'vite'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    'base': "./",
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'src/about-us/about-us.html'),
                service: resolve(__dirname, 'src/service/service.html'),
                price: resolve(__dirname, 'src/price/price.html'),
                detail: resolve(__dirname, 'src/detail/detail.html'),
                team: resolve(__dirname, 'src/team/team.html'),
                faq: resolve(__dirname, 'src/faq/faq.html'),
                tnc: resolve(__dirname, 'src/t&c/t&c.html'),
                policy: resolve(__dirname, 'src/policy/policy.html'),
                articles: resolve(__dirname, 'src/articles/articles.html'),
                notFound: resolve(__dirname, 'src/404/404.html')
            }
        }
    },
    server: {
        proxy: {
            '/api': {
                target: 'http://your-backend-server.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    }
})
