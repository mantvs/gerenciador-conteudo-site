import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

export async function Container({children}: ContainerProps) {

  return (
    <div className="text-slate-900 bg-slate-100 min-h-screen dark:bg-slate-900 dark:text-slate-100">
      <div className="max-w-screen-lg mx-auto px-8">{children}</div>
    </div>
  );
}