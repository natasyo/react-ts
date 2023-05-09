// @flow
import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setString } from './../../../store/searchSlice';
import './SearchBar.scss';
import { useNavigate } from 'react-router-dom';
// type Props = {
//
// };
export function SearchBar() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const changeString = () => dispatch(setString(text));
    function changeValue(event) {
        setText(event.target.value);
    }
    function search() {
        navigate('/');
        changeString();
    }
    return (React.createElement("div", { className: "search-bar" },
        React.createElement("input", { type: "text", className: 'search-bar__field', value: text, onChange: changeValue, placeholder: 'Search' }),
        React.createElement("button", { className: 'search-bar__btn', onClick: search },
            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" },
                React.createElement("path", { d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" })))));
}
