import { Post } from "./Post";
import { Header } from "./components/Header";

import styles from './App.module.css'

import './global.css'
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />


      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Vinicius Maclters"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem reiciendis, quod fugit accusantium quo omnis perferendis doloremque. Quasi natus odio sed"
          />

          <Post 
            author="Matheus Maclters"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem reiciendis, quod fugit accusantium quo omnis perferendis doloremque. Quasi natus odio sed"
          />
        </main>
      </div>
    </div>
  )
}