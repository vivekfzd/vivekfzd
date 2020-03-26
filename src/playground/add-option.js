console.log('app is running');
const app={
    title:"Indecision App",
    subtitle:"Put your life in the hand of a computer",
    options:[]
};

const onFormSubmit = (e)=>{
    e.preventDefault();
    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        // console.log('form submit');
        e.target.elements.option.value='';
        render();
    }

};
const removeAll = ()=>{
    app.options.length = 0;
    render();

};





const user={
    name:"Kashyap",
    age:16,
    location:'Faizabad'
};

const appRoot=document.getElementById('app');



const render=()=>{
    //JSX -JavaScript XML
    const template=(
        <div>
            <h1>{app.title}</h1>
            {app.subtitle ? <p>{app.subtitle}</p>:undefined}
            <p>{app.options.length >0 ? 'Here your option' : 'No option'}</p>
            <p>{app.options.length}</p>
            <button onClick={removeAll}>RemoveAll</button>
            <ol>
                <li>Item one</li>
                <li>item two</li>    
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option'/>
                <button>Add Option</button>
            </form>
        </div>
);
ReactDOM.render(template,appRoot);

};

render();