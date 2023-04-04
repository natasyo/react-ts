// @flow
import * as React from 'react';
import './FormComponents.scss';
import { ChangeEvent, forwardRef, useState } from 'react';

type Props = {
  labelText: string;
  items: Array<{ text: string; value: string }>;
};

export const Select = forwardRef<HTMLSelectElement, Props>((props, ref) => {
  const [value, setValue] = useState(props.items[0].value);

  function changeValue(event: ChangeEvent<HTMLSelectElement>) {
    setValue(event.target.value);
  }
  return (
    <>
      <label className="form-filed">
        <span className={'form-filed__label'}>{props.labelText}</span>
        <select
          className={'form-filed__input'}
          ref={ref}
          onChange={changeValue}
          required={true}
          value={value}
        >
          {props.items.map((item) => (
            <option value={item.value} key={item.value}>
              {item.text}
            </option>
          ))}
        </select>
      </label>
    </>
  );
});
