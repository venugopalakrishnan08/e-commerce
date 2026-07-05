import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../config/api';
import { ShopContext } from '../Context/ShopContext';

export const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();
  const { login } = useContext(ShopContext);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const validate = () => {
    if (state === "Sign Up" && formData.name.trim().length < 2) {
      return "Please enter your name";
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      return "Please enter a valid email";
    }
    if (formData.password.length < 6) {
      return "Password must be at least 6 characters";
    }
    if (state === "Sign Up" && !agreed) {
      return "Please agree to the terms of use & privacy policy";
    }
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    const endpoint = state === "Login" ? "/api/users/login" : "/api/users/register";
    const payload = state === "Login" 
      ? { email: formData.email, password: formData.password } 
      : formData;

    setSubmitting(true);
    setError("");
    try {
      const data = await api.post(endpoint, payload);
      login(data.token, data.user);
      navigate("/");
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <form onSubmit={handleSubmit} className="loginsignup-fields">
          {state === "Sign Up" && (
            <input 
              type="text" 
              placeholder='Your Name' 
              name='name' 
              value={formData.name} 
              onChange={changeHandler} 
            />
          )}
          <input 
            type="email" 
            placeholder='Email Address' 
            name='email' 
            value={formData.email} 
            onChange={changeHandler} 
          />
          <input 
            type="password" 
            placeholder='Password' 
            name='password' 
            value={formData.password} 
            onChange={changeHandler} 
          />
          {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}
          <button type="submit" disabled={submitting}>
            {submitting ? "Processing..." : "Continue"}
          </button>
        </form>
        {state === "Sign Up" ? (
          <p className="loginsignup-login">
            Already have an account? <span onClick={() => setState("Login")}>Login here</span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Create an account? <span onClick={() => setState("Sign Up")}>Click here</span>
          </p>
        )}
        {state === "Sign Up" && (
          <div className="loginsignup-agree">
            <input 
              type="checkbox" 
              name='agree' 
              id='agree' 
              checked={agreed} 
              onChange={(e) => setAgreed(e.target.checked)} 
            />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
        )}
      </div>
    </div>
  );
};