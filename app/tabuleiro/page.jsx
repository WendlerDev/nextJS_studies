import styles from "../tabuleiro/Tab.module.css"
import Line from "../../../components/Line/Line"

export default function Hometab() {
    return (
        <>
            <div className={styles.container}>
                <Line />
            </div>
        </>
    )
}