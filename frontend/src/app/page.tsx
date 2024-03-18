"use client"

import Image from "next/image";
import { useRef, useState } from "react";

export default function Home() {

  const [entries, setEntries] = useState([])
  const search = useRef(null)

  return (
    <main className="flex flex-col items-center p-12">
      <input placeholder="Suchen" autoFocus ref={search} type="text"
      className="bg-text placeholder-secondary text-primary w-96 py-2 px-4
      font-mono font-semibold rounded-md border-secondary border-2 mb-16"></input>
      {
        (entries.length == 0) ? <Idle></Idle> : <Entries></Entries>
      }
    </main>
  )
}

function Idle() {
  return (
    <div className="flex flex-col items-center">
      <img src="/logo-256.png" alt="logo" width={200} height={200}></img>
      <div className="text-2xl font-semibold bg-gradient-to-br bg-clip-text text-transparent
      from-text to-text-shaded mt-8">
        Online Latein-Deutsch Wörterbuch
      </div>
    </div>
  )
}

function Entries() {
  return (
    <div>
      
    </div>
  )
}
