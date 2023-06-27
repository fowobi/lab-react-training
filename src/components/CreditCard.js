import React from 'react';


const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  const formatCardNumber = (number) => {
    if (number) {
      const lastFourDigits = number.slice(-4);
      return `**** **** **** ${lastFourDigits}`;
    }
    return '';
  };

  return (
    
    <div
      className="credit-card"
      style={{
        backgroundColor: bgColor,
        color: color,
      }}
    >
      <div className="card-type">{type}</div>
      <div className="card-number">{formatCardNumber(number)}</div>
      <div className="card-info">
        <div>
          <div className="expiration">Expires</div>
          <div className="expiration-date">
            {expirationMonth && expirationMonth.toString().padStart(2, '0')}/
            {expirationYear && expirationYear.toString().slice(-2)}
          </div>
        </div>
        <div>
          <div className="bank">Bank</div>
          <div className="bank-name">{bank}</div>
        </div>
      </div>
      <div className="card-owner">{owner}</div>
    </div>
  
  );
};

export default CreditCard;
