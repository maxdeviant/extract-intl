import chai, { expect } from 'chai'
import chaiAsPromised from 'chai-as-promised';
import path from 'path';
import { extractIntl } from '../src/lib';

chai.use(chaiAsPromised);

describe('extract-intl', () => {
  describe('FormattedMessage', () => {
    it('can extract from <FormattedMessage />', () => {
      expect(extractIntl(path.join(__dirname, '/fixtures/intl.jsx'))).to.eventually.equal({});
      // const messages = extractIntl(path.join(__dirname, '/fixtures/intl.jsx'));
      //
      // console.log(messages);
    });
  });

  describe('formatMessage', () => {
    it('can extract from formatMessage()', () => {

    });
  });
});
