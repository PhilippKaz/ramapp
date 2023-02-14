import React from "react";
import "./login-form.css";

class LoginForm extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <FormImages />
            </div>
            <div id="loginform">
              <Form />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const FormImages = (props) => (
  <img
    src={require("../others/images/auth.png")}
    alt="Image"
    className="img-fluid"
  />
);

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
