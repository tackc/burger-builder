import React, { Component } from 'react';
import './App.css';
import IngredientList from './components/IngredientList';
import BurgerPane from './components/BurgerPane';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ingredients: [
        {name: 'Kaiser Bun', color: 'saddlebrown'},
        {name: 'Sesame Bun', color: 'sandybrown'},
        {name: 'Gluten Free Bun', color: 'peru'},
        {name: 'Beef Patty', color: '#3F250B'},
        {name: 'Soy Patty', color: '#3F250B'},
        {name: 'Black Bean Patty', color: '#3F250B'},
        {name: 'Chicken Patty', color: 'burlywood'},
        {name: 'Lettuce', color: 'lawngreen'},
        {name: 'Tomato', color: 'tomato'},
        {name: 'Bacon', color: 'maroon'},
        {name: 'Onion', color: 'lightyellow'}
    ],
      stack: []
    }
    this.addToStack = this.addToStack.bind(this)
  }
  addToStack(ingredient) {
    let stack = this.state.stack.slice()
    stack.push(ingredient)
    this.setState({stack: stack})
  }

  render() {
    return (
      <div className="App">
        <div className="ingredientlist">
          <h1>Ingredient List</h1>
          <IngredientList 
            ingredients={this.state.ingredients}
            addToStack={this.addToStack}
          />
        </div>
        <div className="burgerpane">
          <h1>Here's your custom burger...</h1>
          <BurgerPane
            ingredients={this.state.stack}/>
        </div>
      </div>
    );
  }
}



export default App;
