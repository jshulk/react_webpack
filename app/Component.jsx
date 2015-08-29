'use strict';
var React = require("react");


module.exports = React.createClass({
	getDefaultProps: function(){
		return {count: 15}
	},
	render: function(){
		return (
			<div className="component-wrapper">
				<h1>Hello World</h1>
				<h2>{this.props.count}</h2>
			</div>
		);
	}
});