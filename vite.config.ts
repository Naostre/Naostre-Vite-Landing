import Unocss from 'unocss/vite'

import { presetUno, presetAttributify } from 'unocss'
import ViteFonts from 'vite-plugin-fonts'

import { resolve } from 'path'
import { defineConfig } from 'vite'

export default {
  plugins: [
    Unocss({
      theme: {
        colors: {
          main: "#ffff",
          alt: "#A9F1DF",
          theme: "#1EAE98",
          contrast: "#233E8B",
          accent: "#D36582",
        }
      },
      presets: [
        presetAttributify({ strict: true }),
        presetUno(),
        // ...custom presets
      ],
      rules: [
        ['dshadow', { "box-shadow": "0 0 10px 0px #2227" }]
      ]
    }),
    ViteFonts({
      google: {
        preconnect: true,
        families: [
          'Nunito',
          {
            name: 'Nunito',
            defer: true
          }
        ]
      },
    })
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'mentionsLegales/index.html')
      }
    }
  },
  server: {
    port: 3000
  },
  preview: {
    port: 5001
  }
}