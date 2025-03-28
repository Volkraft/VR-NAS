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
                // faq: resolve(__dirname, 'src/faq/faq.html'),
                // tnc: resolve(__dirname, 'src/t&c/t&c.html'),
                // policy: resolve(__dirname, 'src/policy/policy.html')
            }
        }
    }
})
