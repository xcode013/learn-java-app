import {Fragment, ReactNode} from 'react';

export default function Header({value}: {value: ReactNode}) {
  return (
    <Fragment>
      <h1 className="text-xl font-bold py-1 px-3 border-b-2 border-blue-600">
        {value}
      </h1>
    </Fragment>
  );
}
