import Image from 'next/image'

export default function notFound() {
  return (
    <div>
        <Image src="/img/404-error.png"
        width={1000}
        height={500}
        alt="Imagem de erro 404" />
    </div>
  )
}
