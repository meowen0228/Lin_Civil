import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Form } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import * as API from '../../service/API';
import './login.scss';

function Login() {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const result = await API.Login(values);
    if (result.code) {
      sessionStorage.setItem('user_name', values.user_name);
      sessionStorage.setItem('token', result.data.token);
      navigate('/home/cable_hole');
    }
  };
  useEffect(() => {
    if (sessionStorage.getItem('userName') && sessionStorage.getItem('token')) {
      navigate('/home/cable_hole');
    }
  }, []);
  return (
    <div className="login">
      <Form
        name="normal_login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="user_name"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="User Name" />
        </Form.Item>
        <Form.Item
          name="password"
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
