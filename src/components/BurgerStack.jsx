import React, {Component} from 'react';
import Ingredient from './Ingredient'

class BurgerStack extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div className="burgerstack">
                {this.props.ingredient.name}
            </div>
        )
    }
}
export default BurgerStack;