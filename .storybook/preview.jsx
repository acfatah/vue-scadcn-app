import { withThemeByClassName } from '@storybook/addon-themes'

/* eslint-disable */
import { Controls, Description, Primary, Stories, Subtitle, Title } from '@storybook/blocks'
import React from 'react'
/* eslint-enable */

import '../src/styles/app.css'

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    backgrounds: { disable: true },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    options: {
      storySort: {
        order: [
          'Readme',
          'Foundation',
          ['Design Tokens', 'Colors'],
          'Graphic Elements',
          'Examples',
        ],
        locales: 'en-US',
      },
    },

    themes: {
      target: 'html',
    },

    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <Stories includePrimary={false} />
        </>
      ),
    },
  },

  decorators: [
    withThemeByClassName({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),

    // Decorator to apply bg-color to stories in dark mode
    (_) => {
      const body = document.querySelector('body')
      const stories = document.querySelectorAll('.docs-story')
      const THEME_CLASS = 'bg-background'

      body?.classList.add(THEME_CLASS)
      stories.forEach((element) => {
        element.classList.add(THEME_CLASS)
      })

      return { template: `<story/>` }
    },
  ],
}

export default preview