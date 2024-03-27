"use client"

import { BACKEND_URL } from "@/next.constants.mjs";
import Image from "next/image";
import { useRef, useState } from "react";

interface Word {
  position: Number
  lesson: String
  latin: String
  forms: String
  german: String
  type: String
  details: String
  loaded: Date
}

export default function Home() {

  const [entries, setEntries] = useState([])
  const pending = useRef<NodeJS.Timeout | null>(null)
  const search = useRef(null)

  const query = async (event: any) => {

    if (pending.current != null) {
      clearTimeout(pending.current)
    }

    pending.current = setTimeout(async () => {

      const q = event.target.value
      const params = new URLSearchParams({ "query": q })
      const response = await fetch(BACKEND_URL + "/search?" + params)

      const data = await response.json()
      setEntries(data.words)

    }, 250)

  }

  return (
    <main className="flex flex-col items-center p-12">
      <input placeholder="Suchen" autoFocus ref={search} onChange={query} type="text"
        className="bg-text placeholder-secondary text-primary w-96 py-2 px-4
      font-mono font-semibold rounded-md border-secondary border-2 mb-16"></input>
      {
        (entries.length == 0) ? <Idle></Idle> : <Entries words={entries}></Entries>
      }
    </main>
  )
}

function Idle() {
  return (
    <div className="flex flex-col items-center">
      <Image src="/logo.svg" alt="logo" width={200} height={200}></Image>
      <div className="text-2xl font-semibold bg-gradient-to-br bg-clip-text text-transparent
      from-text to-primary mt-8">
        Online Latein-Deutsch Wörterbuch
      </div>
    </div>
  )
}

function Entries({ words }: { words: Array<Word> }) {
  return (
    <div className="space-y-4">
      {
        words.map((word) => <Entry key={word.position.toString()} word={word}></Entry>)
      }
    </div>
  )
}

function Entry({ word }: { word: Word }) {
  return (
    <div className="flex items-center">
      <div className="font-mono font-extralight text-xl pr-4">{word.lesson}</div>
      <div>
        <div className="flex items-center">
          <div className="text-2xl font-bold pr-2">{word.latin}</div>
          <div className="text-xl">{word.forms}</div>
        </div>

        <div>{word.german}</div>
        <div>{word.type}</div>
        <div>{word.details}</div>
      </div>
    </div>
  )
}
