/**
 * Created by Aram on 04.06.2019.
 */
import React from 'react';
import './index.css';
import {Input} from '../../components/Input'


export default class Form extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div>
                <Input text="text"/>
                <Input text="text"/>
            </div>
        )
    }
}