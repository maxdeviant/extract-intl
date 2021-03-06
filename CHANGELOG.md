# Changelog

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [3.1.0] - 2019-05-06

### Fixed

- Fixed parsing of prop spreading ([#5](https://github.com/maxdeviant/extract-intl/issues/5))
- Fixed parsing of newer TypeScript constructs ([#6](https://github.com/maxdeviant/extract-intl/issues/6))

## [3.0.1] - 2018-10-08

### Added

- Added the ability to specify parser options.

## [3.0.0] - 2018-10-08

### Changed

- Use `@babel/parser` instead of regular expressions.

### Removed

- Removed CLI.
- Removed support for extracting `formatMessage`.

### Fixed

- Fixed parsing of nested `<FormattedMessage />`s.

## [2.0.0] - 2017-03-16

### Removed

- Remove newline detection in `<FormattedMessage />`.

## [1.0.0] - 2017-03-16

### Added

- Return the list of duplicated message IDs.

## [0.0.4] - 2016-08-09

### Added

- Detect newlines in `<FormattedMessage />`.

## [0.0.3] - 2016-07-21

### Fixed

- Support newlines on Windows.

## [0.0.2] - 2016-07-18

### Added

- Added Changelog.

### Fixed

- Updated files distributed on npm.

## [0.0.1] - 2016-06-14

### Added

- Initial release.

[3.1.0]: https://github.com/maxdeviant/extract-intl/compare/v3.0.1...v3.1.0
[3.0.1]: https://github.com/maxdeviant/extract-intl/compare/v3.0.0...v3.0.1
[3.0.0]: https://github.com/maxdeviant/extract-intl/compare/v2.0.0...v3.0.0
[2.0.0]: https://github.com/maxdeviant/extract-intl/compare/v1.0.0...v2.0.0
[1.0.0]: https://github.com/maxdeviant/extract-intl/compare/v0.0.4...v1.0.0
[0.0.4]: https://github.com/maxdeviant/extract-intl/compare/v0.0.3...v0.0.4
[0.0.3]: https://github.com/maxdeviant/extract-intl/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/maxdeviant/extract-intl/compare/v0.0.1...v0.0.2
[0.0.1]: https://github.com/maxdeviant/extract-intl/compare/920bddb...v0.0.1
