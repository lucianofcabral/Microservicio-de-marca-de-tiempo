import React from 'react';

const TimestampResult = ({ unixTimestamp, naturalDate }) => {
    return (
        <div>
            <h2>Timestamp Result</h2>
            <p>Unix Timestamp: {unixTimestamp}</p>
            <p>Natural Date: {naturalDate}</p>
        </div>
    );
};

export default TimestampResult;