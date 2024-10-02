import React from 'react'
import Link from "next/link";
import "@/app/globals.css";

export default function Menu() {
  return (
    <>
      <div className='Menu'>
          <h1 className='text-6xl m-12'>Ideias de Immanuel Velikovsky</h1>
          <nav >
              <ul>
                  <li className='list-disc mx-12'><Link className='Link' href="/">Home</Link></li>
                  <li className='list-disc mx-12'><Link className='Link' href="/calculo">Cálculo</Link></li>
                  <li className='list-disc mx-12'><Link className='Link' href="/cronologia">Cronologia dos Eventos</Link></li>
                  <li className='list-disc mx-12'><Link className='Link' href="/forcas-ge">Forças Gravitacionais e Eletromagnéticas</Link></li>
                  <li className='list-disc mx-12'><Link className='Link' href="/orbitas">Órbitas Planetárias e Instabilidade</Link></li>
              </ul>
          </nav>
      </div>
    </>
  )
}
