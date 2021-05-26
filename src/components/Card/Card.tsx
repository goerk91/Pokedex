import styled from "styled-components";
import "./card.css";
import { IPokemonData } from "./interfaces";
import Stats from "./components/Stats";

const StyledCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    "image image profil profil"
    "image image stats stats"
    "evolution evolution stats stats";
  background: white;
  margin-top: 25px;
  border-radius: 25px;
  box-shadow: 0px 0px 5px 5px grey;

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 2fr 0.5fr 2fr 1fr;
    grid-template-areas: "image profil" " image profil" "evolution evolution" "stats stats";
  }

  @media only screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 2fr 1fr 1fr;
    grid-template-areas: "image" "evolution" "stats" "profil";
    #image,
    #profil,
    #evolution,
    #stats {
      border-radius: 0px;
    }
    border-radius: 0px;
  }
`;

interface ICardProps {
  currentData: IPokemonData | null;
}

const Card = (props: ICardProps) => {
  // console.log("Current Data:", props.currentData); // currentData is typeof "object"

  /* currentData?.sprite "?." steht für optional chaining
  -> Typescipt kompiliert nicht weiter wenn "null" oder "undefined" ausgegeben wird */
  // <div id="evolution">{props.currentData?.id}</div>
  console.log("Data:", props.currentData);

  return (
    <StyledCard>
      <div id="image">
        <img
          src={props.currentData?.sprites.other.dream_world.front_default}
          className="image-responsive"
        />
      </div>
      <div id="profil">{props.currentData?.name}</div>
      <div id="evolution">{props.currentData?.id}</div>
      <div id="stats">
        <Stats currentData={props.currentData} />
      </div>
    </StyledCard>
  );
};

export default Card;
