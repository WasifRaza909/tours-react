import React, { useEffect, useState } from 'react';
import Loading from './components/Loading';
import Tours from './components/Tours';
import './App.css';

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = 'https://course-api.com/react-tours-project';

  const loadingTours = async () => {
    setLoading(true);
    const res = await fetch(url);
    const json = await res.json();
    setLoading(false);
    setTours(json);
  };

  const deleteHandler = (id) => {
    const filterTours = tours.filter((tour) => tour.id !== id);

    setTours(filterTours);
  };

  useEffect(() => {
    loadingTours();
  }, []);

  return (
    <main>
      {loading ? (
        <Loading />
      ) : (
        <>
          {tours.length === 0 ? (
            <div className='title'>
              <h2>No Tours Left</h2>
              <button onClick={loadingTours} className='btn'>
                Refresh
              </button>
            </div>
          ) : (
            <>
              <div className='title'>
                <h2>Our Tours</h2>
                <div className='underline'></div>
              </div>
              <Tours tours={tours} deleteHandler={deleteHandler} />
            </>
          )}
        </>
      )}
    </main>
  );
}

export default App;
