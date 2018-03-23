var React = require('react');

class ListHeader extends React.Component{
  constructor(props) {
    super(props);
    this.state = {}
    // Bindings
      this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleSubmit (event) {
    event.preventDefault();

    this.props.removeAllListItems();
  }

  render () {
    var totalNumberOfListItems = this.props.totalNumberOfListItems;

    if (totalNumberOfListItems > 0) {
      return (
        <form onSubmit={this.handleSubmit} className="form-inline">
          {this.props.totalNumberOfListItems} {totalNumberOfListItems === 1 ? 'item' : 'items'}
          {' '}
          <button className="btn btn-xs btn-default" type="submit">Remove all</button>
        </form>
      );
    }

    return (<span>Shopping List</span>);
  }
}

module.exports = ListHeader;