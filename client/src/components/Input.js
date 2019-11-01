import useLocalStorage from './useLocalStorage';
import React from 'react'


// Usage
const Input = () => {
    // Similar to useState but first arg is key to the value in local storage.
    const [name, setName] = useLocalStorage('name', '');

    return (
        <div data-test-id="react">
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={e => setName(e.target.value)}
            />
        </div>
    );
}

export default Input;