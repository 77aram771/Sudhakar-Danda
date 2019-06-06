import React from 'react';
import './App.css';
import Form from "./conteiners/Form/index";
import View from "./conteiners/View/index";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [
                {
                    option: 'Master',
                },
                {
                    option: 'Transactions',
                }

            ],
            files_object: null,
            files_name: [],
            files_option: 'Master',
            import_bool: false
        }
    }





    //noinspection JSAnnotator
    handleChange = (selectorFiles: FileList) => {

        let obj = {...selectorFiles};
        let object = Object.values(obj);
        let id = 0;
        object.map((item) => {
            return (
                item.id = id++
            )
        });

        this.setState({
            files_object: {...this.state.files_object, object},
        })
    };

    handleSelectChange = (event) => {
        this.setState({files_option: event.target.value});
    };

    handleImportClick = () => {
        this.setState({
            import_bool: true
        })
    };


    render() {
        return (
            <div className="App">
                <Form
                    items_options={this.state.items}
                    files_option={this.state.files_option}
                    files_object={this.state.files_object}
                    handleChange={this.handleChange}
                    handleSelectChange={this.handleSelectChange}
                    handleImportClick={this.handleImportClick}

                />
                <View
                    files_option={this.state.files_option}
                    import_bool={this.state.import_bool}
                    files_object={this.state.files_object}
                />
            </div>
        )
    };
}

export default App;