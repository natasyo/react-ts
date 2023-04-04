// @flow
import * as React from 'react';
import { ChangeEvent, forwardRef, useState } from 'react';
import './FormComponents.scss';

export type PropsTextBox = {
  labelText: string;
  value: string;
  placeholder?: string;
  type: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  getValue?: (value: string) => string;
  // ref: RefObject<HTMLInputElement>;
};
export const TextBox = forwardRef<HTMLInputElement, PropsTextBox>((props, ref) => {
  // const textInput = useRef<HTMLInputElement>(null);

  const [text, setText] = useState<string>(props.value || '');

  const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    if (props.onChange) {
      props.onChange(event);
    }
  };
  return (
    <>
      <label className="form-filed">
        <span className={'form-filed__label'}>{props.labelText}</span>
        <input
          type={props.type}
          value={text.toString()}
          placeholder={props.placeholder}
          onChange={changeValue}
          ref={ref}
        />
      </label>
    </>
  );
});

// import * as React from 'react';
// import './FormComponents.scss';
// import { ChangeEvent, createRef, RefObject } from 'react';
//
// type Props = {
//   labelText: string;
//   value: string;
//   placeholder?: string;
//   type: string;
//   onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
// };
// type State = {
//   value: string;
// };
//
// export class TextBox extends React.Component<Props, State> {
//   textInput: RefObject<HTMLInputElement>;
//   constructor(props: Props) {
//     super(props);
//     this.state = {
//       value: this.props.value,
//     };
//     this.textInput = createRef();
//     this.changeValue = this.changeValue.bind(this);
//     this.getValue = this.getValue.bind(this);
//   }
//   changeValue(e: ChangeEvent<HTMLInputElement>) {
//     this.setState({ value: e.target.value.toString() });
//     if (this.props.onChange) {
//       this.props.onChange(e);
//     }
//   }
//   getValue() {
//     return this.state.value;
//   }
//   render() {
//     return (
//       <>
//         <label className="form-filed">
//           <span className={'form-filed__label'}>{this.props.labelText}</span>
//           <input
//             type={this.props.type}
//             value={this.state.value.toString()}
//             placeholder={this.props.placeholder}
//             onChange={this.changeValue}
//             ref={this.textInput}
//           />
//         </label>
//       </>
//     );
//   }
// }
