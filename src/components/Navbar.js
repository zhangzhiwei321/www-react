import React from 'React';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

class Navbar extends React.Component {
    state = {
        current: 'index',
    };

    handleClick = e => {
        console.log('click', e);
        this.setState({
            current: e.key,
        });
    };
    render() {
        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="index">
                    首页
            </Menu.Item>
                <Menu.Item key="not-open" disabled>
                    暂未开放
            </Menu.Item>
                <SubMenu
                    title={
                        <span className="home">
                            我的乐园
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

                    关于

                </Menu.Item>
            </Menu>
        )
    }
}

export { Navbar }