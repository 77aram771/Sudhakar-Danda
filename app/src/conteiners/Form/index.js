/**
 * Created by Aram on 04.06.2019.
 */
import React from 'react';
import './index.css';
import {Option} from '../../components/Option'
var name = [];
export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
            itemName: null
        }
    }

    componentDidMount() {
        // if (this.props.files_object === null) {
        //     var object = null;
        // }
        // else {
        //
        //     var object = Object.values(this.props.files_object);
        //
        //     object.map(item => {
        //         return (
        //             name.push(item.name)
        //         )
        //     });
        // }

    }

    render() {
        const {items_options, files_option, files_object} = this.props;
        return (
            <div className="form">
                <div className="form_input">
                    <div className="form_child_one">
                        <span>Group</span>
                        <input type="text" classID="form_input_text"/>
                    </div>
                    <div className="form_child_two">
                        <span>File Type</span>
                        <select value={files_option} onChange={this.props.handleSelectChange}>
                            { items_options.map((item, index) => {
                                return (
                                    <Option key={index} item={item.option}/>
                                )
                            })}
                        </select>
                    </div>
                    <div className="form_import">
                        <button onClick={() => this.props.handleChange(this.state.file)}>Import</button>
                    </div>
                </div>
                <div className="form_child_tree">
                    {this.state.itemName}
                    <span>Drag Drop XLSX Files</span>
                    <input id="form_input_flie" type="file"
                           accept='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                           multiple={true} onChange={ (e) => this.setState({file: e.target.files})}
                    />
                </div>
            </div>
        )
    }
}