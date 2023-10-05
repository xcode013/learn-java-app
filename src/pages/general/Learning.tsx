import {Link, useParams} from 'react-router-dom';
import LayoutDocs from '../layouts/LayoutDocs';
import {useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {a11yDark} from 'react-syntax-highlighter/dist/esm/styles/hljs';

// import kpboDatas from '../../assets/datas/kpboDatas.json';
import footerLinkDatas from '../../assets/datas/dataLinks.json';
import Header from '../../components/learning/Header';
import Paragraph from '../../components/learning/Paragraph';
import SubHeader from '../../components/learning/SubHeader';

import kpbo1 from '../../assets/materies/kpbo-1.txt';
import kpbo2 from '../../assets/materies/kpbo-2.txt';
import kpbo5 from '../../assets/materies/kpbo-5.txt';
import kpbo6 from '../../assets/materies/kpbo-6.txt';
import kpbo7 from '../../assets/materies/kpbo-7.txt';
import kpbo8 from '../../assets/materies/kpbo-8.txt';
import kpbo9 from '../../assets/materies/kpbo-9.txt';
import kpbo10 from '../../assets/materies/kpbo-10.txt';
import kpbo11 from '../../assets/materies/kpbo-11.txt';

interface KPBOInterface {
  id: number;
  title: string;
  keyword: string;
  url_content: string;
}

interface FKeyInterface {
  key: string;
  prev: string;
  next: string;
}

const kpboDatas = [
  {
    id: 1,
    title: 'Program in Java',
    keyword: 'program_in_java',
    url_content: kpbo1,
  },
  {
    id: 2,
    title: 'Prosedural Programing vs. OOP',
    keyword: 'prosedural_programing_vs_oop',
    url_content: kpbo2,
  },
  {
    id: 5,
    title: 'Hello World',
    keyword: 'hello_world',
    url_content: kpbo5,
  },
  {
    id: 6,
    title: 'Basic Syntax',
    keyword: 'basic_syntax',
    url_content: kpbo6,
  },
  {
    id: 7,
    title: 'Abstract',
    keyword: 'abstract',
    url_content: kpbo7,
  },
  {
    id: 8,
    title: 'Encapsulization',
    keyword: 'encapsulization',
    url_content: kpbo8,
  },
  {
    id: 9,
    title: 'Inheritance',
    keyword: 'inheritance',
    url_content: kpbo9,
  },
  {
    id: 10,
    title: 'Poliomorphisme',
    keyword: 'poliomorphisme',
    url_content: kpbo10,
  },
  {
    id: 11,
    title: 'Number',
    keyword: 'number',
    url_content: kpbo11,
  },
  {
    id: 12,
    title: 'Floating Point',
    keyword: 'floating_point',
    url_content: kpbo11,
  },
  {
    id: 13,
    title: 'Char',
    keyword: 'char',
    url_content: '/src/assets/materies/kpbo-13.txt',
  },
  {
    id: 14,
    title: 'Boolean',
    keyword: 'boolean',
    url_content: '/src/assets/materies/kpbo-14.txt',
  },
  {
    id: 15,
    title: 'Variable',
    keyword: 'declare_init',
    url_content: '/src/assets/materies/kpbo-15.txt',
  },
  {
    id: 16,
    title: 'Variable Scope',
    keyword: 'scope',
    url_content: '/src/assets/materies/kpbo-16.txt',
  },
];
function Learning() {
  const {bab, headline, subheadline} = useParams();

  const [query, setQuery] = useState<string>('');
  const [kpbo, setKpbo] = useState<KPBOInterface | null>();
  const [content, setContent] = useState<string>('');
  const [footerKey, setFooterKey] = useState<FKeyInterface | null>();

  useEffect(() => {
    if (!subheadline && headline) {
      setQuery(headline);
      if (!headline && bab) {
        setQuery(bab);
      }
    } else if (subheadline) setQuery(subheadline);
  }, [bab, headline, subheadline]);

  useEffect(() => {
    const result = kpboDatas.find((data) => data.keyword === query);
    const fKey = footerLinkDatas.find((data) => data.key === query);
    if (result) setKpbo(result);
    else setKpbo(null);

    if (fKey) setFooterKey(fKey);
    else setFooterKey(null);

    if (kpbo) {
      fetch(kpbo.url_content)
        .then((response) => response.text())
        .then((result) => setContent(result));
    }
  }, [query, kpbo]);

  return (
    <LayoutDocs>
      <div className="learning-page pt-24 bg-slate-100 dark:bg-neutral-950 dark:text-white min-h-screen">
        <main>
          <ReactMarkdown
            children={content}
            components={{
              code(props) {
                const {className, children, ...rest} = props;
                const match = /language-(\w+)/.exec(className || '');
                return match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, '')}
                    language={match[1]}
                    PreTag={'div'}
                    style={a11yDark}
                  />
                ) : (
                  <code {...rest} className={className}>
                    {children}
                  </code>
                );
              },
              h1(props) {
                const {children} = props;
                return <Header value={children} />;
              },
              h2({children}) {
                return <SubHeader value={children} />;
              },
              p({children}) {
                return <Paragraph value={children} />;
              },
            }}
          />
        </main>
        <footer className="flex justify-between px-4 py-1">
          <Link to={footerKey ? footerKey.prev : ''}>
            <button className="py-2 px-6 bg-sky-600">Prev</button>
          </Link>
          <Link to={footerKey ? footerKey.next : ''}>
            <button className="py-2 px-4 bg-sky-600">Next</button>
          </Link>
        </footer>
      </div>
    </LayoutDocs>
  );
}

export default Learning;
