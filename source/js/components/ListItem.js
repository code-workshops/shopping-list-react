var React = require('react');
var ListItemDescription = require('./ListItemDescription');

class ListItem extends React.Component {
  constructor(props) {
      super(props);
      this.state = {};

      // Bindings
      this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault();

    var listItemId = this.props.item.id;

    this.props.removeListItem(listItemId);
  }

  render () {
    var item = this.props.item;
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          {item.quantity} x {item.name}
        </div>

        {item.description.length > 0 ? <ListItemDescription description={item.description} /> : ''}

        <div className="panel-footer">
          <form className="form-inline" onSubmit={this.handleSubmit}>
            <button type="submit" className="btn btn-default btn-xs">Remove</button>
          </form>
        </div>
      </div>
    );
  }
}

module.exports = ListItem;
