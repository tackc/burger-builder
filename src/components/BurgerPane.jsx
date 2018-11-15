import React, {Component} from 'react';
import Burger from './Burger';

class BurgerPane extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        var burgerstack = this.props.stack.map((stack, idx) => <Burger stack={stack}/>)
        return(
            <div>{this.props.stack.ingredient}</div>
        )
    }
}

export default BurgerPane;