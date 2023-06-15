import React from "react";
import piggy from "../assets/porco.png";

const Nav = ({ onToggleGreased, onSortBy, onShowForm }) => {
  return (
    <div className="navWrapper">
      <span className="headerText">HogWild</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">
        A React App for County Fair Hog Fans
      </span>

      
	  <div className="filterWrapper">
        <label>
			    <div className="padded">
          		<input type="checkbox" onChange={onToggleGreased} />
          		Filter greased
		  	  </div>
        </label>
        <label>
          Sort by
          <select onChange={(e) => onSortBy(e.target.value)}>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>
        </label>
        <div className="padded">
          <button onClick={onShowForm}>Add Hog - Show/Hide Form</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
