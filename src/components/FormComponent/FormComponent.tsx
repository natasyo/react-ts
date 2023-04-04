// @flow
import * as React from 'react';
import { IPerson } from '../../types/iPerson';
import { TextBox } from '../ui/FormComponents/TextBox';
import { Select } from '../ui/FormComponents/Select';
import { FileLoad } from '../ui/FormComponents/FileLoad';
import { MouseEvent, useRef, useState } from 'react';

type Props = {
  onSendForm: () => void;
  persons: IPerson[];
};

const data: Array<{ text: string; value: string }> = [
  { text: 'Moscow', value: 'Moscow' },
  { text: 'Minsk', value: 'Minsk' },
  { text: 'Brest', value: 'Brest' },
];

export function FormComponent(props: Props) {
  const nameRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLSelectElement>(null);
  const avatarRef = useRef<HTMLInputElement>(null);

  const [name] = useState<string>('');
  const [date] = useState<string>(new Date().toLocaleDateString('fr-CA'));
  const [persons] = useState<IPerson[]>([]);

  function sendForm(event: MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    if (
      nameRef.current?.value &&
      dateRef.current?.value &&
      cityRef.current?.value &&
      avatarRef.current?.value
    ) {
      console.log(avatarRef.current.value);
      const person: IPerson = {
        name: nameRef.current.value,
        date: dateRef.current.value,
        city: cityRef.current.value,
        avatarUrl: '',
      };
      const reader = new FileReader();

      reader.onloadend = function () {
        if (reader.result) person.avatarUrl = reader.result;
        console.log(person.avatarUrl);
        persons.push(person);
        localStorage.setItem('persons', JSON.stringify(persons));
        props.onSendForm();
      };
      const files = avatarRef.current.files;
      if (files && files[0]) {
        reader.readAsDataURL(files[0]);
      }
    } else {
      console.log('Error');
    }
  }

  return (
    <form className={'form'}>
      <TextBox labelText={'Name'} value={name} placeholder={'Name'} type={'text'} ref={nameRef} />
      <TextBox labelText={'Date'} value={date} type={'date'} ref={dateRef} />
      <Select labelText={'City'} items={data} ref={cityRef} />
      <FileLoad ref={avatarRef} />
      <button onClick={sendForm}>Send</button>
    </form>
  );
}
