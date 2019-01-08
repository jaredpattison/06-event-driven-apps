'use strict';

// const events = require('../lib/events');
const logger = require('../lib/logger');

describe('logger', () => {

  it('throws an error on file-error with payload', () => {
    expect(() => {
      logger.err('platipus');
    }).toThrow();
  });

  it('ignores errors on file-error without payload', () => {
    expect(() => {
      logger.err();
    }).not.toThrow();
  });

  it('logs the payload on file-save', () => {
    let spy = jest.spyOn(console, 'log');
    logger.save('stuff');
    expect(spy).toHaveBeenCalledWith('File Saved, stuff');
    spy.mockRestore();
  });

  it('does not log the payload on file-save without payload', () => {
    let spy = jest.spyOn(console, 'log');
    logger.save();
    expect(spy).not.toHaveBeenCalledWith();
    spy.mockRestore();
  });

});