import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="overflow-x-hidden min-h-dvh flex flex-col">{children}</div>
  );
}
