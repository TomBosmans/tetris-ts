type TimesFunction = (index: number) => any
export const times = (number: number, f: TimesFunction): any[] =>
  Array.from({ length: number }).map((_, i) => f(i))

export const sum = (array: number[]): number =>
  array.reduce((a: number, b: number) => a + b, 0)
