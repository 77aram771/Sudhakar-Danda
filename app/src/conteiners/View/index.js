/**
 * Created by Aram on 05.06.2019.
 */
import React from 'react';
import './index.css';
import {List} from '../../components/Create_List'
import {Tabe_details} from '../../components/Tabe_details'


export default class View extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bool: false,
            name: ''
        }
    }

    render() {
        const {files_object, import_bool, files_option} = this.props;

        if (files_object === null) {
            var object = null;
        }
        else {
            var object = Object.values(files_object);
        }

        return (

            <div className="view">
                <div className="view_header">
                    <span>File List</span>
                    <div className="view_text">
                        <span> Active Version / All Version </span>
                    </div>
                </div>
                <div className="view_table">
                    <div className="view_table_category">
                        <p>File Name</p>
                    </div>
                    <div className="view_table_category">
                        <p>File Desc</p>
                    </div>
                    <div className="view_table_category">
                        <p>File Type</p>
                    </div>
                    <div className="view_table_category">
                        <p>Import by</p>
                    </div>
                    <div className="view_table_category">
                        <p>Import date/time</p>
                    </div>
                    <div className="view_table_category">
                        <p>Changed by</p>
                    </div>
                    <div className="view_table_category">
                        <p>Changed date/time</p>
                    </div>
                </div>
                { files_object === null ? '' :
                    object[0].map((item, index) => {
                        return (
                            <List key={index} import_boo={import_bool} files_name={item.name}
                                  data={item.lastModifiedDate} files_option={files_option}/>
                        )
                    })
                }
                <div className="view_details">
                    <div className="view_details_button">
                        <button onClick={() => this.setState({bool: true})}>File details</button>
                    </div>
                </div>

                {this.state.bool ? <Tabe_details/> : ''}
            </div>
        )
    }
}