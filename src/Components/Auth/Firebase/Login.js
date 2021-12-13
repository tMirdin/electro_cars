import { Link } from "react-router-dom";
import React from "react";
import { useAuth } from "../../../contexts/AuthContext";
import "./style/Login.css";
import PowersLap from "../../../assets/video/loginBack.mp4";

const Login = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    confirmPassword,
    setConfirmPassword,
    confirmPasswordError,
    userName,
    setUserName,
  } = useAuth();
  return (
    <>
      <video
        autoPlay
        loop
        muted
        width="100%"
        height="100%"
        className="videoLogin"
      >
        <source src={PowersLap} type="video/mp4" />
      </video>
      <section className="login">
        <div className="loginContainer">
          <h3>
            Добро пожаловать <br /> на регистрацию сайта ElectroCar!
          </h3>
          {!hasAccount ? (
            <>
              <label className="authLabel">Придумайте ник*</label>
              <input
                className="authInput"
                autoFocus
                type="text"
                required
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </>
          ) : null}
          <label className="authLabel">Email*</label>
          <input
            className="authInput"
            autoFocus
            type="text"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <p className="errorMsg">{emailError}</p>
          <label className="authLabel">Введите пароль*</label>
          <input
            className="authInput"
            autoFocus
            type="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <p className="errorMsg">{passwordError}</p>
          {!hasAccount ? (
            <>
              <label className="authLabel">Повторите пароль*</label>
              <input
                className="authInput"
                autoFocus
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
            </>
          ) : null}
          <p className="errorMsg">{confirmPasswordError}</p>

          <div className="btnContainer">
            {hasAccount ? (
              <>
                <button className="authButton" onClick={handleLogin}>
                  Войти
                </button>
                <p className="authP">
                  У вас нет аккаунта?
                  <span
                    className="authSpan"
                    onClick={() => setHasAccount(!hasAccount)}
                  >
                    Регистарция
                  </span>
                </p>
              </>
            ) : (
              <>
                {password === confirmPassword ? (
                  <>
                    <button className="authButton" onClick={handleSignUp}>
                      Зарегистрироваться
                    </button>
                    <p className="authP">
                      У вас уже есть аккаунт?
                      <span
                        className="authSpan"
                        onClick={() => setHasAccount(!hasAccount)}
                      >
                        Войти
                      </span>
                    </p>
                  </>
                ) : (
                  <p className="authP">Пароль не совпадает!</p>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
