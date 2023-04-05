// @flow
import * as React from 'react';
import './FormComponents.scss';
import { ChangeEvent, forwardRef, useState } from 'react';

type Props = unknown;

export const FileLoad = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const [filename, setFilename] = useState('Select file');

  function selectFile(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files) {
      setFilename(event.target.files[0].name);
    }
  }
  return (
    <div>
      <label className={'form-filed form-filed__label form-filed__file'}>
        <input
          type={'file'}
          className={'form-filed__file-input'}
          onChange={selectFile}
          ref={ref}
          accept="image/*"
        />
        <span className={'form-filed__icon'}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm96 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm69.2 46.9c-3-4.3-7.9-6.9-13.2-6.9s-10.2 2.6-13.2 6.9l-41.3 59.7-11.9-19.1c-2.9-4.7-8.1-7.5-13.6-7.5s-10.6 2.8-13.6 7.5l-40 64c-3.1 4.9-3.2 11.1-.4 16.2s8.2 8.2 14 8.2h48 32 40 72c6 0 11.4-3.3 14.2-8.6s2.4-11.6-1-16.5l-72-104z" />
          </svg>
        </span>
        <span className={'form-filed__file-name'}>{filename}</span>
      </label>
    </div>
  );
});
// export class FileLoad extends React.Component<Props, State> {
//   fileRef: RefObject<HTMLInputElement>;
//   constructor(props: Props) {
//     super(props);
//     this.selectFile = this.selectFile.bind(this);
//     this.state = { filename: 'Select file', filePath: '', files: null };
//     this.getFile = this.getFile.bind(this);
//     this.getFiles = this.getFiles.bind(this);
//     this.fileRef = createRef<HTMLInputElement>();
//   }
//   selectFile(event: ChangeEvent<HTMLInputElement>) {
//     console.log(event.target.value);
//     if (event.target.files) {
//       this.setState({
//         filename: event.target.files[0].name,
//         filePath: event.target.value,
//         files: event.target.files,
//       });
//     }
//   }
//   getFile(): string {
//     return this.state.filePath;
//   }
//   getFiles(): FileList | null {
//     return this.state.files;
//   }
//   render() {
//     return (
//       <div>
//         <label className={'form-filed form-filed__label form-filed__file'}>
//           <input
//             type={'file'}
//             className={'form-filed__file-input'}
//             onChange={this.selectFile}
//             ref={this.fileRef}
//             accept="image/*"
//           />
//           <span className={'form-filed__icon'}>
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
//               <path d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm96 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm69.2 46.9c-3-4.3-7.9-6.9-13.2-6.9s-10.2 2.6-13.2 6.9l-41.3 59.7-11.9-19.1c-2.9-4.7-8.1-7.5-13.6-7.5s-10.6 2.8-13.6 7.5l-40 64c-3.1 4.9-3.2 11.1-.4 16.2s8.2 8.2 14 8.2h48 32 40 72c6 0 11.4-3.3 14.2-8.6s2.4-11.6-1-16.5l-72-104z" />
//             </svg>
//           </span>
//           <span className={'form-filed__file-name'}>{this.state.filename}</span>
//         </label>
//       </div>
//     );
//   }
// }
