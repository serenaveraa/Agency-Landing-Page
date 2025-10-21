import React from "react";

export function CustomSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`px-5 sm:px-15 lg:px-34 ${className}`}>
      <div>{children}</div>
    </section>
  );
}
