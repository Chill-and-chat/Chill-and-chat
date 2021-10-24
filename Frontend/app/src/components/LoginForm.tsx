import React from "react";
import "./style/LoginForm.css";

interface Props {
  formPlaceHolder: string;
  formLabel: string;
  password: string;
}

export const LoginForm = (props: Props) => {
  if (props.password === "true") {
    return (
      <div id="container">
        <p id="label">{props.formLabel}</p>
        <input
          placeholder={props.formPlaceHolder}
          id="textBox"
          type="password"
        />
      </div>
    );
  } else {
    return (
      <div id="container">
        <p id="label">{props.formLabel}</p>
        <input placeholder={props.formPlaceHolder} id="textBox" />
      </div>
    );
  }
};
