"use client"

import { useGetMultipleIds } from "@/hooks";
import { TEAM_PLAYERS } from "@/constants";
import { Player } from "@/types";

export default function Home() {
  const { data, loading, error } = useGetMultipleIds(TEAM_PLAYERS as Player[]);

  console.log(data)
  console.log(error)

  return (
    <div className="flex flex-col justify-center align-center w-full h-screen">
      <div>
        {data?.map(player => (
          <div>
            <h3>{player.puuid}</h3>
            <h3>{player.gameName}</h3>
            <h3>{player.tagLine}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
