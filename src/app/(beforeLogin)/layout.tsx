import { ReactNode } from "react";
import styles from '@/app/(beforeLogin)/_component/main.module.css'

type Props = {children:ReactNode, modal:ReactNode};

export default function Layout ({children, modal}:Props){
    return(
        <div>
            beforelayout
            <div className={styles.container}>
            {children}
            {modal}
            </div>
        </div>
    );
}