/**
 * Returns an object containing the message descriptors from the `formatMessage` function calls in the file contents.
 *
 * @param contents The file contents to search.
 */
export function parseFunctions(contents) {
  const messages = {};

  const functionPattern = /formatMessage\({\r?\n?((?:.|\r?\n)*?)}\)/gm;
  const matches = contents.match(functionPattern);

  if (!matches) {
    return messages;
  }

  matches.forEach(match => {
    const messageDescriptor = extractFunctionMessageDescriptor(match);

    const {
      id: messageId,
      ...message
    } = messageDescriptor;

    messages[messageId] = message;
  });

  return messages;
}

/**
 * Returns the message descriptor for the `formatMessage` function text.
 *
 * @param functionText The text of the function.
 */
function extractFunctionMessageDescriptor(functionText) {
  return {
    id: extractFunctionID(functionText),
    defaultMessage: extractFunctionDefaultMessage(functionText),
    values: extractFunctionValues(functionText),
    description: extractFunctionDescription(functionText)
  };
}

/**
 * Returns the ID for the `formatMessage` function text.
 *
 * @param functionText The text of the function.
 */
function extractFunctionID(functionText) {
  try {
    const pattern = /id:\s?(?:'|"|`)([^'"`]*)(?:'|"|`)/gm;
    const match = pattern.exec(functionText);

    return match[1];
  } catch (err) {
    return '';
  }
}

/**
 * Returns the default message for the `formatMessage` function text.
 *
 * @param functionText The text of the function.
 */
function extractFunctionDefaultMessage(functionText) {
  try {
    const pattern = /defaultMessage:\s?(?:'|"|`)(.*)(?:'|"|`)/gm;
    const match = pattern.exec(functionText);

    return match[1];
  } catch (err) {
    return '';
  }
}
/**
 * Returns the values object for the `formatMessage` function text.
 *
 * @param functionText The text of the function.
 */
function extractFunctionValues(functionText) {
  try {
    const pattern = /values:\s?{(.*)}/gm;
    const match = pattern.exec(functionText);

    return match[1];
  } catch (err) {
    return {};
  }
}

/**
 * Returns the description for the `formatMessage` function text.
 *
 * @param functionText The text of the function.
 */
function extractFunctionDescription(functionText) {
  try {
    const pattern = /description:\s?(?:'|"|`)(.*)(?:'|"|`)/gm;
    const match = pattern.exec(functionText);

    return match[1];
  } catch (err) {
    return '';
  }
}
