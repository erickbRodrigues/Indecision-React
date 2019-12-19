class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne   = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset    = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }
    componentDidMount(){
        const count = parseInt(localStorage.getItem('count'));
        if(!isNaN(count)){
            this.setState(() => ({ count }));
        }
    }
    componentDidUpdate(prevPops, prevState){
        if(prevState.count !== this.state.count){
            localStorage.setItem('count', this.state.count);
            console.log('saving data');
        }
    }
    handleAddOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    handleMinusOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }
    handleReset(){
        this.setState(() => {
            return {
                count: 0
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

// Counter.defaultProps = {
//     count: 0
// };

ReactDOM.render(<Counter count={6}/>, document.getElementById('app'));

// console.log('App.js is running!');

// const appHead = {
//     title: 'Indecision App',
//     subtitle: 'Roll your luck :P',
//     options: ['One', 'Two']
// };

// const template = (
//     <div>
//         <h1>{appHead.title}</h1>
//         {appHead.subtitle && <p>{appHead.subtitle}</p>}
//         <p>{(appHead.options && appHead.options.length > 0) ? 'Here are your options' : 'No options'}</p>
//         <ol>
//             <li>{appHead.options[0]}</li>
//             <li>{appHead.options[1]}</li>
//         </ol>
//     </div>
// );

// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// }
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// }
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// }

// const appRoot = document.getElementById('app');
// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//              <h1>Count: {count}</h1>
//              <button onClick={addOne}>+1</button>
//              <button onClick={minusOne}>-1</button>
//              <button onClick={reset}>Reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);
// }

// renderCounterApp();