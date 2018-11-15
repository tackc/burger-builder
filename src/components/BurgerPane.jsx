import React, {Component} from 'react';
import BurgerStack from './BurgerStack';


class BurgerPane extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        var ingredients = this.props.ingredients.map((ingredient, idx) => <BurgerStack ingredient={ingredient} />)
        return(
            <div>{ingredients}</div>
        )
    }
}

export default BurgerPane;