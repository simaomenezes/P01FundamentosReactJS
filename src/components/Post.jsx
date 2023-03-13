import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src='https://avatars.githubusercontent.com/u/625433?s=96&v=4'/>
                    <div className={styles.authorInfo}>
                        <strong>Simão Neto</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title='09 de março às 20:51' dateTime='2023-03-09 20:51'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
            <p>Fala galeraa 👋</p>

            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

            <p>👉 {' '}  <a href=''>jane.design/doctorcare</a> {' '} 
                <a href=''>#novoprojeto</a>{' '} 
                <a href=''>#nlw</a>{' '} 
                <a href=''>#rocketseat</a>
            </p> 

            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder='Deixe seu comentário'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

        </article>
    )
}