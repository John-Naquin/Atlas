import React from 'react';

const DescriptionCard = ({ title, children }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-4 text-black">
      {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
      <div>{children}</div>
    </div>
  );
};

export default DescriptionCard;
