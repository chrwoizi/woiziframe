export const sharedEnvironment = {
  /**
   * maximum percentage of the image width or height that may be cropped if the image ratio differs from the viewport ratio (between 0 and 1)
   */
  maxCrop: 0.34,

  weatherRefreshIntervalMinutes: 10,
  calendarRefreshIntervalMinutes: 10,
  garbageRefreshIntervalMinutes: 24 * 60,
  directionsRefreshIntervalMinutes: 10,

  locale: 'de',
  timezone: 'Europe/Berlin',

  yellowTrafficFactor: 1.1,
  redTrafficFactor: 1.2,

  showFullScreenButton: false,
  showCloseButton: true,
};
