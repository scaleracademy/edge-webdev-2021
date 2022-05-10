import React from "react";

interface Person {
  name: string
}

interface Props {
  text: string;
  ok?: boolean;
  random?: number;
  fn?: (x: number) => string;
  alias?: Person;
}

export const TextField: React.FC<Props> = () => {
  // React.FC represents a React Functional Component
  return (
    <div>
      <input type="text" />
    </div>
  )
}