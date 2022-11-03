import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import style from '@styles/search.module.scss';
import algoliasearch from 'algoliasearch/lite';
import BookGrid from '@/components/bookGrid';
import Book from '@/components/bookCard';

// const ALGOLIA_APP_ID: string = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '';
// const ALGOLIA_API_KEY: string = process.env.NEXT_PUBLIC_ALGOLIA_API_KEY || '';
// const ALGOLIA_INDEX_NAME: string = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME || '';
/* ---------------------------------------------------------------------------------------------- */
/*         Usually would keep the above in a .env file, but hardcoding for easy local testing     */
/* ---------------------------------------------------------------------------------------------- */

const ALGOLIA_APP_ID: string = "QUDL76XNT2";
const ALGOLIA_API_KEY: string = "196f81ff01633986dccc7341100a77c1"
const ALGOLIA_INDEX_NAME: string = "PERLEGO_INDEX"

export default function Search() {
  const [searchState, setSearchState] = useState('');
  const [results, setResults] = useState({});
  const foundResults = Object.keys(results).length > 60 ? `60+` : Object.keys(results).length;
  const foundQuery = searchState ? ` for "${searchState}"` : '';

  /* ---------------------------------------------------------------------------------------------- */
  /*                              Algolia credentials and client setup                              */
  /* ---------------------------------------------------------------------------------------------- */
  const searchClient = algoliasearch(ALGOLIA_APP_ID!, ALGOLIA_API_KEY!);
  const index = searchClient.initIndex(ALGOLIA_INDEX_NAME!);

  const onSearchStateChange = (value: string) => {
    setSearchState(value);
  };

  useEffect(() => {
    index.search(searchState, { hitsPerPage: 100 }).then(({ hits }) => {
      setResults(hits);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchState]);

  return (
    <>
      <form className={style['search-container']}>
        <input
          autoComplete="off"
          onChange={e => onSearchStateChange(e.target.value)}
          value={searchState}
          type="text"
          id={style['search-bar']}
          placeholder="Explore our range of available books"
        />
        <Image className={style['search-icon']} src="/search.svg" alt="search icon" width={72} height={72} />
      </form>

      {/* ---------------------------------------------------------------------------------------------- */
      /*                                Return Hits object as book components                            */
      /* ---------------------------------------------------------------------------------------------- */}
      <BookGrid>
        <span className="lead text-muted mb-5">{`Found ${foundResults} ${foundQuery}`}</span>
        {Object.keys(results).length > 0 &&
          Object.values(results)
            .slice(0, 21)
            .map((book: any, index: number) => {
              return <Book {...book} key={index} />;
            })}
      </BookGrid>
    </>
  );
}
