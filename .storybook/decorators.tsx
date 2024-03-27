import * as React from 'react'

import { ThemeProvider } from '../src/providers/theme-provider'

export const withThemeProvider = (Story) => {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Story />
    </ThemeProvider>
  )
}

export const globalDecorators = [withThemeProvider]
