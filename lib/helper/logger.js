import { chalk } from './chalk';

const prefixes = {
  wait: chalk`[ {cyan wait} ] `,
  error: chalk`[ {red error} ]`,
  warn: chalk`[ {yellow warn} ] `,
  ready: chalk`[ {green ready} ]`,
  info: chalk`[ {cyan {dim info}} ] `,
  event: chalk`[ {magenta event} ]`,
};

export const logger = {
  /**
   * Log function with a colored wait prefix
   */
  wait: function logWait(...message) {
    console.log(prefixes.wait, ...message);
  },
  /**
   * Log function with a colored error prefix
   */
  error: function logError(...message) {
    console.error(prefixes.error, ...message);
  },
  /**
   * Log function with a colored warn prefix
   */
  warn: function logWarn(...message) {
    console.error(prefixes.warn, ...message);
  },
  /**
   * Log function with a colored ready prefix
   */
  ready: function logReady(...message) {
    console.log(prefixes.ready, ...message);
  },
  /**
   * Log function with a colored info prefix
   */
  info: function logInfo(...message) {
    console.log(prefixes.info, ...message);
  },
  /**
   * Log function with a colored event prefix
   */
  event: function logEvent(...message) {
    console.log(prefixes.event, ...message);
  },
  /**
   * Helper function to highlight part of a message
   */
  highlight: function highlight(message) {
    return chalk`{green ${message}}`;
  },
  /**
   * Helper function to highlight a time in a message
   */
  highlightTime: function highlightTime(message) {
    return chalk`{magenta ${message}}`;
  },
  highlightError: function highlightError(message) {
    return chalk`{red ${message}}`;
  },
};
