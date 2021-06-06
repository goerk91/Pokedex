import { IPokemonData } from "../interfaces";
import styled from "styled-components";
import React, { useState, useEffect } from "react";

interface IStats {
  currentData: IPokemonData | null;
}

const StyledStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: gold;
  box-sizing: border-box;
  border-radius: 25px;
  padding: 30px;
  .input_field {
    margin-bottom: 15px;
    display: flex;
    align-items: center;
  }
  .input_field label {
    width: 200px;
    margin-right: 10px;
    font-size: 25px;
  }

  .input_field input {
    font-size: 1.5em;
  }

  .btn {
    width: 200px;
    height: 50px;
    float: right;
    font-size: 25px;
    font-weight: bold;
  }
`;

export default function Stats(props: IStats) {
  const [name, setName] = useState<string | undefined>("");
  const [id, setId] = useState<number | undefined>(0);
  const [type, setType] = useState<string | undefined>("");

  useEffect(() => {
    setId(props.currentData?.id);
    setName(props.currentData?.name);
    setType(props.currentData?.types[0].type.name);
  }, [props]);

  async function handleSubmit(e: any) {
    e.preventDefault();

    const data = { id: id, name: name, type: type };
    // console.log(data);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch("http://localhost:3001/create", options).then(() => {
      console.log("Success!!");
    });
  }
  return (
    <StyledStats>
      <form onSubmit={handleSubmit}>
        <div className="input_field">
          <label>ID:</label>
          <input type="text" value={props.currentData?.id || ""} readOnly />
        </div>
        <div className="input_field">
          <label>Name:</label>
          <input type="text" value={props.currentData?.name || ""} readOnly />
        </div>
        <div className="input_field">
          <label>Type:</label>
          <input
            type="text"
            value={props.currentData?.types[0].type.name || ""}
            readOnly
          />
        </div>
        <div>
          <input
            className="btn"
            type="submit"
            value="Save"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </StyledStats>
  );
}
