import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "Produtos",
  }
}

export default function Products() {
  const products = [
    { id: 1, name: 'Produto 1' },
    { id: 2, name: 'Produto 2' },
    { id: 3, name: 'Produto 3' }
  ]

  return (
    <>
      <h1>Listagem de produtos</h1>
      {products.map((product, index) => (
        <div key={index}>
          <Link href={`/products/${product.id}`}>{product.name}</Link>
          <br />
        </div>
      ))}
    </>
  )
}