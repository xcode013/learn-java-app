import {Fragment, ReactNode} from 'react';

function Paragraph({value}: {value: ReactNode}) {
  return (
    <Fragment>
      <p className="p-3 px-7 bg-neutral-200 dark:bg-neutral-800 text-sm">
        {value}
      </p>
    </Fragment>
  );
}

export default Paragraph;
