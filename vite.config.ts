import Unocss from 'unocss/vite'

import { presetUno, presetAttributify } from 'unocss'

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
    })
  ]
}