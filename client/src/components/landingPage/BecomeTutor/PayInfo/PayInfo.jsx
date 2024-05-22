import React from 'react';
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, notification } from "antd";
import styles from "./styles.module.css"

const PayInfo = () => {
  const [form] = Form.useForm();
  const [error, setErrors] = useState("");
  const navigate = useNavigate();

  const onFinish = async (formData) => {
    try {
      const url = "https://t26-server.herokuapp.com/api/tutor/update-pay";
      const tutor = JSON.parse(localStorage.getItem("tutor"));
      const payload = { ...formData, id: tutor._id };
      const { data: res } = await axios.post(url, payload);
      navigate("/tutor/TutorMainMenu");
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

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const validateAccN = (_, value) => {
    if (!value) {
      return Promise.reject("Please enter your account number");
    } else if (!/^\d{5,17}$/i.test(value)) {
      return Promise.reject("Please enter a valid account number");
    } else {
      return Promise.resolve();
    }
  };

  const validateTransitN = (_, value) => {
    if (!value) {
      return Promise.reject("Please enter your transit number");
    } else if (!/^\d{5}$/i.test(value)) {
      return Promise.reject("Please enter a valid transit number");
    } else {
      return Promise.resolve();
    }
  };

  const validateBranchN = (_, value) => {
    if (!value) {
      return Promise.reject("Please enter your branch number");
    } else if (!/^\d{3,5}$/i.test(value)) {
      return Promise.reject("Please enter a valid branch number");
    } else {
      return Promise.resolve();
    }
  };

  return (
      <div>
        <div className={styles.signup_container}>
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
                <h1>Pay Information</h1>
                <Form.Item
                    name="accN"
                    rules={[
                      { validator: validateAccN },
                    ]}
                >
                  <Input placeholder="Account Number" className={styles.input} />
                </Form.Item>
                <Form.Item
                    name="transitN"
                    rules={[
                      { validator: validateTransitN },
                    ]}
                >
                  <Input placeholder="Transit Number" className={styles.input} />
                </Form.Item>
                <Form.Item
                    name="branchN"
                    rules={[
                      { validator: validateBranchN },
                    ]}
                >
                  <Input placeholder="Branch Number" className={styles.input} />
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
};
export default PayInfo;

