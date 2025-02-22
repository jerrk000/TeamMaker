import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { SymbolWeight } from 'expo-symbols';
import React from 'react';
import { OpaqueColorValue, StyleProp, ViewStyle } from 'react-native';

// Add your SF Symbol to MaterialIcons mappings here.
const MATERIAL_ICONS_MAPPING = {
  // See MaterialIcons here: https://icons.expo.fyi
  // See SF Symbols in the SF Symbols app on Mac.
  'house.fill': 'home',
  'paperplane.fill': 'send',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
  'person.badge.plus': 'person-add',
} as Partial<
  Record<
    import('expo-symbols').SymbolViewProps['name'],
    React.ComponentProps<typeof MaterialIcons>['name']
  >
>;

// Add your SF Symbol to FontAwesome mappings here.
const FONT_AWESOME_MAPPING = {
  'house.fill': 'home',
  'paperplane.fill': 'paper-plane',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
} as Partial<
  Record<
    import('expo-symbols').SymbolViewProps['name'],
    React.ComponentProps<typeof FontAwesome>['name']
  >
>;

export type IconSymbolName = keyof typeof MATERIAL_ICONS_MAPPING;

/**
 * An icon component that uses native SFSymbols on iOS, and MaterialIcons or FontAwesome on Android and web. This ensures a consistent look across platforms, and optimal resource usage.
 *
 * Icon `name`s are based on SFSymbols and require manual mapping to MaterialIcons or FontAwesome.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
  iconSet = 'material', // Default to MaterialIcons
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<ViewStyle>;
  weight?: SymbolWeight;
  iconSet?: 'material' | 'fontawesome'; // Specify which icon set to use
}) {
  if (iconSet === 'fontawesome') {
    return <FontAwesome color={color} size={size} name={FONT_AWESOME_MAPPING[name]} style={style} />;
  }

  // Default to MaterialIcons
  return <MaterialIcons color={color} size={size} name={MATERIAL_ICONS_MAPPING[name]} style={style} />;
}