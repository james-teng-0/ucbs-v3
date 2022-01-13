import {defineConfig} from 'vite'
import { resolve } from 'path'

module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about/about.html'),
                team: resolve(__dirname, 'team/team.html'),
                events: resolve(__dirname, 'events/events.html'),
                sponsors: resolve(__dirname, "sponsors/sponsors.html")
            }
        }
    }
})
