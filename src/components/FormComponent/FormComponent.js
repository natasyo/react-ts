// @flow
import * as React from 'react';
import { TextBox } from '../ui/FormComponents/TextBox';
import { Select } from '../ui/FormComponents/Select';
import { createRef } from 'react';
import { FileLoad } from '../ui/FormComponents/FileLoad';
const data = [
    { text: 'Moscow', value: 'Moscow' },
    { text: 'Minsk', value: 'Minsk' },
    { text: 'Brest', value: 'Brest' },
];
export class FormComponent extends React.Component {
    name;
    date;
    city;
    avatar;
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            persons: this.props.persons,
        };
        this.sendForm = this.sendForm.bind(this);
        this.name = createRef();
        this.date = createRef();
        this.city = createRef();
        this.avatar = createRef();
    }
    render() {
        return (React.createElement("form", { className: 'form' },
            React.createElement(TextBox, { labelText: 'Name', value: this.state.name, placeholder: 'Name', type: 'text', ref: this.name }),
            React.createElement(TextBox, { labelText: 'Date', value: `${new Date().toLocaleDateString('fr-CA')}`, type: 'date', ref: this.date }),
            React.createElement(Select, { labelText: 'City', items: data, ref: this.city }),
            React.createElement(FileLoad, { ref: this.avatar }),
            React.createElement("button", { onClick: this.sendForm }, "Send")));
    }
    sendForm(event) {
        event.preventDefault();
        if (this.name.current?.getValue() &&
            this.date.current?.getValue() &&
            this.city.current?.getValue() &&
            this.avatar.current?.getFile()) {
            const person = {
                name: this.name.current?.getValue(),
                date: this.date.current?.getValue(),
                city: this.city.current?.getValue(),
                avatarUrl: '',
            };
            const reader = new FileReader();
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const thisComponent = this;
            reader.onloadend = function () {
                if (reader.result)
                    person.avatarUrl = reader.result;
                console.log(person.avatarUrl);
                thisComponent.state.persons.push(person);
                localStorage.setItem('persons', JSON.stringify(thisComponent.state.persons));
                thisComponent.props.onSendForm();
            };
            const files = this.avatar.current?.getFiles();
            if (files && files[0]) {
                reader.readAsDataURL(files[0]);
            }
        }
        else {
            console.log('Error');
        }
    }
}
