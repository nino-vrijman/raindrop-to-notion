import { expect } from 'chai';

import parseRaindropExport from '@/lib/parse-raindrop-export.js';

describe('#parseRaindropExport', () => {
  it('is defined', () => {
    expect(parseRaindropExport).not.to.be.undefined;
  });

  it('is a function', () => {
    expect(parseRaindropExport).to.be.a('function');
  });

  it('should return undefined when no string was supplied', () => {
    expect(parseRaindropExport()).to.be.undefined;
  });

  it('should return an object when a string was specified', () => {
    expect(parseRaindropExport('<html></html>')).to.be.a('object');
  });
});
