// @flow
import * as React from 'react';
import { TextBox } from '../ui/FormComponents/TextBox';
import { Select } from '../ui/FormComponents/Select';
import { createRef, MouseEvent, RefObject } from 'react';
import { FileLoad } from '../ui/FormComponents/FileLoad';
import { IPerson } from '../../types/iPerson';

type Props = {
  onSendForm: () => void;
  persons: IPerson[];
};
type State = {
  name: string;
  persons: IPerson[];
};

const data: Array<{ text: string; value: string }> = [
  { text: 'Moscow', value: 'Moscow' },
  { text: 'Minsk', value: 'Minsk' },
  { text: 'Brest', value: 'Brest' },
];
export class FormComponent extends React.Component<Props, State> {
  name: RefObject<TextBox>;
  date: RefObject<TextBox>;
  city: RefObject<Select>;
  avatar: RefObject<FileLoad>;

  constructor(props: Props) {
    super(props);
    this.state = {
      name: '',
      persons: this.props.persons,
    };
    this.sendForm = this.sendForm.bind(this);
    this.name = createRef<TextBox>();
    this.date = createRef<TextBox>();
    this.city = createRef<Select>();
    this.avatar = createRef<FileLoad>();
  }
  render() {
    return (
      <form className={'form'}>
        <TextBox
          labelText={'Name'}
          value={this.state.name}
          placeholder={'Name'}
          type={'text'}
          ref={this.name}
        />
        <TextBox
          labelText={'Date'}
          value={`${new Date().toLocaleDateString('fr-CA')}`}
          type={'date'}
          ref={this.date}
        />
        <Select labelText={'City'} items={data} ref={this.city} />
        <FileLoad ref={this.avatar} />
        <button onClick={this.sendForm}>Send</button>
      </form>
    );
  }
  sendForm(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    if (
      this.name.current?.getValue() &&
      this.date.current?.getValue() &&
      this.city.current?.getValue() &&
      this.avatar.current?.getFile()
    ) {
      const person: IPerson = {
        name: this.name.current?.getValue(),
        date: this.date.current?.getValue(),
        city: this.city.current?.getValue(),
        avatarUrl: '',
      };
      const reader = new FileReader();

      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const thisComponent: FormComponent = this;

      reader.onloadend = function () {
        if (reader.result) person.avatarUrl = reader.result;
        console.log(person.avatarUrl);
        thisComponent.state.persons.push(person);
        localStorage.setItem('persons', JSON.stringify(thisComponent.state.persons));
        thisComponent.props.onSendForm();
      };
      const files = this.avatar.current?.getFiles();
      if (files && files[0]) {
        reader.readAsDataURL(files[0]);
      }
    } else {
      console.log('Error');
    }
  }
}
