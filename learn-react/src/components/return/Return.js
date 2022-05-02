import { useNavigate } from "react-router-dom";
import styles from "./Return.module.css";
import classNames from "classnames";
import PropTypes from "prop-types";

function Return({ title }){
    const navigate = useNavigate();
    // navigate(number) --> go function
    // -1 goBack, -2 goBack*2, 1 goForward etc...

    const goBack = () => navigate(-1);
    return (
        <div>
            <h1>{title}</h1>
            <img
                className={classNames(styles.back__img)}
                alt="arrow"
                src={require("../../assets/arrow.png")}
                onClick={goBack}
            />
        </div>
    );
}

Return.propTypes = {
    title : PropTypes.string.isRequired
}

export default Return;
