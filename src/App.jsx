import { Header } from "./components/Header"
import { Post } from "./Post"

import styles from './App.module.css'

import './global.css'
import { Sidebar } from "./components/Sidebar"

function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            author="Lorem II"
            content="Aute ipsum amet consequat officia pariatur laborum aute nulla pariatur ullamco. Cupidatat veniam cillum excepteur qui ad ad elit consequat magna duis laborum est exercitation deserunt. Occaecat ad anim aliqua culpa enim nulla elit in exercitation voluptate est."
          />

          <Post
            author="Lorem II"
            content="Aute ipsum amet consequat officia pariatur laborum aute nulla pariatur ullamco. Cupidatat veniam cillum excepteur qui ad ad elit consequat magna duis laborum est exercitation deserunt. Occaecat ad anim aliqua culpa enim nulla elit in exercitation voluptate est."
          />

          <Post
            author="Lorem II"
            content="Aute ipsum amet consequat officia pariatur laborum aute nulla pariatur ullamco. Cupidatat veniam cillum excepteur qui ad ad elit consequat magna duis laborum est exercitation deserunt. Occaecat ad anim aliqua culpa enim nulla elit in exercitation voluptate est."
          />
        </main>

      </div>
    </div>
  )
}

export default App