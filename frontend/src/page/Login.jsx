import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, message, Form } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import * as API from '../service/API';
import './login.scss';

function Login() {
  const navigate = useNavigate();
  const error = (msg) => {
    message.error(msg);
  };
  const onFinish = async (values) => {
    const result = await API.Login(values);
    if (result.code !== 1) {
      error(result.msg);
    } else {
      sessionStorage.setItem('User_Name', values.User_Name);
      sessionStorage.setItem('token', result.data.token);
      navigate('/home');
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  // useEffect(() => {
  //   if (sessionStorage.getItem('userName') && sessionStorage.getItem('token')) {
  //     navigate('/home');
  //   }
  // }, []);
  return (
    <div className="login">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="User_Name"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="User Name" />
        </Form.Item>
        <Form.Item
          name="Password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
