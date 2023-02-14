import React from "react";
import { ReactDOM } from "react";
import "./login-form.css";

class LoginForm extends React.Component {
  render() {
    return (
      <div id="loginform">
        <FormHeader title="РАМЗЭС 3.0" />
        <Form />
      </div>
    );
  }
}

const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;

const Form = (props) => (
  <div>
    <FormInput
      description="Логин"
      placeholder="Введите логин пользователя"
      type="text"
    />
    <FormInput
      description="Пароль"
      placeholder="Введите пароль"
      type="password"
    />
    <FormButton title="Авторизоваться" />
  </div>
);

const FormButton = (props) => (
  <div id="button" className="row">
    <button>{props.title}</button>
  </div>
);

const FormInput = (props) => (
  <div className="row">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder} />
  </div>
);

export default LoginForm;
