"use client"

import { useGetId } from "@/hooks/useGetId";
import { Player } from "@/types";

export default function Home() {
  const { data, loading, error } = useGetId({ gameName: "Saratonino", tagLine: "7808" } as Player);

  console.log(data)
  console.log(error)

  return (
    <div className="flex flex-col justify-center align-center w-full h-screen">
      <div>
        <h1>PUIID: {data?.puuid}</h1>
        <h1>Game name: {data?.gameName}</h1>
        <h1>Tag: {data?.tagLine}</h1>
      </div>
    </div>
  );
}
