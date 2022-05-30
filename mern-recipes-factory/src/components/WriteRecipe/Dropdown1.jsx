import { useState } from "react";
import styles from "./styles.css";
import "./writeRecipe.css";

function Dropdown1({ selected, setSelected, options }) {

    const [isActive, setIsActive] = useState(false);

    return (
        <div className={styles.dropdown}>
            <div className={styles.dropdown_btn} onClick={(e) => setIsActive(!isActive)}>
                {selected}
                <span className={styles.fas_fa_caret_down}></span>
            </div>
            {isActive && (
                <div className={styles.dropdown_content} >
                        {options.map((option) => (
                            <div
                                onClick={(e) => {
                                    setSelected(option);
                                    setIsActive(false);
                                }}
                                className=" writeDropdown"
                             >
                                {option}
                            </div>
                    ))}
                        
                </div>
            )}
        </div>
    );
}

export default Dropdown1;
