import { Post } from "./Post";
import { Header } from "./components/Header";

import './global.css'

export function App() {
  return (
    <div>
      <Header />

      <Post 
        author="Vinicius Maclters" 
        content="Lorem ipslum"
      />

      <Post
        author="Matheus Maclters"
        content="Mais um post top"  
      />
    </div>
  )
}