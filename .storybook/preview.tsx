import type { Preview } from '@storybook/react'

import '../src/index.css'
import { globalDecorators } from './decorators'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'light',
          value: '#f0f0f0',
        },
        {
          name: 'dark',
          value: '#020817',
        },
      ],
    },
  },
  decorators: [...globalDecorators],
}

export default preview
