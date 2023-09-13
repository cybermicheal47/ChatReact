import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { toast } from 'react-toastify';

function Forgotpassword() {
  const [email, setEmail] = useState('');

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success('Password reset email was sent successfully.');
    } catch (error) {
      toast.error('Unable to send the password reset link. Please try again.');
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Forgot Password</h1>
      <main>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            placeholder="Email"
            id="email"
            value={email}
            onChange={onChange}
            required
          />
          <br />
          <button type="submit">Reset Password</button>
        </form>
      </main>
      <Link to="/signin">SignIn</Link>
    </div>
  );
}

export default Forgotpassword;
