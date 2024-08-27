import React from 'react';
import Header from '../../components/header/ui/header.component';
import Footer from '../../components/footer/ui/footer.components';
import styles from './layout.module.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        {children} 
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
