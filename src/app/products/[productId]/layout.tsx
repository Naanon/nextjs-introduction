import { ReactNode } from "react";

export default function ProductDetailsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <h1 className="bg-blue-500">Especificações</h1>
      {children}
    </>
  )
}