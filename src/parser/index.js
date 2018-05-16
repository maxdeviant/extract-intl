import { parseComponents } from './component'
import { parseFunctions } from './function'

/**
 * Returns an object containing all of the translatable messages in the file contents.
 *
 * @param contents The file contents to search.
 */
export function parse(contents) {
  const messageDescriptors = [
    ...parseComponents(contents),
    ...parseFunctions(contents)
  ]

  const messages = {}
  const duplicates = []
  messageDescriptors.forEach(messageDescriptor => {
    const { id: messageId, ...message } = messageDescriptor
    if (messageId in messages) {
      duplicates.push(messageId)
    }
    messages[messageId] = message
  })

  return {
    messages,
    duplicates
  }
}
