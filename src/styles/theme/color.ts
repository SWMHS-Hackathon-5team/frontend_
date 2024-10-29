export const color = {
  blue: '#3689FF',
  purple: '#B20CFF',
  mint: '#35C8DA',
  gradient: 'linear-gradient(90deg, #3689ff 0%, #b20cff 100%)',
} as const

export const { blue, purple, mint, gradient } = color

export type colorKeyOfType = keyof typeof color
