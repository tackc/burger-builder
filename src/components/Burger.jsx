import React, {Component} from 'react';
// import Ingredient from './Ingredient'

class Burger extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                {this.props.stack.ingredient.name}
            </div>
        )
    }
}

export default Burger;