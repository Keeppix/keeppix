import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="overflow-x-hidden min-dvh-screen flex flex-col">
      {children}
    </div>
  );
}
