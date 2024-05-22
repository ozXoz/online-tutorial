import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, notification } from "antd";

import styles from "./styles.module.css"

const ApplyTutor = () => {
  const [error, setErrors] = useState("");
  const navigate = useNavigate();

  const onFinish = async (formData) => {
    try {
      const url = "https://t26-server.herokuapp.com/api/tutor/signup";
      const { data: res } = await axios.post(url, formData);
      localStorage.setItem("tutor", JSON.stringify(res.data));
      navigate("/PayInfo");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500
      ) {
        setErrors(error.response.data);
        console.log(error.response);
      }
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const validateFirstName = (_, value) => {
    if (!value) {
      return Promise.reject("Please enter your first name");
    } else if (!/^[a-zA-Z]+$/i.test(value)) {
      return Promise.reject("Please enter only letters");
    }
    else if (value.length < 3) {
      return Promise.reject("First Name must be at least 3 letters long");
    }
    else {
      return Promise.resolve();
    }
  }

  const validateLastName = (_, value) => {
    if (!value) {
      return Promise.reject("Please enter your last name");
    } else if (!/^[a-zA-Z]+$/i.test(value)) {
      return Promise.reject("Please enter only letters");
    }
    else if (value.length < 3) {
      return Promise.reject("Last Name must be at least 3 letters long");
    }
    else {
      return Promise.resolve();
    }
  }

  const validatePhone = (_, value) => {
    if (!value) {
      return Promise.reject("Please enter your phone number");
    } else if (!/^\d{10}$/i.test(value)) {
      return Promise.reject("Please enter a valid 10-digit phone number");
    } else {
      return Promise.resolve();
    }
  };

  const validateEmail = (_, value) => {
    if (!value) {
      return Promise.reject("Please enter your email");
    } else if (!/^([\w.%+-]+)@([\w-]+.)+([\w]{2,})$/i.test(value)) {
      return Promise.reject("Please enter a valid email address");
    } else {
      return Promise.resolve();
    }
  };

  const validatePassword = (_, value) => {
    if (!value) {
      return Promise.reject("Please enter a password");
    } else if (value.length < 8) {
      return Promise.reject("Password must be at least 8 characters long");
    } else if (!/\d/i.test(value)) {
      return Promise.reject("Password must contain at least one number");
    } else if (!/[a-z]/i.test(value)) {
      return Promise.reject("Password must contain at least one letter");
    } else if (!/[A-Z]/.test(value)) {
      return Promise.reject("Password must contain at least one capital letter");
    }
    else if (!/[^a-zA-Z0-9]/.test(value)) {
      return Promise.reject("Password must contain at least one symbol");
    }else {
      return Promise.resolve();
    }
  };


  const [form] = Form.useForm();

  return (
    <div>
      <div className={styles.signup_form_container}>
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
              className={styles.form_container}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              form={form}
            >
              <h1>Tutor Create an Account</h1>
              <Form.Item
                  name="firstname"
                  rules={[
                    { validator: validateFirstName },
                  ]}
              >
                <Input placeholder="First Name" className={styles.input} />
              </Form.Item>

              <Form.Item
                  name="lastname"
                  rules={[
                    { validator: validateLastName },
                  ]}
              >
                <Input placeholder="Last Name" className={styles.input} />
              </Form.Item>
              <Form.Item name="phone" rules={[{ validator: validatePhone }]}>
                <Input placeholder="Phone Number" className={styles.input} />
              </Form.Item>
              <Form.Item name="email" rules={[{ validator: validateEmail }]}>
                <Input placeholder="Email" className={styles.input} />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[{ validator: validatePassword }]}
              >
                <Input.Password
                  placeholder="Password"
                  className={styles.input}
                />
              </Form.Item>

              {error && <div className={styles.error_msg}>{error}</div>}

              <Button
                type="primary"
                htmlType="submit"
                className={styles.green_btn}
              >
                Apply Now
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyTutor;
