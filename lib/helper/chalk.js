/* eslint-disable import/no-commonjs */
/* eslint-disable import/unambiguous */

import chalk from 'chalk';

// Forcing chalk to be enabled so we don't have to do it every time we require Chalk
chalk.enabled = true;
chalk.level = 1;

export { chalk };
