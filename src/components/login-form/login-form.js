import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import "./login-form.css";

class LoginForm extends React.Component {
  render() {
    return (
      <MDBContainer className="my-5">
        <MDBCard>
          <MDBRow className="g-0">
            <MDBCol md="6">
              <MDBCardImage
                src="../others/images/auth.png"
                alt="login form"
                className="rounded-start w-100"
              />
            </MDBCol>

            <MDBCol md="6">
              <MDBCardBody className="d-flex flex-column">
                <div className="d-flex flex-row mt-2">
                  <MDBIcon
                    fas
                    icon="cubes fa-3x me-3"
                    style={{ color: "#ff6219" }}
                  />
                  <span
                    className="h1 fw-bold mb-0"
                    style={{
                      color: "#ff611a",
                      marginTop: "40px",
                    }}
                  >
                    РАМЗЭС 3.0
                  </span>
                </div>

                <h5 style={{ marginTop: "40px" }}>Авторизуйтесь</h5>

                <MDBInput
                  wrapperClass="mb-4"
                  label="Логин пользователя"
                  id="formControlLg"
                  type="email"
                  size="lg"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Пароль"
                  id="formControlLg"
                  type="password"
                  size="lg"
                />

                <MDBBtn
                  className=""
                  size="lg"
                  style={{ backgroundColor: "#ff611a", border: "none" }}
                >
                  Войти
                </MDBBtn>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    );
  }
}

export default LoginForm;
