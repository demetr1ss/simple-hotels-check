const titles = ['день', 'дня', 'дней'] as const;
const MAX_RATING = 5;

export function createLabel(number: number) {
  const cases = [2, 0, 1, 1, 1, 2];
  return `${titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]]}`;
}

export function convertRatingToPercent(rating: number): string {
  return `${Math.ceil((100 * Math.round(rating)) / MAX_RATING)}%`;
}
