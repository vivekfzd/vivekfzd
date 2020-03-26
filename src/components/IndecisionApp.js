import React from 'react';
import ReactDOM from 'react-dom';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';


export default class IndecisionApp extends React.Component {
    state = {
        options: this.props.options,
        selectedOption: undefined
    }
    componentDidMount = () => {
        try {
            // console.log('fetching data')
            const json = localStorage.getItem('options')
            // console.log(json)
            const options = JSON.parse(json)
            // console.log(options)
            if (options) {
                this.setState(() => ({ options }));
            }
        }
        catch (e) {
            //do not do anything
        }

    }
    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
            // console.log('Saving data')
        }
    }
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    }
    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }))
    }
    handleDeleteOption = (removeOption) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== removeOption)
        }));
    }
    handlePick = () => {
        const random = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[random]
        this.setState(() => ({
            selectedOption: option
        }))
        // this.state.selectedOption = !this.state.selectedOption
        // console.log(this.state.slectedOption)
        //alert()

    }
    handleAddOption = (option) => {
        // console.log(testting);
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'this item already exists';
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }
    render() {
        const title = 'Indecision App'
        const subtitle = 'Put your hand in the computer science'
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <div className="container">
                    <Action
                        hasOption={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>

        );
    }

}




IndecisionApp.defaultProps = {
    options: []
}
