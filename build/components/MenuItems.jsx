import { useLocation } from "react-router";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

function MenuItems() {
  const { pathname } = useLocation();

  return (
    <Menu
      //theme="dark"
      mode="horizontal"
      style={{
        display: "flex",
        fontSize: "17px",
        fontWeight: "500",
        width: "100%",
        justifyContent: "center",
      }}
      defaultSelectedKeys={[pathname]}
    >
      {/* <Menu.Item key="/quickstart">
        <NavLink to="/quickstart">π Quick Start</NavLink>
      </Menu.Item> */}
      <Menu.Item key="/wallet">
        <NavLink to="/wallet">π Wallet</NavLink>
      </Menu.Item>
      <Menu.Item key="/1inch">
        <NavLink to="/1inch">π¦ Swap token</NavLink>
      </Menu.Item>
      {/* <Menu.Item key="onramp">
        <NavLink to="/onramp">π΅ Fiat</NavLink>
      </Menu.Item> */}
      <Menu.Item key="/erc20balance">
        <NavLink to="/erc20balance">π° Balances</NavLink>
      </Menu.Item>
      <Menu.Item key="/erc20transfers">
        <NavLink to="/erc20transfers">πΈRecent Transfers</NavLink>
      </Menu.Item>
      {/* <Menu.Item key="/nftBalance">
        <NavLink to="/nftBalance">πΌ NFTs</NavLink>
      </Menu.Item> */}
      {/* <Menu.Item key="/contract">
        <NavLink to="/contract">π Contract</NavLink>
      </Menu.Item> */}
    </Menu>
  );
}

export default MenuItems;
