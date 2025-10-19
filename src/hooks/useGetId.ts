"use client"

import { Player } from "@/types";
import { useEffect, useState } from "react";
import axios from "axios";

export function useGetId({ gameName, tagLine }: Player) {
  const [data, setData] = useState<Player | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await axios.get(
          `/api/riot?gameName=${gameName}&tagLine=${tagLine}`
        );
        setData(response.data);
      } catch (error) {
        setError(error as string);
      } finally {
        setLoading(false);
      }
    };

    fetchData()
  }, [gameName, tagLine]);

  return { data, loading, error };
}
