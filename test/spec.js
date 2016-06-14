import chai, { expect } from 'chai'
import chaiAsPromised from 'chai-as-promised';
import path from 'path';
import { extractIntl } from '../src/lib';

chai.use(chaiAsPromised);

describe('extract-intl', () => {
  describe('FormattedMessage', () => {
    it('should extract a message', () => {
      const fixturesPath = path.join(__dirname, '/fixtures/formatted-message/simple.jsx');

      return expect(extractIntl(fixturesPath)).to.eventually.deep.equal({
        'list_item.title': {
          defaultMessage: 'My List Item',
          values: {},
          description: ''
        }
      });
    });

    it('should extract values', () => {
      const fixturesPath = path.join(__dirname, '/fixtures/formatted-message/values.jsx');

      return expect(extractIntl(fixturesPath)).to.eventually.deep.equal({
        'list_item.title': {
          defaultMessage: 'My {adjective} List Item',
          values: {},
          description: ''
        }
      });
    });

    it('should extract multiple messages', () => {
      const fixturesPath = path.join(__dirname, '/fixtures/formatted-message/multiple.jsx');

      return expect(extractIntl(fixturesPath)).to.eventually.deep.equal({
        'list_item.title': {
          defaultMessage: 'My List Item',
          values: {},
          description: ''
        },
        'list_item.body': {
          defaultMessage: 'This is my body text.',
          values: {},
          description: ''
        }
      });
    });
  });

  describe('formatMessage', () => {
    it('should extract a message', () => {
      const fixturesPath = path.join(__dirname, '/fixtures/format-message/simple.jsx');

      return expect(extractIntl(fixturesPath)).to.eventually.deep.equal({
        'footer.text': {
          defaultMessage: 'Copyright (c) 2016',
          values: {},
          description: ''
        }
      });
    });

    it('should extract values', () => {
      const fixturesPath = path.join(__dirname, '/fixtures/format-message/values.jsx');
      return expect(extractIntl(fixturesPath)).to.eventually.deep.equal({
        'footer.text': {
          defaultMessage: 'Copyright (c) {year}',
          values: {},
          description: ''
        }
      });
    });

    it('should extract multiple messages', () => {
      const fixturesPath = path.join(__dirname, '/fixtures/format-message/multiple.jsx');
      return expect(extractIntl(fixturesPath)).to.eventually.deep.equal({
        'footer.title': {
          defaultMessage: 'Why does a footer need a title?',
          values: {},
          description: ''
        },
        'footer.text': {
          defaultMessage: 'Copyright (c) 2016',
          values: {},
          description: ''
        }
      });
    });

    xit('should extract from multiple files', () => {
      const fixturesPaths = [
        path.join(__dirname, '/fixtures/format-message/simple.jsx'),
        path.join(__dirname, '/fixtures/format-message/values.jsx'),
      ];

      return expect(extractIntl(fixturesPaths)).to.eventually.deep.equal({

      });
    });
  });
});
