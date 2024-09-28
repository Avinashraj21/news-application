import React from 'react';

function Loader({ message = 'Loading...', size = 'medium', color = 'blue' }) {
  return (
    <div className='loader-overlay'>
      <div className={`loader-container w-full absolute flex flex-col justify-center items-center top-0 left-0`} role="status" aria-live="polite">
        <span className={`loader ${color} ${size}`}></span>
        <p className="loader-message">{message}</p>
      </div>
    </div>
  );
}

export default Loader;
