
import autoprefixer from 'autoprefixer';
import purgecssLib from '@fullhuman/postcss-purgecss';
const purgecss = purgecssLib.default;


export default {
  plugins: [
    autoprefixer,
    purgecss({
      content: [
        './*.html',
        './assets/js/**/*.js',
      ],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
       safelist: {
        standard: ['collapse', 'collapsing', 'show','active', 'modal-open', 'modal-static'],
        deep: [],
        greedy: []
      },
    }),
  ],
};