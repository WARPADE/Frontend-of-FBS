import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from '../Services/AuthService.js';
import { Link, NavLink } from 'react-router-dom';
import SearchingStyle from '../style/SearchingStyle.css';
import { withRouter } from "react-router";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.username, this.state.password).then(
        (response) => {
          this.props.history.push("/search");
          //window.location.reload();
          console.log(response.data);
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    return (
      <div>
      <div className="homecontainer">
      </div>
      <section className="vh-100" style={{ backgroundColor: "#C3CCC6", backgroundImage:
                    "url('https://i.pinimg.com/originals/cc/a5/02/cca5022c86f67861746d7cf2eb486de8.gif')" }}>
       <div className="container py-5 h-100">
       <div className="row d-flex justify-content-center align-items-center h-100" style={{marginRight:"60%"}}>
              <div className="col-14 col-md-8 col-lg-8 col-xl-12">
              <div
                  className="card shadow-2-strong"
                  style={{ borderRadius: "1rem" ,backgroundColor: "#BEE0F1"}}
                >
                  <div className="card-body p-5 text-center">
                    <h3 className="mb-5">SignIn</h3>
                    <div className="form-outline mb-4">
          <Form
            onSubmit={this.handleLogin}
            ref={c => {
              this.form = c;
            }}
          >
            <div className="form-group">
              <label htmlFor="username"  className="form-label" style={{marginRight:"70%"}} >Username</label>
              <Input
                type="text"
                placeholder="Enter Your UserName"
                className="form-control form-control-lg"
                name="username"
                value={this.state.username}
                onChange={this.onChangeUsername}
                validations={[required]}
              />
            </div>

            <div className="form-outline mb-4">
              <label htmlFor="password" className="form-label" style={{marginRight:"70%"}} >Password</label>
              <Input
                type="password"
                placeholder="Enter Your Password"
                className="form-control form-control-lg"
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[required]}
              />
            </div><br />

            <div className="form-group">
              <button
                className="btn btn-primary btn-block"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
            </div>

            {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            /><div >
              Don't have an account ?
              <NavLink  to="/register">Sign Up</NavLink>
            </div>
          </Form>
        </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      </div>
    );
  }
}
export default withRouter(Login);