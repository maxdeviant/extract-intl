export function parse(contents) {
  const componentMessages = parseComponents(contents);
  const functionMessages = parseFunctions(contents);

  const messages = Object.assign({}, componentMessages, functionMessages);

  return messages;
}

function parseComponents(contents) {
  const messages = {};

  const componentPattern = /<FormattedMessage(.|\n)*\/>/gm;
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
    const pattern = /id='(.*)'/gm;
    const match = pattern.exec(componentText);

    return match[1];
  } catch (err) {
    return '';
  }
}

function extractComponentDefaultMessage(componentText) {
  try {
    const pattern = /defaultMessage='(.*)'/gm;
    const match = pattern.exec(componentText);

    return match[1];
  } catch (err) {
    return '';
  }
}

function extractComponentValues(componentText) {
  try {
    const pattern = /values={{(.*)}}/gm;
    const match = pattern.exec(componentText);

    return match[1];
  } catch (err) {
    return {};
  }
}

function extractComponentDescription(componentText) {
  try {
    const pattern = /description='(.*)'/gm;
    const match = pattern.exec(componentText);

    return match[1];
  } catch (err) {
    return '';
  }
}

function parseFunctions(contents) {
  const messages = {};

  const functionPattern = /formatMessage\({\n?((?:.|\n)*)}\)/gm;
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
    const pattern = /id:\s?'(.*)'/gm;
    const match = pattern.exec(componentText);

    return match[1];
  } catch (err) {
    return '';
  }
}

function extractFunctionDefaultMessage(componentText) {
  try {
    const pattern = /defaultMessage:\s?'(.*)'/gm;
    const match = pattern.exec(componentText);

    return match[1];
  } catch (err) {
    return '';
  }
}

function extractFunctionValues(componentText) {
  try {
    const pattern = /values:\s?{(.*)}/gm;
    const match = pattern.exec(componentText);

    return match[1];
  } catch (err) {
    return {};
  }
}

function extractFunctionDescription(componentText) {
  try {
    const pattern = /description:\s?'(.*)'/gm;
    const match = pattern.exec(componentText);

    return match[1];
  } catch (err) {
    return '';
  }
}
