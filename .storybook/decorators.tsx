import * as React from 'react'

import { ThemeProvider } from '../src/providers/theme-provider'
import { Toaster } from '../src/components/ui/sonner/sonner'
import { Decorator } from '@storybook/react'

export const withThemeProvider: Decorator = (Story) => {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Story />
    </ThemeProvider>
  )
}

export const withToster: Decorator = (Story) => {
  return (
    <>
      <Story />
      <Toaster richColors closeButton />
    </>
  )
}

export const globalDecorators = [withThemeProvider, withToster]
