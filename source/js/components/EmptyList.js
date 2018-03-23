var React = require('react');

class EmptyList extends React.Component {

  render () {
      return (
          <div>
              There are no items in your list.
          </div>
      )
  }
}

module.exports = EmptyList;