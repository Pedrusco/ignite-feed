import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src='https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50'
        alt=''
      />
      <div className={styles.profile}>
        <Avatar src='https://github.com/pedrusco.png' />

        <strong>Pedro Fernandes</strong>
        <span>Frontend Developer</span>

        <footer className={styles.footer}>
          <a href='#'>
            <PencilLine size={14} />
            Editar seu perfil
          </a>
        </footer>
      </div>
    </aside>
  );
}
