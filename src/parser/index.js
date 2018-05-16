import md5 from 'md5'
import { basename, extname } from 'path'
import { parseComponents } from './component'
import { parseFunctions } from './function'

/**
 * Returns an object containing all of the translatable messages in the file contents.
 *
 * @param filepath The path to the file.
 * @param contents The file contents to search.
 */
export function parse(filepath, contents) {
  const filehash = md5(filepath).slice(0, 7)
  const filename = basename(filepath, extname(filepath))
  const messageDescriptors = [
    ...parseComponents(contents),
    ...parseFunctions(contents)
  ]

  const messages = {}
  const duplicates = []
  messageDescriptors.forEach((messageDescriptor, index) => {
    const messageId = `${filehash}.${filename}.${index + 1}`
    if (messageId in messages) {
      duplicates.push(messageId)
    }
    messages[messageId] = messageDescriptor
  })

  return {
    messages,
    duplicates
  }
}
