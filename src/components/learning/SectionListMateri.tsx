import React from 'react';
import listDatas from '../../assets/datas/materiListDatas.json';
import {Link} from 'react-router-dom';

function SectionListMateri() {
  return (
    <React.Fragment>
      {listDatas.map((data, idm) => {
        return (
          <React.Fragment key={idm}>
            <section>
              <Link to={`/learning/${data.path_s}`}>
                <header className="bg-slate-300 text-black p-4 py-2 border-b border-slate-700">
                  <h1 className="font-bold text-2xl">{data.headline}</h1>
                </header>
              </Link>
              <main>
                {data.subheadlines?.map((subdata, id) => {
                  return (
                    <React.Fragment key={id}>
                      <Link
                        to={`/learning/${data.path}/${
                          subdata.path_ss ? subdata.path_ss : subdata.path
                        }`}>
                        <h3 className="p-3 py-1 pl-6 border-b border-slate-500 relative before:absolute before:bg-slate-300 before:top-0 before:bottom-0 before:w-0.5 before:left-4">
                          {subdata.subheadline}
                        </h3>
                      </Link>
                      <ul className="bg-slate-600">
                        {subdata.titles?.map((tdata, idt) => {
                          return (
                            <Link
                              key={idt}
                              to={`/learning/${data.path}/${subdata.path}/${tdata.path}`}>
                              <li className="p-1 pl-12 border-b border-slate-400 relative before:absolute before:bg-slate-300 before:top-0 before:bottom-0 before:w-0.5 before:left-10">
                                {tdata.title}
                              </li>
                            </Link>
                          );
                        })}
                      </ul>
                    </React.Fragment>
                  );
                })}
              </main>
            </section>
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
}

export default SectionListMateri;
