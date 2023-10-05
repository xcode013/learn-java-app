import {Link, useParams} from 'react-router-dom';
import LayoutDocs from '../layouts/LayoutDocs';
import {useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {a11yDark} from 'react-syntax-highlighter/dist/esm/styles/hljs';

import kpboDatas from '../../assets/datas/kpboDatas.json';
import footerLinkDatas from '../../assets/datas/dataLinks.json';
import Header from '../../components/learning/Header';
import Paragraph from '../../components/learning/Paragraph';
import SubHeader from '../../components/learning/SubHeader';

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
