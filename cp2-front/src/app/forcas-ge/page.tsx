"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { TipoImagem } from "@/types";

export default function ForcasGE() {
  const [imagem, setImagem] = useState<TipoImagem>({copyright:"", date:"",explanation:"",hdurl:"",media_type:"",service_version:"",title:"",url:""});
    useEffect(() => {
      async function chamadaApi() {
          try {
            const response = await fetch('http://localhost:3000/api/imagens');
            const jsonData = await response.json();
            // Número aleatório entre 0 e 9
            const numeroAleatorio = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;
            const indice = numeroAleatorio(0, 9);
            setImagem(jsonData[indice]);
          } catch {
              console.log("ERRO");
          }
      }

      chamadaApi()
  }, []);
    return (
      <div>
        <h1 className="Hs">Forças Gravitacionais e Eletromagnéticas</h1>
        <p className="Ps">
        Velikovsky propôs que as forças eletromagnéticas entre planetas poderiam ter desempenhado um papel significativo nos encontros próximos, algo que contraria o modelo puramente gravitacional aceito na física celeste. Ele sugeriu que os cálculos gravitacionais sozinhos não explicavam adequadamente as interações planetárias propostas em suas teorias.
        </p>
        <div >
          <Image className="m-12" src={typeof(imagem.url) == 'string' ? imagem.url : ""}width={500} height={250}alt={typeof(imagem.explanation) == 'string' ? imagem.explanation : ""}/>
          <p className="Ps">{imagem.explanation}</p>
        </div>
       
      </div>
    )
  }
  