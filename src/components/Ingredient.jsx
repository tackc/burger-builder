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
            <div className="addpadding">
                {this.props.ingredient.name}
                <span><button onClick={this.handleClick}>+</button></span>
            </div>
        )
    }
} 

export default Ingredient