import { Form, Input, Button, notification } from "antd";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [error, setErrors] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));

  const onFinish = async (formData) => {
    try {
      const url = "https://t26-server.herokuapp.com/api/auth";
      const { data: res } = await axios.post(url, formData);
      localStorage.setItem("token", res.data);
      localStorage.setItem("user", JSON.stringify(res));
      const navUrl = res?.isStudent ? "/user/TutorMainMenu" : "/tutor/TutorMainMenu";
      navigate(navUrl);
    } catch (error) {
      if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status < 500
      ) {
        setErrors(error.response.data);
      }
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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

  return (
      <div>
        <div className={styles.login_container}>
          <div className={styles.login_form_container}>
            <div className={styles.left}>
              <Form
                  form={form}
                  name="loginForm"
                  className={styles.form_container}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
              >
                <h1>Login An Account</h1>
                <Form.Item
                    name="email"
                    rules={[
                      {
                        type: "email",
                        required: true,
                        message: "Please enter a valid email",
                      },
                    ]}
                >
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
                {error && (
                    <div className={styles.error_msg}>{error}</div>
                )}
                <Button
                    type="primary"
                    htmlType="submit"
                    className={styles.green_btn}>
                  Login
                </Button>
              </Form>
            </div>
            <div className={styles.right}>
              <h1>New here Tutor ?</h1>
              <Link to="/ApplyTutor">
                <button type="button" className={styles.orange_btn}>
                  Sign Up - Tutor
                </button>
              </Link>
              <h1>New here Student ?</h1>
              <Link to="/Signup">
                <button type="button" className={styles.white_btn}>
                  Sign Up - Student
                </button>
              </Link>

            </div>
          </div>
        </div>
      </div>
  );
};

export default Login;
