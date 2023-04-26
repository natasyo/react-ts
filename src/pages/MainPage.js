import React, { Component } from 'react';
import { CharactersComponent } from '../components/CharacterComponent/CharactersComponent';
class MainPage extends Component {
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: 'content' },
                React.createElement("div", { className: "container" },
                    React.createElement("h1", null, "Main page"),
                    React.createElement(CharactersComponent, null)))));
    }
}
export default MainPage;
