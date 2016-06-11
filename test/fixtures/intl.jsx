import React from 'react';

export default class ListItem extends React.Component {
  getFooterText() {
    const { intl: { formatMessage } } = this.props;

    return formatMessage({
      id: 'list_item.footer_text',
      defaultMessage: 'Copyright (c) 2016'
    });
  }

  render() {
    const { primaryText } = this.props;

    return (
      <div>
        <h2>
          <FormattedMessage
            id='list_item.title'
            defaultMessage='Item: {primaryText}'
            values={{
              primaryText
            }} />
        </h2>
        <footer>
          {this.getFooterText()}
        </footer>
      </div>
    );
  }
}
