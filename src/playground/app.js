

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: props.options

        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)

    }

    componentDidMount() {
        try {
            console.log('fetching data')
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
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
            console.log('Saving data')
        }
    }
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
    }
    handleDeleteOption(removeOption) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== removeOption)
        }));
    }
    handlePick() {
        alert(this.state.options[Math.floor(Math.random() * this.state.options.length)])
    }
    handleAddOption(option) {
        // console.log(option)
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
                <Action
                    hasOption={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>

        );
    }

}




const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>);
}
const Action = (props) => {
    return (
        <button
            onClick={props.handlePick}
            disabled={!props.hasOption}
        >
            What should I do
            </button>

    )
}
IndecisionApp.defaultProps = {
    options: []
}
const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>RemoveAll</button>
            {props.options.map((option) =>
                <Option
                    key={option}
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                />)}
        </div>
    )

}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button
                onClick={(e) => { props.handleDeleteOption(props.optionText) }}
            >Remove
          </button>
        </div>
    );
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault()
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({ error }));
        e.target.elements.option.value = ''

    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option' />
                    <button>Submit</button>

                </form>
            </div>
        )
    }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));








