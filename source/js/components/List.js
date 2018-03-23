var React = require('react');
var ListItem = require('./ListItem');
var ListHeader = require('./ListHeader');
var EmptyList = require('./EmptyList');

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        // Bindings
        this.getListOfItemIds = this.getListOfItemIds.bind(this);
        this.getTotalNumberOfListItems = this.getTotalNumberOfListItems.bind(this);
        this.createListItemElements = this.createListItemElements.bind(this);
    }

  getListOfItemIds (items) {
    return Object.keys(items);
  }

  getTotalNumberOfListItems (items) {
    var totalNumberOfItems = 0;
    var item;

    this.getListOfItemIds(items).forEach(function (itemId) {
      item = items[itemId];
      totalNumberOfItems = totalNumberOfItems + parseInt(item.quantity, 10);
    });

    return totalNumberOfItems;
  }

  createListItemElements (items) {
    var item;

    return (
      this
      .getListOfItemIds(items)
      .map(function createListItemElement(itemId) {
        item = items[itemId];
        return (<ListItem item={item} removeListItem={this.props.removeListItem} key={item.id} />);
      }.bind(this))
      .reverse()
    );
  }

  render () {
    var items = this.props.items;
    var listItemElements = this.createListItemElements(items);

    return (
      <div>
        <h3 className="page-header">

          <ListHeader totalNumberOfListItems={this.getTotalNumberOfListItems(items)} removeAllListItems={this.props.removeAllListItems} />

        </h3>
        <ul>

          {listItemElements.length > 0 ? listItemElements : <EmptyList />}

        </ul>
      </div>
    );
  }
}

module.exports = List;
