import { createTamagui } from 'tamagui'
import { custom_themes } from './constants/themes'
import { defaultConfig } from '@tamagui/config/v4'

export const tamaguiConfig = createTamagui({
  custom_themes,
  ...defaultConfig,
})


export default tamaguiConfig

export type Conf = typeof tamaguiConfig

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}