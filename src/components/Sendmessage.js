import React, { useState } from 'react';
import { getAuth } from 'firebase/auth';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../Firebase.config';
import { toast } from 'react-toastify';

const Sendmessage = ({scroll}) => {
  const [sendmsg, setSendmsg] = useState('');
  const auth = getAuth();

  const onChange = (e) => {
    setSendmsg(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      if (sendmsg.trim() === '') {
        alert('Enter a valid message');
        return;
      }

      const { uid, displayName, photoURL } = auth.currentUser;
      await addDoc(collection(db, 'messages'), {
        text: sendmsg,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid,
      });

      setSendmsg('');
    } catch (error) {
      toast.error('Something went wrong');
      console.log(error);
    }
  };

  return ( <>
    <form onSubmit={onSubmit}>
      <label htmlFor="sendmsg" hidden>
        Enter Message
      </label>
      <input
        id="sendmsg"
        name="sendmsg"
        type="text"
        value={sendmsg}
        className="form-input__input"
        placeholder="Type your message"
        onChange={onChange}
      />

      <button type="submit">Send</button>
\
    </form> <span ref={scroll}></span>

    
    </>
  );
};

export default Sendmessage;
