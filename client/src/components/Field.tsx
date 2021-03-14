import * as React from "react";
import { useState } from "react";
// import { IErrors } from "./Form";

type Editor = "textbox" | "multilinetextbox" | "dropdown";
// enum Editor {
//   Textbox = "textbox",
//   MultilineTextbox = "multilinetextbox",
//   Dropdown = "dropdown",
// }

export interface IFieldProps<P> {
  id: P;

  label?: P;

  editor?: Editor;

  options?: P[];

  value?: P;
}

export const Field: React.FC<IFieldProps<string>> = ({
  id,
  label,
  editor,
  options,
  value,
}) => {
  const [val, setVal] = useState<string>("");

  const handleChange = (ev: React.FormEvent<HTMLInputElement>) => {
    ev.preventDefault();
    const inputtedValue = ev.currentTarget.value;
    setVal(inputtedValue);
  };

  return (
    <div className="form-group">
      {label && <label htmlFor={id}>{label}</label>}

      {editor!.toLowerCase() === "textbox" && (
        <input
          id={id}
          aria-label={label + "-input"}
          type="text"
          value={val}
          onChange={handleChange}
          onBlur={
            (e: React.FormEvent<HTMLInputElement>) =>
              console.log(e) /* TODO: validate field value */
          }
          className="form-control"
        />
      )}

      {editor!.toLowerCase() === "multilinetextbox" && (
        <textarea
          id={id}
          value={value}
          onChange={
            (e: React.FormEvent<HTMLTextAreaElement>) =>
              console.log(e) /* TODO: push change to form values */
          }
          onBlur={
            (e: React.FormEvent<HTMLTextAreaElement>) =>
              console.log(e) /* TODO: validate field value */
          }
          className="form-control"
        />
      )}

      {editor!.toLowerCase() === "dropdown" && (
        <select
          id={id}
          name={id}
          value={value}
          onChange={
            (e: React.FormEvent<HTMLSelectElement>) =>
              console.log(e) /* TODO: push change to form values */
          }
          onBlur={
            (e: React.FormEvent<HTMLSelectElement>) =>
              console.log(e) /* TODO: validate field value */
          }
          className="form-control"
        >
          {options &&
            options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
        </select>
      )}

      {/* TODO - display validation error */}
    </div>
  );
};
Field.defaultProps = {
  editor: "textbox",
};
