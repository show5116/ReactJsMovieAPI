import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({text , func}){
    return (
      <button
        className={styles.btn}
        onClick={func}>
          {text}
      </button>
    );
}

Button.propTypes = {
    text : PropTypes.string.isRequired,
    func : PropTypes.func
};

export default Button;
