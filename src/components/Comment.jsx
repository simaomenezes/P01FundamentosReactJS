import { ThumbsUp, Trash } from "phosphor-react";

import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img className={styles.avatar} src='https://avatars.githubusercontent.com/u/625433?s=96&v=4'/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Simao Neto</strong>
                            <time title='09 de março às 20:51' dateTime='2023-03-09 20:51'>Cerca de 1h atrás</time>
                        </div>
                        <button title="Deletar comentário">
                            <Trash size={20}/>
                        </button>
                    </header>

                    <p>Muito bom, Devon, parabéns!!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>            
        </div>
    )
}