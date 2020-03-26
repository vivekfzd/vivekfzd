
class Visible extends React.Component{

    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        this.state={
            visibility: false
        };
    }
    handleToggleVisibility(){
        this.setState((prevState)=>{
            return{ 
            visibility:!prevState.visibility
            }
        })

    }
    render(){
        return(
            <div>
                <h1>Visible Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility?'hideDetail':'showDetail'}</button>
                <p>{this.state.visibility && 'Hey your information is here'}</p>
            </div>
        )


    }

}


ReactDOM.render(<Visible />,document.getElementById('app'))
























// let visibility=true;
// const show=()=>{
//     visibility=!visibility;
//     render();
// }



// const appRoot = document.getElementById('app');
// const render=()=>{
//     const template=(
//         <div>
//             <h1>Visible toggle</h1>
//                 <button onClick={show}>{visibility ? 'ShowDetail':'HideDetail'}</button>
//                 {
//                     !visibility &&
//                     <div>
//                         Hey your information is is here
//                     </div>
//                 }
                
//         </div>

//     );
// ReactDOM.render(template,appRoot)
// }




// render();