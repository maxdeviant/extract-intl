import EOL from '../eol';

/**
 * Returns an object containing the message descriptors from the `<FormattedMessage />` component instance in the file contents.
 *
 * @param contents The file contents to search.
 */
export function parseComponents(contents) {
  const messages = {};

  const componentPattern = /<FormattedMessage(.|\r?\n)*?\/>/gm;
  const matches = contents.match(componentPattern);

  if (!matches) {
    return messages;
  }

  matches.forEach(match => {
    const messageDescriptor = extractComponentMessageDescriptor(match);

    const {
      id: messageId,
      ...message
    } = messageDescriptor;

messages[messageId] = message;
  });

return messages;
}

/**
 * Returns the message descriptor for the `<FormattedMessage />` component text.
 *
 * @param componentText The text of the component.
 */
function extractComponentMessageDescriptor(componentText) {
  return {
    id: extractComponentID(componentText),
    defaultMessage: extractComponentDefaultMessage(componentText),
    values: extractComponentValues(componentText),
    description: extractComponentDescription(componentText)
  };
}

/**
 * Returns the ID for the `<FormattedMessage />` component text.
 *
 * @param componentText The text of the component.
 */
function extractComponentID(componentText) {
  try {
    const pattern = /id=\{?(?:'|"|`)([^'"`]*)(?:'|"|`)\}?/gm;
    const match = pattern.exec(componentText);

    return match[1];
  } catch (err) {
    return '';
  }
}

/**
 * Returns the default message for the `<FormattedMessage />` component text.
 *
 * @param componentText The text of the component.
 */
function extractComponentDefaultMessage(componentText) {
  try {
    const pattern = /defaultMessage=\{?(?:\s)*(?:'|"|`)((?:.|\r?\n)*)(?:'|"|`)\}?/gm;
    const match = pattern.exec(componentText);

    return sanitizeDefaultMessage(match[1]);
  } catch (err) {
    return '';
  }
}

/**
 * Returns the default message after it has been sanitized.
 *
 * @param defaultMessage The default message to sanitize.
 */
function sanitizeDefaultMessage(defaultMessage) {
  return defaultMessage
    .split(EOL)
    .map(part => part.trim())
    .filter(part => !!part)
    .join(' ');
}

/**
 * Returns the values object for the `<FormattedMessage />` component text.
 *
 * @param componentText The text of the component.
 */
function extractComponentValues(componentText) {
  try {
    const pattern = /values={{(.*)}}/gm;
    const match = pattern.exec(componentText);

    return match[1];
  } catch (err) {
    return {};
  }
}

/**
 * Returns the description for the `<FormattedMessage />` component text.
 *
 * @param componentText The text of the component.
 */
function extractComponentDescription(componentText) {
  try {
    const pattern = /description=\{?(?:'|"|`)(.*)(?:'|"|`)\}?/gm;
    const match = pattern.exec(componentText);

    return match[1];
  } catch (err) {
    return '';
  }
}
