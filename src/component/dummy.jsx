import React, { useState } from "react";
import styled from "styled-components";
import facebook from "../assets/facebook.svg";

export default function About() {
  const [isLogin, setIsLogin] = useState(false);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const onSubmit = () => {
    alert("Login successful");
    setIsLogin(true);
  };

  return (
    <div>
      {isLogin ? (
        <>
          <p>Welcome to your dashboard page</p>
        </>
      ) : (
        <>
          <Main>
            <div>
              <img src={facebook} alt="" />
              <p>
                Facebook helps you connect and share with the people in your
                life.
              </p>
            </div>

            <div>
              <Form onSubmit={onSubmit}>
                <input
                  type="text"
                  placeholder="Enter email address or password"
                  id="email"
                  onChange={onChange}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  onChange={onChange}
                  required
                />
                <button>Log in</button>
                <a href="#">Forgotten password?</a>
                <button>Create new account</button>
              </Form>
            </div>
          </Main>
        </>
      )}
    </div>
  );
}

const Main = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f0f2f5;
  height: 80vh;
  align-items: center;
`;
const Form = styled.form`
  background-color: white;
  display: flex;
  flex-flow: column;
  /* padding: 1rem; */
  gap: 0.5rem;
  width: 100%;
  padding: 5rem 2rem