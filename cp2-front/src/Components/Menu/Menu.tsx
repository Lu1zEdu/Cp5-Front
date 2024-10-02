import React from 'react'
import Link from "next/link";

export default function Menu() {
  return (
    <>
    <h1>Links : </h1>
    <nav className=''>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/calculo">Cálculo</Link></li>
            <li><Link href="/cronologia">Cronologia dos Eventos</Link></li>
            <li><Link href="/forcas-ge">Forças Gravitacionais e Eletromagnéticas</Link></li>
            <li><Link href="/orbitas">Órbitas Planetárias e Instabilidade</Link></li>
        </ul>
    </nav>
    </>
  )
}
