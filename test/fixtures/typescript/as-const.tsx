import React from 'react'
import { FormattedMessage } from 'react-intl'

const AsConst = () => {
  const message = 'const expr' as const

  return (
    <div>
      <h2>
        <FormattedMessage
          id="typescript.as_const.message"
          defaultMessage="x = {constExpr}"
          values={{
            constExpr: message
          }}
        />
      </h2>
    </div>
  )
}

export default AsConst
