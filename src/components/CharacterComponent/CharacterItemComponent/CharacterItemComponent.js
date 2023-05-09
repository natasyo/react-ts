// @flow
import * as React from 'react';
export const CharacterItemComponent = (props) => {
    return (React.createElement("div", { className: 'character__item' },
        React.createElement("div", { className: "character__image" },
            React.createElement("img", { src: props.character.image, alt: props.character.name })),
        React.createElement("div", { className: "character__info" },
            React.createElement("p", { className: 'character__name' }, props.character.name),
            React.createElement("div", { className: 'character__info-more' },
                React.createElement("p", null,
                    "Location: ",
                    props.character.location.name),
                React.createElement("p", null,
                    "Created: ",
                    props.character.created.toLocaleString())))));
};
