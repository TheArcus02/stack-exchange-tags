import * as React from 'react'

import { ThemeProvider } from '../src/providers/theme-provider'
import { Decorator } from '@storybook/react'

export const withThemeProvider: Decorator = (Story) => {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Story />
    </ThemeProvider>
  )
}

export const globalDecorators = [withThemeProvider]
