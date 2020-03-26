class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        try {
            console.log('fetching data')
            const json = localStorage.getItem('count');
            console.log(json)
            // const count = JSON.parse(json)
            const count = parseInt(json, 10)
            // console.log(count)
            this.setState(() => ({ count }))

        }
        catch (e) {
            //Do nothing
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            const json = JSON.stringify(this.state.count)
            const count = JSON.parse(json)
            localStorage.setItem('count', count)
            console.log(count)
        }
    }
    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        })
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })

    }
    handleReset() {
        this.setState((prevState) => {
            return {
                count: 0
            }
        })

    }
    render() {
        let count = 0;
        return (
            <div>
                <h1>Count:{this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>


            </div>



        );
    }


}

Counter.defaultProps = {
    count: 100
}

ReactDOM.render(<Counter count={20} />, document.getElementById('app'));




















// let count=0;
// let addone=()=>{
//     count++;
//    // console.log('increase by one',count)
//     renderCounterApp();
// };
// let minusone=()=>{
//     count--;
//    // console.log('decrease by one')
//     renderCounterApp();
// };
// let reset=()=>{
//     count=0;
//   //  console.log('reset')
//     renderCounterApp();
// };

// //challenge


// function getLocation(location){
//     if(location)
//         return <p>location:{location}</p>
// }




// // const templateTwo=(
// //     <div>
// //         <h1>{user.name + '!'}</h1>
// //         {user.age>=18 && <p>age:{user.age}</p>}
// //         {getLocation(user.location)}
// //     </div>
// // );
// const z=<h1>Vivek Kashyap</h1>
// const appRoot=document.getElementById('app');


// const renderCounterApp = ()=> {
//     const templateTwo=(
//         <div>
//             <h1>count:{count}</h1>
//             <button onClick={addone}>+1</button>
//             <button onClick={minusone}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo,appRoot);
// };

// renderCounterApp();


// //challenges
// //using and {app.subtitle && <p>{app.subtitle}</p>}
// //using ? operator(ternary) {app.subtitle ? <p>{app.subtitle}</p>:undefined}
// // my way {app.option.length >0 ? <p>Here your option</p> : <p>No option</p>}