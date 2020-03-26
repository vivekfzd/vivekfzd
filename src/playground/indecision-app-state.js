

class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            options:[]
        }
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)

    }
    handleDeleteOption(){
        this.setState(()=>{
            return{
                options:[]
            }
        });
    }
    handlePick(){
        alert(this.state.options[Math.floor(Math.random()*this.state.options.length)])
    }
    handleAddOption(option){
        // console.log(option)
        if(!option){
            return 'Enter valid value to add item';
        }else if(this.state.options.indexOf(option)>-1){
            return 'this item already exists';
        }
        this.setState((prevState)=>{
            return{
                options:prevState.options.concat(option)
            }

        });
    }
    render(){
        const title='Indecision App'
        const subtitle='Put your hand in the computer science'
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                hasOption={this.state.options.length > 0}
                handlePick ={this.handlePick}
                />
                <Options 
                options={this.state.options}
                handleDeleteOption ={this.handleDeleteOption}
                />
                <AddOption 
                handleAddOption={this.handleAddOption}
                />
            </div>

        );
    }
}




class Header extends React.Component {
    
    render(){
        
        return (
            <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
            </div>);
    }


}

class Action extends React.Component{
    // handlePick(){
    //     alert('handlePick');
    // }
    render(){
        return (
            <button 
            onClick={this.props.handlePick}
            disabled={!this.props.hasOption}
            >
            What should I do
            </button>
           
        )
    }
}

class Options extends React.Component{
    // constructor(props){
    //     super(props)
    //     this.handleRemoveAll = this.handleRemoveAll.bind(this);
    // }
    // handleRemoveAll(){
    //     console.log(this.props.options);
    //     // alert('handleRemoveAll');
    // }
    render(){
        return (
            <div>
                <button onClick={this.props.handleDeleteOption}>RemoveAll</button>
                {this.props.options.map((option)=> <Option key={option} optionText={option}/>) }
            </div>
        )
    }
}
class Option extends React.Component {
    render() {
        
      return (
        <div>
          {this.props.optionText}
        </div>
      );
    }
  }
class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state={
            error:undefined
        }
    }
    handleAddOption(e){
        e.preventDefault()
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(()=>{
            return {
                error
            };

        });
        e.target.elements.option.value=''

    }
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option'/>
                    <button>Submit</button>
                
                </form>
            </div>
        )
    }
}



ReactDOM.render(<IndecisionApp />,document.getElementById('app'));








// const obj={
//     name:"Vivek",
//     getName(){
//         return this.name;
//     }
// }
// const getName = obj.getName.bind({name:'Tanu'});
// console.log(getName())