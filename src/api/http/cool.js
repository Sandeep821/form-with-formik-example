export const isCool = str =>
  new Promise(resolve => setTimeout(() => resolve(str), 1000))
