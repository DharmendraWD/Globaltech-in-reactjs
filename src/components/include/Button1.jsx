// src/components/include/Button1.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button1 = ({ id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product-details/${id}`);
  };

  return (
    <button onClick={handleClick} className="btn btn-primary">
      Know More
    </button>
  );
};

export default Button1;
