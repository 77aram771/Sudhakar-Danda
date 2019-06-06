/**
 * Created by Aram on 04.06.2019.
 */
import React from 'react';
import './index.css';

export const Option = ({item}) => {
    return(
        <option value={item}>
            {item}
        </option>
    )
};