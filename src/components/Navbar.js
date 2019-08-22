import React from 'react';
import { Menu, Icon } from 'antd';
import {
    HashRouter,
    BrowserRouter,
    Switch,
    Route,
    Router,
    NavLink,
    withRouter
} from 'react-router-dom';
const { SubMenu } = Menu;
class Navbar extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    };
    state = {
        current: 'index',
    };

    handleClick = e => {
        console.log('click', e);
        this.setState({
            current: e.key
        });
        console.log(this.props)
        // this.props.history.push('/home')
    };
    render() {
        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="index">
                    <NavLink to={'/'}>首页</NavLink>
                </Menu.Item>
                <Menu.Item key="not-open" disabled>
                    <NavLink to={'/'}>暂未开放</NavLink>
                </Menu.Item>
                <SubMenu
                    title={
                        <span className="home">
                            <NavLink to={'/home'}>我的乐园</NavLink>

                        </span>
                    }
                >
                    <Menu.ItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                <Menu.Item key="about">
                    <NavLink to={'/about'}>关于</NavLink>
                </Menu.Item>
            </Menu>
        )
    }
}

export default withRouter(Navbar);