import * as parser from '@babel/parser'
import traverse from '@babel/traverse'

function isJSXElement(node) {
  return node.type === 'JSXElement'
}

function isFormattedMessage(node) {
  return (
    isJSXElement(node) && node.openingElement.name.name === 'FormattedMessage'
  )
}

function makeFindPropByName(propName) {
  return function findPropByName(jsxElementNode) {
    return jsxElementNode.openingElement.attributes.find(
      attr => attr.name.name === propName
    )
  }
}

function extractStringValue(propNode) {
  if (propNode.value.type === 'JSXExpressionContainer') {
    const expressionNode = propNode.value
    if (expressionNode.expression.type === 'TemplateLiteral') {
      return expressionNode.expression.quasis[0].value.raw
    }

    return expressionNode.expression.value
  }

  return propNode.value.value
}

function findId(formattedMessageNode) {
  const idNode = makeFindPropByName('id')(formattedMessageNode)
  if (!idNode) {
    return void 0
  }

  return extractStringValue(idNode)
}

function findDefaultMessage(formattedMessageNode) {
  const defaultMessageNode = makeFindPropByName('defaultMessage')(
    formattedMessageNode
  )
  if (!defaultMessageNode) {
    return void 0
  }

  return extractStringValue(defaultMessageNode)
}

function findDescription(formattedMessageNode) {
  const descriptionNode = makeFindPropByName('description')(
    formattedMessageNode
  )
  if (!descriptionNode) {
    return void 0
  }

  return extractStringValue(descriptionNode)
}

/**
 * Returns an array containing the message descriptors from the `<FormattedMessage />` component instance in the file contents.
 *
 * @param contents The file contents to search.
 */
export function parseComponents(contents) {
  const ast = parser.parse(contents, {
    sourceType: 'module',
    plugins: ['jsx']
  })

  const messages = []

  traverse(ast, {
    enter(path) {
      const { node } = path
      if (isFormattedMessage(node)) {
        messages.push({
          id: findId(node) || '',
          defaultMessage: findDefaultMessage(node) || '',
          values: {},
          description: findDescription(node) || ''
        })
      }
    }
  })

  return messages
}
