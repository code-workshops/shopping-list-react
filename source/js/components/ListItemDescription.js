var React = require('react');

class ListItemDescription extends React.Component {
  constructor() {
      super();
      this.state = {}
  }

    render () {
      return (
            <div className="panel-body">
                {props.description}
            </div>
        );
    }
};

module.exports = ListItemDescription;