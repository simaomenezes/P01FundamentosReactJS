import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1577375729078-820d5283031c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"/> 

            <div className={styles.profile}>
                <img className={styles.avatar} src='https://avatars.githubusercontent.com/u/625433?s=96&v=4'/>
                <strong>Tryonn Neto</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilLine/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}