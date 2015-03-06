'use strict';

var React = require('react/addons');
var ExampleActions = require('../actions/ExampleActions');
var ExampleStore = require('../stores/ExampleStore');

module.exports = React.createClass({
  getInitialState: function () {
    return { example: ExampleStore.get() };
  },
  componentDidMount: function () {
    ExampleStore.addChangeListener(this._onChange);
    // Fetch init data
    ExampleActions.fetch();
  },
  componentWillUnmount: function() {
    ExampleStore.removeChangeListener(this._onChange);
  },
  _onChange: function () {
    this.setState({ example: ExampleStore.get() });
  },
  render: function () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Example</h1>
            <p className="example">{this.state.example}</p>
          </div>
        </div>
      </div>
    );
  }
});
