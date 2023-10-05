import React from 'react';
import Topbar from '../../components/learning/Topbar';
import TopbarNavigation from '../../components/general/TopbarNavigation';

interface LayoutDocsProps {
  children: React.ReactNode | React.ReactElement;
}

function LayoutDocs({children}: LayoutDocsProps) {
  return (
    <React.Fragment>
      <header>
        <TopbarNavigation />
        <Topbar />
      </header>
      <main>{children}</main>
    </React.Fragment>
  );
}

export default LayoutDocs;
