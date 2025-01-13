import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import BooksImage from '../assets/books.png'; // Import the image

const LoginPage = () => {
    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log('Login success:', values);
        navigate('/books');
    };

    return (
        <div className="login-container">
            <p className="gradient-text ">Turku City Library</p>
            <div className="login-content">
                <img
                    src={BooksImage}
                    className="login-image"
                />
                <Form className="login-form" onFinish={onFinish}>
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password placeholder="Password" />
                    </Form.Item>
                    <Button type="primary" className='main-button' htmlType="submit">
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default LoginPage;