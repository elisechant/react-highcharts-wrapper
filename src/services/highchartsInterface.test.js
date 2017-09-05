
/* global it, describe, beforeEach */
import React from 'react';
import expect from 'expect';

import makeHigchartsService from './highchartsInterface';


describe('(Services) highchartsInterface - highchartsInterface', () => {

  let service;

  beforeEach(() => {
    service = makeHigchartsService({
      chart: () => {}
    })
  });

  it('should return an object with correct methods', () => {
    expect(service.create).toExist();
    expect(service.update).toExist();
    expect(service.destroy).toExist();
  });

  describe('create', () => {
    it.skip('should', () => {

    });
  });

  describe('update', () => {
    it.skip('should', () => {

    });
  });

  describe('destroy', () => {
    it.skip('should', () => {

    });
  });

});
