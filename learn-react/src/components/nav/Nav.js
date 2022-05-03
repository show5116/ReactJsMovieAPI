import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

function Nav({slide}){

    return (
        <React.Fragment>
            <Link to="/movie"><span onClick={slide}>MovieApp</span></Link>
            <Link to="/todo"><span onClick={slide}>ToDoList</span></Link>
            <Link to="/coin"><span onClick={slide}>CoinTracker</span></Link>
            <Link to="/cleanUp"><span onClick={slide}>CleanUpExam</span></Link>
            <Link to="/useEffect"><span onClick={slide}>UseEffectExam</span></Link>
        </React.Fragment>
    );
}

Nav.propTypes = {
  onClick : PropTypes.func
};

export default Nav;
