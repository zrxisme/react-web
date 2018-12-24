import React,{Component} from 'react'
import PropTypes from "prop-types";
import {
  Layout,
} from 'antd';
import SideMenu from './components/sideMenu/sideMenu'
import HeaderBar from './components/headerBar/headerBar'
import RouterHistory from './components/routerHistory/routerHistory'
import  menuList from '../../routes'
const {
  Header, Content, Footer, Sider,
} = Layout;
class Main extends Component{
     state = {
    collapsed: false,
  };
   static contextTypes = {
            router: PropTypes.object.isRequired,
        }
  changeRouter(router){
    this.context.router.push(router)
  }
  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
    render(){
        let {children,routes} = this.props
        return (
           <Layout style={{ minHeight: '100vh'}}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
           <SideMenu  menuList={menuList} changeRouter={this.changeRouter.bind(this)}></SideMenu>
        </Sider>
        <Layout  >
           <Header style={{ background: '#fff', padding: 0 }}>
             <HeaderBar routes={routes} onToggle={this.toggle.bind(this)} collapsed={this.state.collapsed} ></HeaderBar>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <RouterHistory></RouterHistory>
            <div style={{ minHeight: 360 }}>
             {children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
           aibb@zrxisme
          </Footer>
        </Layout>
      </Layout>
        )
    }
}

export default Main