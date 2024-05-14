import { ChangeEvent, useState } from "react";

interface Props {
  text: string;
}

const Input = ({ text }: Props) => {
  // const [inputScreenValue, setInputScreenValue] = useState("");

  /* const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInputScreenValue(event.target.value);
  }; */

  return (
    <input
      type="text"
      className="form-control text-end"
      value={text}
      // onChange={changeHandler}
      disabled
    />
  );
};

export default Input;
