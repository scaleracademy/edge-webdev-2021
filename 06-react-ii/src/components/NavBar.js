import React from "react";

export default function NavBar({ title, logo }) {
  return (
    <div>
      <p>{title}</p>
      <p>{logo}</p>
    </div>
  );
}
