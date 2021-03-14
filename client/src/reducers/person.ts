import create from "zustand";

type State = {
  firstName: string;
  lastName: string;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
};

export const personStore = create<State>((set) => ({
  firstName: "Bear",
  lastName: "State",
  setFirstName: (firstName) => set({ firstName }),
  setLastName: (lastName) => set({ lastName }),
}));
