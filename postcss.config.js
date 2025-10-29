import postcssImport from 'postcss-import'
import postcssFlexbugsFixes from 'postcss-flexbugs-fixes'
import tailwindcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'
import postcssPresetEnv from 'postcss-preset-env'

export default {
  plugins: [
    postcssImport(),
    postcssFlexbugsFixes(),
    tailwindcss(),
    autoprefixer(),
    postcssPresetEnv({
      autoprefixer: { flexbox: 'no-2009' },
      stage: 3,
    }),
  ],
}