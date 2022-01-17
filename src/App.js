import { useState } from 'react';
import './App.css';
import { FiEdit } from 'react-icons/fi';
import { BiHeart } from 'react-icons/bi';
import { BsTrash } from 'react-icons/bs';
function App() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="list">
      <div className="user">
        <div className="imgBox">
          <img
            src="https://cdn.pixabay.com/photo/2020/11/10/15/46/man-5730206_960_720.png"
            alt=""
          />
        </div>
        <div className="details">
          <h3>John Kingston</h3>
          <p>CyberPunk Engineer</p>
        </div>
      </div>
      <div
        className={`navigation ${isActive ? 'active' : ''}`}
        onClick={handleClick}
      >
        <span>
          <FiEdit className="icon" />
        </span>
        <span>
          <BiHeart className="icon" />
        </span>
        <span>
          <BsTrash className="icon" />
        </span>
      </div>
    </div>
  );
}

export default App;
