import React,{Component} from 'react'
import PropTypes from "prop-types";
import {
  Layout, Menu, Breadcrumb, Icon,
} from 'antd';
import SideMenu from './components/sideMenu/sideMenu'
import  routes from '../../routes'
const {
  Header, Content, Footer, Sider,
} = Layout;
const SubMenu = Menu.SubMenu;
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
    render(){
        let {children} = this.props
        return (
           <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
           <SideMenu menuList={routes} changeRouter={this.changeRouter.bind(this)}></SideMenu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
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