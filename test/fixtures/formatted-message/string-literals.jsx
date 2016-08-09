import React from 'react';
import { FormattedMessage } from 'react-intl';

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <h1>
          <FormattedMessage
            id={`footer.title`}
            defaultMessage={`This footer is bangin'`} />
        </h1>
        <FormattedMessage
          id='footer.subtitle'
          defaultMessage={
            `
            You have {messageCount, plural,
              one {# new message}
              other {# new messages}
            }!
            `
          } />
        <FormattedMessage
          id="footer.copyright"
          defaultMessage="Copyright (c) 2016" />
      </footer>
    );
  }
}
