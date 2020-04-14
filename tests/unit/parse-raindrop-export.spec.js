import { expect } from 'chai';

import parseRaindropExport from '@/lib/parse-raindrop-export.js';

describe('#parseRaindropExport', () => {
  it('is defined', () => {
    expect(parseRaindropExport).not.to.be.undefined;
  });

  it('is a function', () => {
    expect(parseRaindropExport).to.be.a('function');
  });
});
