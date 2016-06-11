import chai, { expect } from 'chai'
import chaiAsPromised from 'chai-as-promised';
import path from 'path';
import { extractIntl } from '../src/lib';

chai.use(chaiAsPromised);

describe('extract-intl', () => {
  describe('FormattedMessage', () => {
    it('can extract from <FormattedMessage />', () => {
      const fixturesPath = path.join(__dirname, '/fixtures/intl.jsx');

      return expect(extractIntl(fixturesPath)).to.eventually.deep.equal({
        'list_item.title': 'Item: {primaryText}'
      });
    });
  });

  describe('formatMessage', () => {
    it('can extract from formatMessage()', () => {

    });
  });
});
