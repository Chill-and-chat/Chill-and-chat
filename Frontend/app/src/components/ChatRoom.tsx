//Importing packages
import React, { useState } from "react";
import { InputField } from "./InputField";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers/index";
import { Redirect } from "react-router-dom";
import { SendButton } from "./SendButton";
import { UserBar } from "./UserBar";
import { ChatBubble } from "./ChatBubble";
import { send } from "../scripts/send";
import { v4 as uuid } from "uuid";
import { Menu } from "./Menu";
import "./style/ChatRoom.css";

//Chat room component
export const ChatRoom: React.FC = () => {

  //State
  let [view, setView] = useState<boolean>(false);

  //Data management variables
  let textBoxData: string | undefined = undefined;

  //Redux state
  const username = useSelector((state: RootState) => {
    return state.username;
  });
  const authenticated = useSelector((state: RootState) => {
    return state.login;
  });

  //Render user component
  if (view) {
    return (
      <div>
        {/*UserBar*/}
        <UserBar
          viewOnClick={() => {
            //Change state
            setView(false);
          }}
        />
      </div>
    );
  }
  //Redirect user if not authenticated
  if (!authenticated) {
    return (
      <div>
        {/*Redirect user*/}
        <Redirect to="/" />
      </div>
    );
  }
  //Render default component
  return (
    <div id="chatRoom">
      {/*Menu*/}
      <Menu
        viewOnClick={() => {
          //Change state
          setView(true);
        }}
      />
      <ChatBubble />
      {/*Send bar*/}
      <div id="sendBar">
        {/*Input field*/}
        <InputField
          placeholder="Type a message..."
          onChangeEvent={(e: any) => {
            textBoxData = e.target.value;
          }}
        />
        {/*Send button*/}
        <SendButton
          onclick={() => {
            //Send message
            send({ id: uuid(), user: username, content: textBoxData });
          }}
        />
      </div>
    </div>
  );
};
