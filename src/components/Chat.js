import React, { useEffect, useRef, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import { db } from "../Firebase.config";
import Sendmessage from "./Sendmessage";
import Message from "./Message";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import ScrollIntoView from 'react-scroll-into-view';


function Chat() {
  const [messages, setMessages] = useState([]);
  const scroll = useRef(null);
  const auth = getAuth();
  const [user] = useAuthState(auth); // Get the authenticated user

  useEffect(() => {
    const qu = query(collection(db, "messages"), orderBy("createdAt", "desc"), limit(50));
    const changesondoc = onSnapshot(qu, (QuerySnapshot) => {
     
console.log("QuerySnapshot:", QuerySnapshot);
      let fetchedmessages = [];
      QuerySnapshot.forEach((doc) => {
        fetchedmessages.push({ ...doc.data(), id: doc.id });
        console.log("fetchedmessages:", fetchedmessages);
      });

      const sortmsg = fetchedmessages.sort((a, b) => a.createdAt - b.createdAt);
      setMessages(sortmsg);
    


      
    });
 


    return () => changesondoc;
  }, []);

  return (
    <>
      <main className="chat-box "  ref={scroll}>
        <div className="messages-wrapper">
        {messages?.map((message) => (
  <div className={`chat-bubble ${message.uid === user?.uid ? 'right' : ''}`} key={message.id}>
    <img className="chat-bubble__left" src={message.avatar} alt="user avatar" />
    <div className="chat-bubble__right">
      <p className="user-name">{message.name}</p>
      <p className="user-message">{message.text ? message.text.toString() : ""}</p>
  
    </div>
  </div>
))}


        </div>
        <span ref={scroll}></span>
        {/* when a new message enters the chat, the screen scrolls down to the scroll div */}
        <Sendmessage scroll={scroll} />

      </main>
    </>
  );
}

export default Chat;
