import { useState } from 'react';
import styled from 'styled-components';
import CustBtns from './CustBtns';
import { useSearchStr } from '../lib/useSearchStr';

function SearchForm({ SearchData }) {
  const [val, setVal] = useSearchStr();
  const [srchOpt, setSrchOpt] = useState('shows');

  function changeVal(event) {
    setVal(event.target.value);
  }

  function changeOpt(event) {
    setSrchOpt(event.target.value);
  }

  function Search(event) {
    event.preventDefault();
    SearchData(val, srchOpt);
  }

  return (
    <form onSubmit={Search}>
      <SearchInput
        type="text"
        placeholder="Search for Movies, Shows, ... "
        onChange={changeVal}
        value={val}
      ></SearchInput>

      <RadiosWrapper>
        <CustBtns
          label="Shows"
          name="search-options"
          value="shows"
          checked={srchOpt === 'shows'}
          onChange={changeOpt}
        />
        <CustBtns
          label="Actors"
          name="search-options"
          value="people"
          checked={srchOpt === 'people'}
          onChange={changeOpt}
        />
      </RadiosWrapper>

      <SearchButtonWrapper>
        <button type="submit">Search</button>
      </SearchButtonWrapper>
    </form>
  );
}

export default SearchForm;

const SearchInput = styled.input`
  display: block;
  font-family: 'Roboto', sans-serif;
  width: 200px;
  margin: auto;
  outline: none;
  padding: 13px 15px;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
  font-size: 14px;
  border-radius: 12px;
  color: #8d8d8d;
  &::placeholder {
    font-weight: 300;
    color: #8d8d8d;
  }
`;

export const RadiosWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  label {
    margin: 0 15px;
  }
`;

const SearchButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 35px;
  button {
    background-color: transparent;
    color: #fff;
    margin: auto;
    padding: 10px 50px;
    font-size: 15px;
    border: 1px solid red;
    outline: none;
    border-radius: 12px;
    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.mainColors.blue};
    }
  }
`;
