import React, { useState } from 'react';

const TourItem = ({
  tour: { name, image, id, price, info },
  deleteHandler,
}) => {
  const [readMore, setReadMore] = useState(false);

  const readMoreHandler = () => {
    setReadMore(true);
  };

  const readLessHandler = () => {
    setReadMore(false);
  };

  return (
    <div className='single-tour'>
      <img src={image} alt='' />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <div className='tour-price'>${price}</div>
        </div>
        <p style={{ fontSize: '1rem' }}>
          {readMore ? (
            <>
              {info}
              <button onClick={readLessHandler}>Show Less</button>
            </>
          ) : (
            <>
              {info.substring(0, 200)}...
              <button onClick={readMoreHandler}>Read More</button>
            </>
          )}
        </p>
        <button onClick={() => deleteHandler(id)} className='delete-btn'>
          Not Interested
        </button>
      </footer>
    </div>
  );
};

export default TourItem;
