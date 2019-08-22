import React from "react";
import { withRouter } from 'react-router-dom';
import { observer } from "mobx-react";
import { appState } from "../mobx/index";
class Home extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
    }

    state = {
        msg: "(๑′ᴗ‵๑)Ｉ Lᵒᵛᵉᵧₒᵤ❤"
    };
    handleClick = e => {
        console.log(e);
        this.setState({
            msg: "O(∩_∩)O哈哈~",
        });
        appState.resetTimer();
    };
    render(h) {
        return (
            <h2 history={this.props.history} onClick={this.handleClick}>{this.state.msg}{appState.timer}</h2>
        )
    };

}
export default withRouter(observer(Home));