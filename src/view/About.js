import React from "react";
import { withRouter } from 'react-router-dom';
class About extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    state = {
        msg: "(๑′ᴗ‵๑)Ｉ Lᵒᵛᵉᵧₒᵤ❤"
    };
    handleClick = e => {
        console.log(e);
        this.state({
            msg: "O(∩_∩)O哈哈~"
        });
    };
    render(h) {
        return (
            <h2 histort={this.props.history} onClick={this.handleClick}>{this.state.msg}</h2>
        )
    };

}

export default withRouter(About);