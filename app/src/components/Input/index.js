/**
 * Created by Aram on 04.06.2019.
 */
import React from 'react';
import './index.css';

export const Input = ({text}) => {
    return(
        <div>
            <input type={text} accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"/>
        </div>
    )
};