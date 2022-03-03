import React, { useState } from 'react';

export default function EmailCapture() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`User email test: ${email}`);

    await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        email 
      })
    })

    setEmail(''); // reset email input
    location.replace('/thanks');
  }

  return(
    <div className={`h-fit p-2 mb-12 flex flex-col`}>
      <div className={`my-4`}>
        <h1 className={`text-3xl`}>Never miss a beat</h1>
        <p>Get news, weekly show roundups, and exclusive content delivered right to your inbox.</p>
      </div>
      <form className={`flex flex-col sm:items-center sm:flex-row`} onSubmit={handleSubmit}>
          <input
            required
            pattern='^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'
            className={`w-full h-12 sm:w-96 mx-auto sm:mx-0`} 
            type='email'
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <button 
            className={`px-6 h-12 w-40 mx-auto sm:mx-2 my-2 text-white bg-red-light uppercase hover:bg-red-dark hover:cursor-pointer`} 
            type="submit" 
            value="Sign up">
              Sign up
          </button>
      </form>
    </div>
  );
}