import React from "react";
import { Layout } from "antd";

const { Header } = Layout;
export default function Navbar() {
  return (
    // navbar
    <>
      <Header style={{ background: "#fff", padding: 0 }}>
        <h1>Admin Navbar</h1>
      </Header>
    </>
  );
}
