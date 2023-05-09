import React, { Component } from 'react';
class NotFoundPage extends Component {
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: 'content' },
                React.createElement("div", { className: "container" },
                    React.createElement("h1", null, "404 page not found")))));
    }
}
// NotFoundPage.propTypes = {};
export default NotFoundPage;
