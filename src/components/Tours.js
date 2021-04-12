import React from 'react';
import TourItem from './TourItem';

const Tours = ({ tours, deleteHandler }) => {
  return tours.map((tour) => (
    <TourItem deleteHandler={deleteHandler} key={tour.id} tour={tour} />
  ));
};

export default Tours;
