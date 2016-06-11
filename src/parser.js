export function parse(contents) {
  const componentMessages = parseComponents(contents);
  // const functionMessages = parseFunctions(contents);

  const messages = Object.assign({}, componentMessages);

  return messages;
}

function parseComponents(contents) {
  const messages = {};

  const componentPattern = new RegExp('<FormattedMessage(.|\n)*\/>', 'gm');
  const matches = contents.match(componentPattern);

  matches.forEach(match => {
    const messageDescriptor = extractComponentMessageDescriptor(match);

    messages[messageDescriptor.id] = messageDescriptor.defaultMessage;
  });

  return messages;
}

function extractComponentMessageDescriptor(componentText) {
  return {
    id: extractComponentID(componentText),
    defaultMessage: extractComponentDefaultMessage(componentText),
    values: extractComponentValues(componentText),
    description: extractComponentDescription(componentText)
  };
}

function extractComponentID(componentText) {
  try {
    const pattern = new RegExp(`id='(.*)'`, 'gm');
    const match = pattern.exec(componentText);

    return match[1];
  } catch (err) {
    return '';
  }
}

function extractComponentDefaultMessage(componentText) {
  try {
    const pattern = new RegExp(`defaultMessage='(.*)'`, 'gm');
    const match = pattern.exec(componentText);

    return match[1];
  } catch (err) {
    return '';
  }
}

function extractComponentValues(componentText) {
  try {
    const pattern = new RegExp(`values={{(.*)}}`, 'gm');
    const match = pattern.exec(componentText);

    return match[1];
  } catch (err) {
    return '';
  }
}

function extractComponentDescription(componentText) {
  try {
    const pattern = new RegExp(`description='(.*)'`, 'gm');
    const match = pattern.exec(componentText);

    return match[1];
  } catch (err) {
    return '';
  }
}

function parseFunctions(contents) {
  const messages = {};

  const functionPattern = new RegExp('formatMessage\({(.|\n)*}\)', 'gm');
  const matches = contents.match(functionPattern);

  matches.forEach(match => {
    const messageDescriptor = extractFunctionMessageDescriptor(match);

    messages[messageDescriptor.id] = messageDescriptor.defaultMessage;
  });

  return messages;
}

function extractFunctionMessageDescriptor(componentText) {
  return {
    id: extractFunctionID(componentText),
    defaultMessage: extractFunctionDefaultMessage(componentText),
    values: extractFunctionValues(componentText),
    description: extractFunctionDescription(componentText)
  };
}

function extractFunctionID(componentText) {
  try {
    const pattern = new RegExp(`id:\s?'(.*)'`, 'gm');
    const match = pattern.exec(componentText);

    return match[1];
  } catch (err) {
    return '';
  }
}

function extractFunctionDefaultMessage(componentText) {
  try {
    const pattern = new RegExp(`defaultMessage:\s?'(.*)'`, 'gm');
    const match = pattern.exec(componentText);

    return match[1];
  } catch (err) {
    return '';
  }
}

function extractFunctionValues(componentText) {
  try {
    const pattern = new RegExp(`values:\s?{(.*)}`, 'gm');
    const match = pattern.exec(componentText);

    return match[1];
  } catch (err) {
    return '';
  }
}

function extractFunctionDescription(componentText) {
  try {
    const pattern = new RegExp(`description:\s?'(.*)'`, 'gm');
    const match = pattern.exec(componentText);

    return match[1];
  } catch (err) {
    return '';
  }
}
