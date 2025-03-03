import { createThemes, defaultComponentThemes } from '@tamagui/theme-builder'
import * as Colors from '@tamagui/colors'

const darkPalette = ['hsla(41, 74%, 1%, 1)','hsla(40, 70%, 12%, 1)','hsla(41, 64%, 21%, 1)','hsla(41, 59%, 29%, 1)','hsla(41, 56%, 36%, 1)','hsla(41, 53%, 42%, 1)','hsla(41, 51%, 46%, 1)','hsla(41, 50%, 48%, 1)','hsla(41, 49%, 50%, 1)','hsla(41, 49%, 50%, 1)','hsla(0, 15%, 93%, 1)','hsla(0, 15%, 99%, 1)']
const lightPalette = ['hsla(41, 74%, 100%, 1)','hsla(41, 59%, 96%, 1)','hsla(45, 74%, 54%, 1)','hsla(43, 62%, 48%, 1)','hsla(42, 62%, 53%, 1)','hsla(0, 55%, 51%, 1)','hsla(0, 51%, 50%, 1)','hsla(21, 57%, 49%, 1)','hsla(43, 62%, 48%, 1)','hsla(41, 49%, 50%, 1)','hsla(0, 15%, 15%, 1)','hsla(0, 15%, 1%, 1)']

const lightShadows = {
  shadow1: 'rgba(0,0,0,0.04)',
  shadow2: 'rgba(0,0,0,0.08)',
  shadow3: 'rgba(0,0,0,0.16)',
  shadow4: 'rgba(0,0,0,0.24)',
  shadow5: 'rgba(0,0,0,0.32)',
  shadow6: 'rgba(0,0,0,0.4)',
}

const darkShadows = {
  shadow1: 'rgba(0,0,0,0.2)',
  shadow2: 'rgba(0,0,0,0.3)',
  shadow3: 'rgba(0,0,0,0.4)',
  shadow4: 'rgba(0,0,0,0.5)',
  shadow5: 'rgba(0,0,0,0.6)',
  shadow6: 'rgba(0,0,0,0.7)',
}

// we're adding some example sub-themes for you to show how they are done, "success" "warning", "error":

const builtThemes = createThemes({
  componentThemes: defaultComponentThemes,

  base: {
    palette: {
      dark: darkPalette,
      light: lightPalette,
    },

    extra: {
      light: {
        ...Colors.green,
        ...Colors.red,
        ...Colors.yellow,
        ...lightShadows,
        shadowColor: lightShadows.shadow1,
      },
      dark: {
        ...Colors.greenDark,
        ...Colors.redDark,
        ...Colors.yellowDark,
        ...darkShadows,
        shadowColor: darkShadows.shadow1,
      },
    },
  },

  accent: {
    palette: {
      dark: ['hsla(235, 85%, 35%, 1)','hsla(235, 85%, 38%, 1)','hsla(235, 85%, 41%, 1)','hsla(235, 85%, 43%, 1)','hsla(235, 85%, 46%, 1)','hsla(235, 85%, 49%, 1)','hsla(235, 85%, 52%, 1)','hsla(235, 85%, 54%, 1)','hsla(235, 85%, 57%, 1)','hsla(235, 85%, 60%, 1)','hsla(0, 20%, 90%, 1)','hsla(0, 20%, 95%, 1)'],
      light: ['hsla(235, 85%, 50%, 1)','hsla(235, 85%, 52%, 1)','hsla(235, 85%, 53%, 1)','hsla(235, 85%, 55%, 1)','hsla(235, 85%, 57%, 1)','hsla(235, 85%, 58%, 1)','hsla(235, 85%, 60%, 1)','hsla(235, 85%, 62%, 1)','hsla(235, 85%, 63%, 1)','hsla(235, 85%, 65%, 1)','hsla(0, 20%, 99%, 1)','hsla(0, 20%, 99%, 1)'],
    },
  },

  childrenThemes: {
    warning: {
      palette: {
        dark: Object.values(Colors.yellowDark),
        light: Object.values(Colors.yellow),
      },
    },

    error: {
      palette: {
        dark: Object.values(Colors.redDark),
        light: Object.values(Colors.red),
      },
    },

    success: {
      palette: {
        dark: Object.values(Colors.greenDark),
        light: Object.values(Colors.green),
      },
    },
  },

  // optionally add more, can pass palette or template

  // grandChildrenThemes: {
  //   alt1: {
  //     template: 'alt1',
  //   },
  //   alt2: {
  //     template: 'alt2',
  //   },
  //   surface1: {
  //     template: 'surface1',
  //   },
  //   surface2: {
  //     template: 'surface2',
  //   },
  //   surface3: {
  //     template: 'surface3',
  //   },
  // },
})

export type Themes = typeof builtThemes

// the process.env conditional here is optional but saves web client-side bundle
// size by leaving out themes JS. tamagui automatically hydrates themes from CSS
// back into JS for you, and the bundler plugins set TAMAGUI_ENVIRONMENT. so
// long as you are using the Vite, Next, Webpack plugins this should just work,
// but if not you can just export builtThemes directly as themes:
export const custom_themes: Themes =
  process.env.TAMAGUI_ENVIRONMENT === 'client' &&
  process.env.NODE_ENV === 'production'
    ? ({} as any)
    : (builtThemes as any)
