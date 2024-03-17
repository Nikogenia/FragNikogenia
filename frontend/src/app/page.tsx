"use client"

import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [entries, setEntries] = useState([])

  return (
    <main className="flex flex-col items-center p-12">
      <input placeholder="Suchen" autoFocus
      className="bg-text placeholder-secondary text-primary w-96 py-2 px-4
      font-mono font-semibold rounded-md border-secondary border-2 mb-16"></input>
      {
        <Idle></Idle> ? entries.length == 0 : <Entries></Entries>
      }
    </main>
  )
}

function Idle() {
  return (
    <div>
      <img src="/logo-dark.png" alt="logo" width={200} height={200}></img>
      <div className="text-2xl font-semibold bg-gradient-to-r bg-clip-text text-transparent
      from-text to-secondary mt-8">
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
