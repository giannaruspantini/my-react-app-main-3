import React from 'react';

const ProvisioningExamples = () => {
  return (
    <section className="provisioning-examples" id="provisioning-examples">
      <div className="container">
        <h2>Choose Your Service</h2>
        <div className="examples-grid">
          <div className="example-card loader-service">
            <div className="card-image">
              <img src="loader-service.jpg" alt="Loader Service" />
            </div>
            <div className="card-content">
              <h3>Already Have Your Supplies?</h3>
              <p>Request a loader to pick up at your choosing, to load onto your boat. Perfect for those who have already procured their supplies and need assistance with loading.</p>
              <ul>
                <li>Enter Location and Slip Number</li>
                <li>Choose Date and Time</li>
                <li>Get Professional Loading Services</li>
              </ul>
            </div>
          </div>
          <div className="example-card delivery-loading">
            <div className="card-image">
              <img src="delivery-loading.jpg" alt="Delivery and Loading" />
            </div>
            <div className="card-content">
              <h3>Delivery & Loading</h3>
              <p>Select items and we will handle the delivery and loading directly to your yacht. Hassle-free provisioning at its best!</p>
              <ul>
                <li>Enter Your Items</li>
                <li>Schedule Delivery and Loading</li>
                <li>We buy at local stores and deliver to your boat</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvisioningExamples;
