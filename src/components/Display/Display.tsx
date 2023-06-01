import styles from "./Display.module.scss";

interface IDisplay {
    content: string;
}

export const Display = (props: IDisplay) => {
    return <div className={styles.display}>{props.content}</div>;
};
