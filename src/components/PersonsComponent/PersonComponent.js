// @flow
import * as React from 'react';
import './PersonsComponent.scss';
export class PersonComponent extends React.Component {
    render() {
        return (React.createElement("div", { className: 'person' },
            React.createElement("div", { className: "person__image" },
                React.createElement("img", { src: this.props.person.avatarUrl.toString(), alt: "" })),
            React.createElement("p", { className: "person__name" }, this.props.person.name),
            React.createElement("p", { className: "person__date" }, this.props.person.date.toString()),
            React.createElement("p", { className: "person__city" }, this.props.person.city)));
    }
}
