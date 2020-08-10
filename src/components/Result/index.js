import React from 'react';
import './style.css';

export default function ({ result: { sunrise, sunset } }) {
    return (
        <section>
        <div id="sunrise">
            <img src="../../images/sun.png" alt="Sun" />
            <p>{sunrise}</p>
        </div>

        <div id="sunset">
            <img src="../../images/moon.png" alt="Moon" />
            <p>{sunset}</p>
        </div>
        </section>
    )
}
