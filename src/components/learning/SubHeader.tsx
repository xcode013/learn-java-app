import {Fragment, ReactNode} from 'react';

function SubHeader({value}: {value: ReactNode}) {
  return (
    <Fragment>
      <h2 className="text-base font-bold py-1 px-10 text-blue-400 before:absolute before:bg-black dark:before:bg-white before:w-2 before:aspect-square before:rotate-45 before:top-1/2 before:-translate-y-1/2 relative before:left-5">
        {value}
      </h2>
    </Fragment>
  );
}

export default SubHeader;
