import React, {Component} from 'react';
import Ingredient from './Ingredient';

class IngredientList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        var ingredients = this.props.ingredients.map((ingredient, idx) => <Ingredient ingredient={ingredient} addToStack={this.props.addToStack}/>)
        return(
            <div>{ingredients}</div>
        )
    }
}

export default IngredientList;