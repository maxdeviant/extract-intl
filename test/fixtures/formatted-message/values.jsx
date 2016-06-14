import React from 'react';

export default class ListItem extends React.Component {
  getAdjective() {
    return 'Awesome';
  }

  render() {
    return (
      <div>
        <h2>
          <FormattedMessage
            id='list_item.title'
            defaultMessage='My {adjective} List Item'
            values={{
              adjective: this.getAdjective()
            }}/>
        </h2>
      </div>
    );
  }
}
