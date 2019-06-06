/**
 * Created by Aram on 05.06.2019.
 */
import React from 'react';
import './index.css';

export const List = ({lastModifiedDate, files_name, files_option}) => {

    return (<div className="view_table_items">
        <div>
            <input type="checkbox"/>
        </div>
        <div className="view_items">
            <div className="view_item">
                <div className="view_item_name">
                    {files_name[0]}
                </div>
            </div>
        </div>
        <div className="view_items">
            <div className="view_item">
                <div className="view_item_name">
                    {files_option[0]}
                </div>
            </div>
        </div>
        <div className="view_items">
            <div className="view_item">

            </div>
        </div>
        <div className="view_items">
            <div className="view_item">

            </div>
        </div>
        <div className="view_items">
            <div className="view_item">
                {lastModifiedDate}
            </div>
        </div>
        <div className="view_items">
            <div className="view_item">

            </div>
        </div>
        <div className="view_items">
            <div className="view_item">

            </div>
        </div>
    </div>)
}