import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });
    if (response.ok) {
      setShowPopup(true); // Show popup on success
    } else {
      alert('Failed to send email. Please try again.');
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Name"
        />
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email"
        />
        <textarea 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          placeholder="Message"
        />
        <button type="submit">Send</button>
      </form>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="popup-close" onClick={handleClosePopup}>&times;</span>
            <h3>Order Sent</h3>
            <p>Your message has been sent successfully. We will get back to you shortly.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Form;
