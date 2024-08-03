import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <Link className="" href={'/products'}>Ir para a página de produtos</Link>
    </>
  );
}
