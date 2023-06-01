import styles from "./Button.module.scss";

interface IButton {
    content: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    style?: React.CSSProperties;
}

export const Button = (props: IButton) => {
    return (
        <button className={styles.button} onClick={props.onClick} style={props.style}>
            {props.content}
        </button>
    );
};
