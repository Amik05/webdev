import React, { useState } from "react";

function InputName() {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handlePaymentChange = (event) => {
    setPayment(event.target.value);
  };

  const handleShippingChange = (event) => {
    setShipping(event.target.value);
  };

  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <h2>Your name is: {name}</h2>
      <input type="number" value={quantity} onChange={handleQuantityChange} />
      <h2>Quantity: {quantity}</h2>
      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Enter shipping info"
      ></textarea>
      <h2>Comment: {comment}</h2>
      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select Payment Method</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
      </select>
      <h2>Payment Method: {payment}</h2>
      <label>
        <input
          type="radio"
          value="Pick Up"
          checked={shipping === "Pick Up"}
          onChange={handleShippingChange}
        />
        Pick Up
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={handleShippingChange}
        />
        Delivery
      </label>
      <h2>Shipping Method: {shipping}</h2>
    </div>
  );
}

export default InputName;
