import { Fragment } from "react";
import styles from "./student.module.css";
import {TiTickOutline} from "react-icons/ti"
export function Student(){
    return(
        <Fragment>
            <form className={styles.formBox}>
                   <input spellCheck="false" className={styles.inputBox}/>
                   <input spellCheck="false" className={styles.inputBox}/>
                   <input spellCheck="false" className={styles.inputBox}/>
                   <input spellCheck="false" className={styles.inputBox}/>
                   <input type="submit" className={styles.inputBox}/>
            </form>
            <button className={styles.tableBtn}>Tabel</button>
        </Fragment>
    )
}