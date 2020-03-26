console.log('app is running');
const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hand of a computer",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        // console.log('form submit');
        e.target.elements.option.value = '';
        render();
    }

};

const onMakeDecision = () => {
    const random = (Math.floor(Math.random() * app.options.length))
    let option = app.options[random]
    alert(option)
}

const removeAll = () => {
    app.options = [];
    render();

};



const user = {
    name: "Kashyap",
    age: 16,
    location: 'Faizabad'
};

const appRoot = document.getElementById('app');


const render = () => {
    //JSX -JavaScript XML
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle ? <p>{app.subtitle}</p> : undefined}
            <p>{app.options.length > 0 ? 'Here your option' : 'No option'}</p>
            <p>{app.options.length}</p>
            <button disabled={app.options.length == 0} onClick={onMakeDecision} >What should I</button>
            <button onClick={removeAll}>RemoveAll</button>
            <ol>
                {
                    app.options.map((item) => <li key={item}>{item}</li>)
                }
            </ol>


            <form onSubmit={onFormSubmit}>
                <input type='text' name='option' />
                <button>Add Option</button>

            </form>


        </div>
    );
    ReactDOM.render(template, appRoot);

};

render();

