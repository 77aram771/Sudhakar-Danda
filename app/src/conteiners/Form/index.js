/**
 * Created by Aram on 04.06.2019.
 */
import React from 'react';
import './index.css';
import {Input} from '../../components/Input'
import {Option} from '../../components/Option'


export default class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [
                {
                    option: 'Master',
                },
                {
                    option: 'User',
                }

            ]
        }
    }

    render() {
        return (
            <div>
                <Input text="text"/>
                <Input text="file"/>
                <select>
                    { this.state.items.map((item, index) => {
                        return (
                            <Option key={index} item={item.option}/>
                        )
                    })}
                </select>
            </div>
        )
    }
}