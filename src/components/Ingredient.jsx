import React, {Component} from 'react';

class Ingredient extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.addToStack(this.props.ingredient)
    }

    render() {
        return (
            <div>
                {this.props.ingredient.name}
                <button onClick={this.handleClick}>+</button>
            </div>
        )
    }
} 

export default Ingredient