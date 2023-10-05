import React from 'react';
import Footer from '../../components/general/Footer';
import TopbarNavigation from '../../components/general/TopbarNavigation';

function LayoutGeneral({children}: {children: React.ReactNode}) {
  return (
    <React.Fragment>
      <header>
        <TopbarNavigation />
      </header>
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
}

export default LayoutGeneral;
