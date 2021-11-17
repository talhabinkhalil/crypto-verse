import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import {HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import icon from './../images/cryptocurrency.png';


const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar size="large" />
        <Typography.Title src={icon}  level={2} className="logo" >
          <Link to='/'>Cryptoverse</Link>
        </Typography.Title>
      </div>
      <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined />}>
          <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />}>
          <Link to='/cryptocurrency'>CryptoCurreny</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined />}>
          <Link to='/exchanges'>Exchanges</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />}>
          <Link to='/news'>News</Link>
        </Menu.Item> 
        
      </Menu>
    </div>
  )
}

export default Navbar
