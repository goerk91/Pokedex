import react, { useState, useEffect } from "react";
import styled from "styled-components";
import "./searchbar.css";
import { IoSearch } from "react-icons/io5";

const StyledSearchBar = styled.div`
  display: flex;
  justify-content: center;
  border: 5px solid blue;
  background: #18ffff;
`;

const H1 = styled.h1`
  font-family: Heebo;
`;

const PokedexContent = styled.div`
  text-align: center;
  padding: 10px;
`;

const StyledSearchButton = styled.button`
  background-color: #49a1a9;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    background-color: #77d1d9;
  }
  :hover .searchIcon {
    color: black;
  }
`;

interface ISearchBarProps {
  addPokemon: (url: string) => void;
}

const SearchBar = (props: ISearchBarProps) => {
  const [pokemonInput, setPokemonInput] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.addPokemon(pokemonInput.toLowerCase());
  };

  return (
    <StyledSearchBar>
      <PokedexContent>
        <H1>Pokedex</H1>
        <p className="paragraph">Is your Pokemon on our codex?</p>
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="text"
              placeholder="search ..."
              className="inputSearch"
              defaultValue={pokemonInput}
              onChange={(e) => setPokemonInput(e.target.value)}
            />
            <StyledSearchButton className="styledSearch" type="submit">
              <IoSearch size="40px" className="searchIcon" />
            </StyledSearchButton>
          </div>
        </form>
      </PokedexContent>
    </StyledSearchBar>
  );
};

export default SearchBar;
