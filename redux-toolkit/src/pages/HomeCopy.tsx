export {};

/* 
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { Card } from "../components/Card";
import SearchBar from "../components/SearchBar/index";
import {
  charactersSelector,
  fetchCharacters,
  Status,
  statusSelector,
} from "../features/characterSlice";
import * as Styled from "./style";

export function Home() {
  const data = useAppSelector(charactersSelector);
  const status = useAppSelector(statusSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  if (status === Status.pending) {
    return <p>loading...</p>;
  }

  return (
    <Styled.Container>
      <Styled.Title>Rick and Morty</Styled.Title>
      <Styled.Description>
        Rick and Morty Finder book check here the status of your favorite
        character
      </Styled.Description>
      <SearchBar
        style={{ marginTop: 25 }}
        placeholder="Search here ?"
        onChange={() => null}
      />
      <Styled.List>
        {data.map((character: any) => (
          <Card key={character.id} character={character} />
        ))}
      </Styled.List>
    </Styled.Container>
  );
}

*/
