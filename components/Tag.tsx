import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Tag({ children }: Props) {
  return (
    <div className="flex gap-2 text-xs font-semibold text-white bg-suculenta rounded-full px-3 py-1">
      {children}
    </div>
  );
}
