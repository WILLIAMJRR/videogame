import React, { useEffect, useState } from "react";
import asidecss from "../style/aside.css";
import axios from "axios";

const Aside = ({ platforms }) => {
  return (
    <div className="">
      <nav>
        <ul>
          <a href="/">
            <h2>HOME</h2>
          </a>
        </ul>
      </nav>
      <select name="" id="">
        <option value="allplatform">All platform</option>
        {platforms?.map((platform) => (
          <option value={platform.slug} key={platform.id}>
            {platform.name}
          </option>
        ))}
      </select>
      <nav>
        <h2></h2>
        <ul>
          <li></li>
        </ul>
      </nav>
    </div>
  );
};

export default Aside;
