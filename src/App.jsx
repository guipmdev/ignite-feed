import "./global.css";

import styles from "./App.module.css";

import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./Post";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis explicabo natus perspiciatis expedita architecto sed quis nihil illum, magnam consequatur ipsum nobis vel amet eligendi quibusdam, repellat qui aliquam officiis?"
          />
          <Post
            author="Guilherme P Milék"
            content="Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta."
          />
        </main>
      </div>
    </div>
  );
}
