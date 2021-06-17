import { secretEnvironment } from './environment.secret';

export const sharedEnvironment = {
  /**
   * maximum percentage of the image width or height that may be cropped if the image ratio differs from the viewport ratio (between 0 and 1)
   */
  maxCrop: 0.34,

  openWeatherApiKey: secretEnvironment.openWeatherApiKey,
  weatherRefreshIntervalMinutes: 10,

  locationLatitude: 52.477093,
  locationLongitude: 10.090432,

  locale: 'de',
};
