import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { searchShowsActors } from './../api/tvmazeData';
import SearchForm from '../components/SearchForm';
import ShowsGrid from '../components/shows/ShowsGrid';
import ActorsGrid from '../components/actors/ActorsGrid';
import styled, { css } from 'styled-components';
// _______________

const AnyTagName = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}

  /* ${props =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize}px;
      background: palevioletred;
      color: white;
    `} */

    ${props =>
    props.$fontSize &&
    css`
      font-size: ${props.$fontSize}px;
      background: palevioletred;
      color: white;
    `}
`;
// _______________

function Home() {
  const [filter, setFilter] = useState(null);

  const { data: apiData, error: apiErr } = useQuery({
    queryKey: ['search', filter],
    queryFn: () => {
      return searchShowsActors(filter.val, filter.srchOpt);
    },
    enabled: !!filter,
    refetchOnWindowFocus: false,
  });

  async function Search(val, srchOpt) {
    setFilter({ val, srchOpt });
  }

  function renderData() {
    if (apiErr) {
      return <>An Error occured : {apiErr.message}</>;
    }

    if (apiData?.length === 0) {
      return <>No Data Found</>;
    }

    if (apiData) {
      if (apiData[0].show) {
        return <ShowsGrid apiData={apiData} />;
      } else {
        return <ActorsGrid apiData={apiData} />;
      }
    }
    return null;
  }
  // ____________________________________________________________________
  return (
    <>
      <AnyTagName>Hi</AnyTagName>
      <AnyTagName primary>Hi</AnyTagName>
      {/* <AnyTagName primary fontSize={30}>
        Hi
      </AnyTagName> */}
      <AnyTagName primary $fontSize={30}>
        Hi
      </AnyTagName>
      <SearchForm SearchData={Search} />

      <div>{renderData()}</div>
    </>
  );
}

export default Home;
