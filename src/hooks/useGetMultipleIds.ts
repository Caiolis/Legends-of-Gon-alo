"use client";

import { Player } from "@/types";
import { useEffect, useState } from "react";
import axios from "axios";

export function useGetMultipleIds(players: Player[]) {
  const [data, setData] = useState<Player[] | null>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const promises = players.map((player) =>
          axios.get(
            `/api/riot?gameName=${player.gameName}&tagLine=${player.tagLine}`
          )
        );

        const responses = await Promise.allSettled(promises);
        const results = responses
          .filter((result) => result.status == "fulfilled")
          .map((result) => result.value.data);

        setData(results);
      } catch (error) {
        setError(error as string);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}
