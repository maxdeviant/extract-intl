import path from 'path'
import extractIntl from '../src'

describe('extract-intl', () => {
  describe('FormattedMessage', () => {
    it('should extract a message', () => {
      const fixturesPath = path.join(
        __dirname,
        '/fixtures/formatted-message/simple.jsx'
      )

      return expect(extractIntl(fixturesPath)).resolves.toMatchSnapshot()
    })

    it('should extract nested messages', () => {
      const fixturesPath = path.join(
        __dirname,
        '/fixtures/formatted-message/nested.jsx'
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
})
