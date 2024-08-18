import React from 'react';

const Newsletter = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;

    // Example POST request (adjust the URL to your server endpoint)
    fetch('/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then(response => response.text())
      .then(result => {
        console.log(result); // Handle successful response
        alert('Subscription successful');
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Subscription failed');
      });
  };

  return (
    <section className="newsletter">
      <div className="container">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Stay updated with the latest news and offers by subscribing to our newsletter.</p>
        <form id="newsletterForm" onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
