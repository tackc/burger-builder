import React, {Component} from 'react';
import Ingredient from './Ingredient'

class BurgerStack extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div style={{backgroundColor: this.props.ingredient.color}} className="addpadding">
                {this.props.ingredient.name}
            </div>
        )
    }
}
export default BurgerStack;