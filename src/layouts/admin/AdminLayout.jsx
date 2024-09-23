import React, { useState } from "react";
import "./Admin.css";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SolutionOutlined,
  UserOutlined,
  ProductFilled,
  AppstoreOutlined,
  StockOutlined,
  AuditOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { Outlet, Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;
export default function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        className="fixed-sider"
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={260}
        collapsedWidth={80} //
      >
        <div className="item_title">
          <Link className="title_profile" to="/admin">
            Corona Admin
          </Link>
        </div>
        <span className="line"></span>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<AppstoreOutlined />}>
            <Link to="/admin">DashBoard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            <Link to="/admin/user-manager">User Manager</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<AuditOutlined />}>
            <Link to="category">Category Manager</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<ProductFilled />}>
            <Link to="product">Product Manager</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<SolutionOutlined />}>
            <Link to="order">Order Manager</Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<StockOutlined />}>
            <Link to="charts">Charts</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="layout_dash">
        <Header
          className="fixed-header "
          style={{
            padding: 0,
            background: "white",
          }}
        >
          <div className="header_control">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <div className="header_content">
              {/* search */}
              <form className="form">
                <button>
                  <svg
                    width={17}
                    height={16}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-labelledby="search"
                  >
                    <path
                      d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                      stroke="currentColor"
                      strokeWidth="1.333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <input
                  className="input"
                  placeholder="Type your text"
                  required=""
                  type="text"
                />
                <button className="reset" type="reset">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </form>

              {/* logout */}
              <label class="popup">
                <input type="checkbox" />
                <div tabindex="0" class="burger">
                  <i class="bx bx-user"></i>
                </div>
                <nav class="popup-window">
                  <ul>
                    <li>
                      <button>
                        <span>Edit profile</span>
                        <i class="bx bxs-user"></i>
                      </button>
                    </li>
                    <li>
                      <button>
                        <span>Change password</span>
                        <i class="bx bx-key"></i>
                      </button>
                    </li>
                    <li>
                      <button>
                        <span>To do list</span>
                        <i class="bx bx-notepad"></i>
                      </button>
                    </li>
                    <span className="line_logout"></span>
                    <li>
                      <button>
                        <i class="bx bx-log-out"></i>
                        <span>Logout</span>
                      </button>
                    </li>
                  </ul>
                </nav>
              </label>
            </div>
          </div>
        </Header>
        <Content
          className="content-dashboard"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
