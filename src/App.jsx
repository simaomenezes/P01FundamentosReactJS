import { Header } from "./components/Header"
import { Post } from "./Post"

import './styles.css'

function App() {
  return (
    <div>
      <Header/>
      <Post
        author="Fulano de tal"
        content="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
      />

      <Post
        author="Fulano de tal"
        content="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
      />
    </div>
  )
}

export default App