import React from "react";

function Customer({ image, content, link }) {
  return (
    <div className="customer-innovating">
      <img src={image} />
      <div className="customer-content-section">
        <div className="content-text-link">
          <div className="cutomer-contnet">
            <p>{content}</p>
          </div>
          <a href="">{link}</a>
        </div>
      </div>
    </div>
  );
}

export default Customer;
