import {SortingOption} from '../const/const';
import {HotelType} from '../types/types';

const titles = ['день', 'дня', 'дней'] as const;
const MAX_RATING = 5;

export const createLabel = (number: number) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return `${titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]]}`;
};

export const convertRatingToPercent = (rating: number): string => `${Math.ceil((100 * Math.round(rating)) / MAX_RATING)}%`;

export const sortHotelsByAscendingPrice = (a: HotelType, b: HotelType) => a.priceAvg - b.priceAvg;
export const sortHotelsByDescendingPrice = (a: HotelType, b: HotelType) => b.priceAvg - a.priceAvg;

export const sortHotelsByAscendingRating = (a: HotelType, b: HotelType) => a.priceAvg - b.priceAvg;
export const sortHotelsByDescendingRating = (a: HotelType, b: HotelType) => b.priceAvg - a.priceAvg;

export const sortOffers = (hotels: HotelType[], currentSortType: string) => {
  switch (currentSortType) {
    case SortingOption.Default:
      return hotels;
    case SortingOption.AscendingPrice:
      return hotels.slice().sort(sortHotelsByAscendingPrice);
    case SortingOption.DescendingPrice:
      return hotels.slice().sort(sortHotelsByDescendingPrice);
    case SortingOption.AscendingRating:
      return hotels.slice().sort(sortHotelsByAscendingRating);
    case SortingOption.DescendingRating:
      return hotels.slice().sort(sortHotelsByDescendingRating);
    default:
      throw new Error(`${currentSortType} not exist`);
  }
};

export const switchButton = (button: string) => {
  switch (button) {
    case SortingOption.AscendingPrice:
      return SortingOption.DescendingPrice;
    case SortingOption.DescendingPrice:
      return SortingOption.AscendingPrice;
    case SortingOption.AscendingRating:
      return SortingOption.DescendingRating;
    case SortingOption.DescendingRating:
      return SortingOption.AscendingRating;
    default:
      throw new Error(`${button} not exist`);
  }
};
