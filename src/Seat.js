import React from 'react';

const Seat = ({ number, status, onClick }) => {
  const seatStyle = {
    backgroundColor: status === 'available' ? 'green' : 'red',
    cursor: status === 'available' ? 'pointer' : 'not-allowed',
  };

  return (
    <div className="seat" style={seatStyle} onClick={onClick}>
      {number}
    </div>
  );
};

export default Seat;
