import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="Hs">Home</h1>
      <p className="Ps">No livro "Worlds in Collision", publicado em 1950, Immanuel Velikovsky propôs diversas teorias controversas envolvendo eventos cósmicos que, segundo ele, teriam afetado a Terra no passado. Ele sugeriu que certos fenômenos astronômicos descritos em textos antigos poderiam ser explicados por eventos cataclísmicos, como colisões ou passagens próximas de corpos celestes, incluindo Vênus e Marte.

Embora Velikovsky tenha utilizado várias referências históricas e mitológicas para sustentar suas ideias, ele também levantou questões sobre os cálculos e modelos astronômicos tradicionais.</p>
      <div>
        <Image className="m-12" src="/img/livro-wic.jpg"
        width={1000}
        height={500}
        alt="Capa do livro Worlds in Collision"/>
      </div>
    </div>
  );
}
