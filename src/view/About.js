import React from "react";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'antd';
class About extends React.Component {
    constructor(props, context) {
        super(props, context)
        console.log(props)
    }
    state = {
        msg: "(๑′ᴗ‵๑)Ｉ Lᵒᵛᵉᵧₒᵤ❤"
    };
    handleClick = e => {
        this.setState({
            msg: "O(∩_∩)O哈哈~"
        });
        console.log(this.context)
    };
    componentDidMount() {
        console.log(this.props)
    };
    render(h) {
        const { PayIncrease, PayDecrease } = this.props;

        return (
            <div>
                <h2 histort={this.props.history} onClick={this.handleClick}>{this.state.msg}{this.props.tiger}</h2>
                <Button type="primary" onClick={PayIncrease}>加钱成功</Button>
                <Button type="danger" onClick={PayDecrease}>消费成功</Button>
            </div>
        )
    };
    componentDidMount() {
        setInterval(() => {
            this.props.PayIncrease()
            // this.PayIncrease()
        }, 2000);
    }
}

//需要渲染什么数据
function mapStateToProps(state) {
    return {
        tiger: state
    }
}

//需要触发什么行为
function mapDispatchToProps(dispatch) {
    return {
        PayIncrease: () => dispatch({ type: '涨工资' }),
        PayDecrease: () => dispatch({ type: '扣工资' })
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(About));