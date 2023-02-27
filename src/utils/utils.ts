import {SortingOption, ToastType} from '../const/const';
import {HotelType} from '../types/types';
import {toast, Zoom} from 'react-toastify';

export const dayTitles = ['день', 'дня', 'дней'];
export const hotelsCountTitles = ['отель', 'отеля', 'отелей'];
const MAX_RATING = 5;

export const createLabel = (number: number, title: string[]) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return `${title[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]]}`;
};

export const convertRatingToPercent = (rating: number): string =>
  `${Math.ceil((100 * Math.round(rating)) / MAX_RATING)}%`;

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

type showNotifyPropsType = {
  type: string;
  message: string;
};

export const showNotify = (options: showNotifyPropsType) => {
  switch (options.type) {
    case ToastType.Error:
      toast.error(options.message, {
        toastId: 1,
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3500,
        transition: Zoom,
        pauseOnHover: false,
      });
      break;
    case ToastType.Warn:
      toast.warn(options.message, {
        toastId: 2,
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3500,
        transition: Zoom,
        pauseOnHover: false,
      });
      break;
    default:
      throw new Error(`toast type "${options.type}" not exist`);
  }
};

export const getDate = (checkIn: string) =>
  new Date(checkIn)
    .toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    .slice(0, -3);
