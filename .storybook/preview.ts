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
  },
  decorators: [...globalDecorators],
}

export default preview
