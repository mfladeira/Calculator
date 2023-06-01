import { useState } from "react";
import { Button } from "../Button/Button";
import { Display } from "../Display/Display";
import styles from "./Calculator.module.scss";

export const Calculator = () => {
    const [textDisplay, setTextDisplay] = useState("0");

    const digits = ["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "C", "0", "=", "/"];

    const sum = () => {
        const result = Function("return " + textDisplay)();
        setTextDisplay(`${result % 1 == 0 ? result : result.toFixed(2)}`);
    };

    return (
        <div className={styles.calculator}>
            <Display content={textDisplay} />
            <div className={styles.containerDigits}>
                {digits.map((item) => {
                    let onClickButton = () =>
                        setTextDisplay(
                            textDisplay.startsWith("0") && !textDisplay.startsWith("0.") ? item : textDisplay + item
                        );
                    if (item === "C") onClickButton = () => setTextDisplay("0");
                    if (item === "=") onClickButton = sum;

                    return (
                        <div key={item} className={styles.containerDigit}>
                            <Button style={{ width: 50, height: 45 }} content={item} onClick={onClickButton} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
