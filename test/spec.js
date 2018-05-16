import path from 'path'
import { extractIntl } from '../src/lib'

describe('extract-intl', () => {
  describe('FormattedMessage', () => {
    it('should extract a message', () => {
      const fixturesPath = path.join(
        __dirname,
        '/fixtures/formatted-message/simple.jsx'
      )

      return expect(extractIntl(fixturesPath)).resolves.toMatchSnapshot()
    })

    it('should extract values', () => {
      const fixturesPath = path.join(
        __dirname,
        '/fixtures/formatted-message/values.jsx'
      )

      return expect(extractIntl(fixturesPath)).resolves.toMatchSnapshot()
    })

    it('should extract multiple messages', () => {
      const fixturesPath = path.join(
        __dirname,
        '/fixtures/formatted-message/multiple.jsx'
      )

      return expect(extractIntl(fixturesPath)).resolves.toMatchSnapshot()
    })

    it('should extract from multiple files', () => {
      const fixturesPaths = [
        path.join(__dirname, '/fixtures/formatted-message/a.jsx'),
        path.join(__dirname, '/fixtures/formatted-message/b.jsx')
      ]

      return expect(extractIntl(fixturesPaths)).resolves.toMatchSnapshot()
    })

    it('should handle other string literal formats', () => {
      const fixturesPath = path.join(
        __dirname,
        '/fixtures/formatted-message/string-literals.jsx'
      )

      return expect(extractIntl(fixturesPath)).resolves.toMatchSnapshot()
    })
  })

  describe('formatMessage', () => {
    it('should extract a message', () => {
      const fixturesPath = path.join(
        __dirname,
        '/fixtures/format-message/simple.jsx'
      )

      return expect(extractIntl(fixturesPath)).resolves.toMatchSnapshot()
    })

    it('should extract values', () => {
      const fixturesPath = path.join(
        __dirname,
        '/fixtures/format-message/values.jsx'
      )
      return expect(extractIntl(fixturesPath)).resolves.toMatchSnapshot()
    })

    it('should extract multiple messages', () => {
      const fixturesPath = path.join(
        __dirname,
        '/fixtures/format-message/multiple.jsx'
      )
      return expect(extractIntl(fixturesPath)).resolves.toMatchSnapshot()
    })

    it('should extract from multiple files', () => {
      const fixturesPaths = [
        path.join(__dirname, '/fixtures/format-message/a.jsx'),
        path.join(__dirname, '/fixtures/format-message/b.jsx')
      ]

      return expect(extractIntl(fixturesPaths)).resolves.toMatchSnapshot()
    })

    it('should handle properties in varying orders', () => {
      const fixturesPath = path.join(
        __dirname,
        '/fixtures/format-message/order.jsx'
      )

      return expect(extractIntl(fixturesPath)).resolves.toMatchSnapshot()
    })

    it('should handle other string literal formats', () => {
      const fixturesPath = path.join(
        __dirname,
        '/fixtures/format-message/string-literals.jsx'
      )

      return expect(extractIntl(fixturesPath)).resolves.toMatchSnapshot()
    })

    it('should handle weird formatting', () => {
      const fixturesPath = path.join(
        __dirname,
        '/fixtures/format-message/formatting.jsx'
      )

      return expect(extractIntl(fixturesPath)).resolves.toMatchSnapshot()
    })
  })
})
