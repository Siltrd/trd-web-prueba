import React from 'react';
import styles from '../styles/notFound.module.css';  // Importar el CSS como módulo

const NotFound = () => {
  return (
    <div className={styles.notFoundContainer}>  {/* Usamos styles.notFoundContainer */}
      <h1 className={styles.notFoundTitle}>404 - Página no encontrada</h1>  {/* Usamos styles.notFoundTitle */}
      <p className={styles.notFoundMessage}>Lo sentimos, la página que buscas no existe.</p>  {/* Usamos styles.notFoundMessage */}
    </div>
  );
};

export default NotFound;
