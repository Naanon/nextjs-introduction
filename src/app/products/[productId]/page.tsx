import Link from "next/link"
import { notFound } from "next/navigation"

interface InfoProps {
  params: {
    productId: number
    reviewId: number
  }
}

export default function Info({ params }: InfoProps) {
  // if (params.productId > 50) {
  //   notFound()
  // }

  return (
    <>
      <h1>Informações do produto {params.productId}</h1>

      <Link href={`${params.productId}/reviews/${params.reviewId}`}>Review do produto</Link>
    </>
  )
}