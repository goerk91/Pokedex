import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import Card from "./components/Card/Card";
import { IPokemonData } from "./components/Card/interfaces";
//git branch test
class Student {
  [index: string]: any;
  name?: string;
  age?: number;

  constructor(name?: string, age?: number) {
    this.name = name;
    this.age = age;
  }
}

let stu = new Student("Metin", 29);
console.log(stu);

// console.log(Student.prototype);

Student.prototype.height = 300;
let stu1 = new Student("Tom", 30);
console.log(stu1.height);

console.log(Student.prototype);
//tt
function App() {
  const [pokemon, setPokemon] = useState<string>("pikachu");
  const [pokemonData, setPokemonData] = useState<IPokemonData | null>(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((res) => res.json())
      .then((data) => setPokemonData(data))
      .catch((error) => {
        console.log(error);
      });
  }, [pokemon]);

  // console.log("Current Data:", pokemonData);

  const addPokemon = (urlPokemonName: string) => {
    setPokemon(urlPokemonName);
  };
  // console.log("PokemonUrl: ", pokemon);

  return (
    <div className="App">
      <SearchBar addPokemon={addPokemon} />
      <Card currentData={pokemonData} />
    </div>
  );
}

export default App;
