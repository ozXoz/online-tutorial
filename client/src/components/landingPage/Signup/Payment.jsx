import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, notification } from "antd";
import styles from "./styles.module.css"

const Payment = () => {
  const [form] = Form.useForm();
  const [error, setErrors] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    console.log("Submitting payment")
    try {
      const url = "https://t26-server.herokuapp.com/api/user/update-payment";
      const user = JSON.parse(localStorage.getItem("user"));
      console.log('user', user)
      const payload = {
        ...values,
        id: user._id
      }
      const { data: res } = await axios.post(url, payload);
      navigate("/user/TutorMainMenu");
      console.log(res.message);
    } catch (error) {
      if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status < 500
      ) {
        setErrors(error.response.data.message);
        console.log(error.response);
      }
    }
  };

  return (
      <div>
        <div className={styles.signup_contanier}>
          <div className={styles.signup_form_container}>
            <div className={styles.left}>
              <h1>Login ?</h1>
              <Link to="/Login">
                <button type="button" className={styles.white_btn}>
                  Sign In
                </button>
              </Link>
            </div>
            <div className={styles.right}>
              <Form
                  name="paymentForm"
                  onFinish={handleSubmit}
                  layout="vertical"
                  form={form}
              >
                <h1>Credit Card Information</h1>

                <Form.Item
                    name="cardNumber"
                    label="Credit Card Number"
                    rules={[{ required: true, message: 'Please input your credit card number!' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                    name="cardExpMonth"
                    label="Expiry Month"
                    rules={[{ required: true, message: 'Please input the expiry month!' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                    name="cardExpYear"
                    label="Expiry Year"
                    rules={[{ required: true, message: 'Please input the expiry year!' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                    name="cardExpCVV"
                    label="Security Code"
                    rules={[{ required: true, message: 'Please input the security code!' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                    name="cardHolderName"
                    label="Card Holder Name"
                    rules={[{ required: true, message: 'Please input the card holder name!' }]}
                >
                  <Input />
                </Form.Item>

                {error && <div className={styles.error_msg}>{error}</div>}

                <Button type="primary" htmlType="submit" className={styles.green_btn}>
                  Sign Up
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Payment
