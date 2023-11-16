import React from "react";

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <div className="w-25 p-3 border border-danger rounded">
      <h1 className="display-5 text-danger text-center mb-3">To-do List</h1>
      {children}
    </div>
  );
};

export default Container;
