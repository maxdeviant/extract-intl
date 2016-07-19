import { parseComponents } from './component';
import { parseFunctions } from './function';

/**
 * Returns an object containing all of the translatable messages in the file contents.
 *
 * @param contents The file contents to search.
 */
export function parse(contents) {
  const componentMessages = parseComponents(contents);
  const functionMessages = parseFunctions(contents);

  const messages = Object.assign({}, componentMessages, functionMessages);

  return messages;
}
