import React, { useState } from 'react';
import Seat from './Seat';

const Coach = () => {

  const totalSeats = 80; //total number of seats
  const seatsInRow = 7;   // seats in a row
  const totalRows = Math.ceil(totalSeats / seatsInRow);  // inbuilt function

  const [seats, setSeats] = useState(Array(totalSeats).fill('available'));
  const [numSeatsToReserve, setNumSeatsToReserve] = useState(1);

  // this is react hook allows us to track state in a function component.

  const reserveSeats = () => {
    const updatedSeats = [...seats];
    let count = 0;

    for (let i = 0; i < totalSeats; i++) {
      if (updatedSeats[i] === 'available') {
        updatedSeats[i] = 'reserved';
        count++;

        if (count === numSeatsToReserve) {
          break;
        }
      }
    }

    setSeats(updatedSeats);
  };

  

  const handleNumSeatsChange = (event) => {
    const { value } = event.target;
    setNumSeatsToReserve(parseInt(value, 10));
  };

  const renderSeats = () => {
    const seatRows = [];

    for (let row = 0; row < totalRows; row++) {
      const seatRow = [];
      for (let seatIndex = row * seatsInRow; seatIndex < (row + 1) * seatsInRow; seatIndex++) {
        const seatStatus = seats[seatIndex];
        seatRow.push(
          <Seat
            key={seatIndex}
            number={seatIndex + 1}
            status={seatStatus}
            onClick={reserveSeats}
          />
        );
      }
      seatRows.push(<div key={row} className="row">{seatRow}</div>);
    }

    return seatRows;
  };

  return (
    <div className="coach">
      <h2>Seat Reservation</h2>
      <div className="seat-container">
        {renderSeats()}
      </div>
      <div className="reservation-form">
        <label htmlFor="numSeats">Number of Seats:</label>
        <input
          type="number"
          id="numSeats"
          name="numSeats"
          min="1"
          max="7"
          value={numSeatsToReserve}
          onChange={handleNumSeatsChange}
        />
        <button onClick={reserveSeats}>Reserve Seats</button>
      </div>
    </div>
  );
};

export default Coach;
