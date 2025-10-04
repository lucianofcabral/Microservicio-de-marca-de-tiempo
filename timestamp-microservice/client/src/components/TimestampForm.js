import React, { useState } from 'react';

const TimestampForm = ({ onSubmit }) => {
    const [timestamp, setTimestamp] = useState('');

    const handleChange = (event) => {
        setTimestamp(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(timestamp);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={timestamp}
                onChange={handleChange}
                placeholder="Enter a timestamp or date"
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default TimestampForm;