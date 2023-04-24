import React, { useState } from "react";
import formcss from "../style/form.css";

const Formgame = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchValue(e.target.name.value.trim());
    console.log(e.target.name.value.trim());
    e.target.name.value = "";
  };
  return (
    <main>
      <form className="form" onSubmit={handleSubmit} action="">
        <input className="form_input" id="name" placeholder="Buscar Juego..." />
        <button className="form__btn">
          Buscar
        </button>
      </form>
    </main>
  );
};

export default Formgame;
