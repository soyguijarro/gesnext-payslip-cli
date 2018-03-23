const { Spinner } = require('cli-spinner');
const { log, processing, success, failure } = require('./logger');

const SPINNER_INDEX = 18;

const run = async (name, fn) => {
  const spinner = new Spinner(processing(name));
  spinner.setSpinnerString(SPINNER_INDEX);
  spinner.start();

  try {
    const result = await fn();

    spinner.stop(true);
    log(success(name));

    return result;
  } catch (error) {
    spinner.stop(true);
    log(failure(name));

    throw error;
  }
};

module.exports = { run };
