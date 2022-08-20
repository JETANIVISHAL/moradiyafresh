import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Checkbox, Row, Col, Typography, notification } from 'antd';
import { loginAsync } from '../../actions/auth';
import { FullWidthButton, ImgWrapper } from './loginStyle';
import { GOOGLE_AUTH_URL } from '../../constants';
import { history } from '../../App';
import semple from '../semple.png';

function Login(props) {
  const [signInLoading, setSignInLoading] = useState(false);
  const dispatch = useDispatch();
  const auth = useSelector(store => store.auth);

  useEffect(() => {
    if (auth.accessToken) {
      history.push("/winco");
    }
  }, []);

  useEffect(() => {
    const error = props?.location?.state?.error;
    if (error) {
      notification.error({
        message: error,
        description: '',
        duration:15
      });
    }
  }, []);
    const onFinish = (values) => {
        dispatch(loginAsync(values.email, values.password, setSignInLoading));
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
  return (
    <div>
        <Row justify={'center'} align={'middle'} style={{ height: '90vh' }}>
      <Col xs={{ span: 20 }} sm={{ span: 12 }} md={{ span: 10 }} lg={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 5 }}>
        <ImgWrapper>
          <img src={semple} alt="logo" width="40%" />
        </ImgWrapper>
        <Form
          layout={'vertical'}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a href="//#endregion" style={{ float: 'right' }}>
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <FullWidthButton type="primary" htmlType="submit" loading={signInLoading}>
              SIGN IN
            </FullWidthButton>
          </Form.Item>

          <Form.Item>
          <a href={GOOGLE_AUTH_URL}>
            <FullWidthButton>
              LOGIN WITH GOOGLE
            </FullWidthButton>
          </a>
          </Form.Item>
        </Form>
        <Typography align="center">
          {`© ${new Date().getFullYear()} `}
          <a color="inherit" href="https://www.wincoprecision.com/" target="_blank" rel="noreferrer">
            Winco Precision. &nbsp;
          </a>
          All Rights Reserved
        </Typography>
      </Col>
    </Row>
    </div>
  )
}

export default Login