import React, { Fragment } from "react";
import { useState } from "react";

const Details = () => {
  const [age, setAge] = useState("");
  const handlingAge = (e) => {
    setAge((age) => {
      //   Number(age);
      return e.target.value;
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (age < 0 || age > 150) {
      alert("kindly enter age");
      return;
    }
  };
  return (
    <Fragment>
      <h1>making a Details page</h1>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          name="age"
          required
          onChange={handlingAge}
          value={age}
        />

        <button>submit</button>
      </form>
    </Fragment>
  );
};

export default Details;
