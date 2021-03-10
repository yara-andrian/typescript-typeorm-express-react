import React, { useState, useEffect } from "react";

type SomeProps = {
  /** color to use for the background */
  color?: string;
  /** standard children prop: accepts any valid React Node */
  children: React.ReactNode;
  /** callback function passed to the onClick handler*/
  // onClick: () => void;

  timerMs: number;
};

type User = {
  email: string;
  id: string;
};

type ExtendedUser = User & {
  name?: string;
};

const FuncComponent: React.FunctionComponent<SomeProps> = ({
  color,
  // onClick,
  children,
  timerMs,
}) => {
  const [value, setValue] = useState<ExtendedUser | null>();

  useEffect(() => {
    setTimeout(() => {
      /* do stuff */
    }, timerMs);
  }, [timerMs]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue({
      email: e.target.value,
      id: e.target.value,
    });
  };

  const onClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setValue({
      email: "Al",
      id: "Al",
      name: "Andrian",
    });
  };

  return (
    <div>
      <button onClick={onClick}>Halo</button>
      <input value={value?.email} onChange={onChange} id="input-example" />
    </div>
  );
};

export default FuncComponent;
