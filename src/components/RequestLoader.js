import React, { useState } from 'react';
const API_URL = 'https://3ok3fit9e1.execute-api.us-east-2.amazonaws.com/loadup/loadup/api/submit-request';


const RequestLoader = () => {
  const [formData, setFormData] = useState({
    location: '',
    number: '',
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    items: []
  });

  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [confirmationNumber, setConfirmationNumber] = useState('');
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleItemChange = (e) => {
    const { name, value } = e.target;
    if (name === 'item') {
      setItem(value);
    } else if (name === 'quantity') {
      setQuantity(value);
    }
  };

  const handleAddItem = () => {
    if (item && quantity) {
      setFormData(prevState => ({
        ...prevState,
        items: [...prevState.items, { item, quantity }]
      }));
      setItem('');
      setQuantity('');
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state
  
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
  
      if (!response.ok) {
        const errorData = await response.json(); // Try to get the error message from the response
        throw new Error(errorData.error || 'Failed to submit request');
      }
  
      const data = await response.json();
      console.log('Response Data:', data);
  
      if (data.success) {
        setConfirmationNumber(data.confirmationNumber);
        setShowPopup(true);
        console.log('Popup should be shown');
      } else {
        throw new Error(data.message || 'Request failed');
      }
    } catch (error) {
      console.error('Error:', error.message || error);
      setError('Your request could not be submitted. Please try again later.');
    }
  };
  
  
  
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <section id="request-loader" className="request-loader">
      <div className="container">
        <h2>Request a Loader</h2>
        <div className="form-container">
          <div className="form-left">
            <form id="requestLoaderForm" onSubmit={handleSubmit}>
              {/* Form fields */}
              <label htmlFor="location">Location* :</label>
              <input 
                type="text" 
                id="location" 
                name="location" 
                value={formData.location} 
                onChange={handleChange} 
                required 
              />
              <label htmlFor="number">Slip Number :</label>
              <input 
                type="text" 
                id="number" 
                name="number" 
                value={formData.number} 
                onChange={handleChange} 
              />
              <label htmlFor="name">Name* :</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
              <label htmlFor="email">Email*:</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
              <label htmlFor="phone">Phone Number*:</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                required 
              />
              <label htmlFor="date">Preferred Date* :</label>
              <input 
                type="date" 
                id="date" 
                name="date" 
                value={formData.date} 
                onChange={handleChange} 
                required 
              />
              <label htmlFor="time">Preferred Time* :</label>
              <input 
                type="time" 
                id="time" 
                name="time" 
                value={formData.time} 
                onChange={handleChange} 
                required 
              />
              <button 
                type="submit" 
                className="submit-button btn-primary"
              >
                Submit Request
              </button>
            </form>
          </div>
          <div className="form-right">
            {/* Item addition form */}
            <h3>Your Item(s)*</h3>
            <form id="itemForm" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="item">Item:</label>
              <input 
                type="text" 
                id="item" 
                name="item" 
                value={item} 
                onChange={handleItemChange} 
                placeholder="Item name" 
              />
              <label htmlFor="quantity">Quantity:</label>
              <select 
                id="quantity" 
                name="quantity" 
                value={quantity} 
                onChange={handleItemChange}
              >
                <option value="">Select Quantity</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <button 
                type="button" 
                onClick={handleAddItem} 
                className="btn-secondary"
              >
                Add Item
              </button>
            </form>
            <div className="item-list">
              {formData.items.map((i, index) => (
                <div key={index} className="item">
                  <span>{i.item}</span> - <span>{i.quantity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {error && <p className="error-message">{error}</p>}
        {showPopup && (
          <div className="confirmation-popup">
            <div className="popup-content">
              <span className="popup-close" onClick={handleClosePopup}>&times;</span>
              <h3>Order Placed</h3>
              <p>Your request has been received. A confirmation has been sent to your <strong>email</strong>. Someone will reach out to you about your order soon.</p>
              <p>Your confirmation number is: <span>{confirmationNumber}</span></p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RequestLoader;
