import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const gameName = searchParams.get("gameName");
  const tagLine = searchParams.get("tagLine");

  if (!gameName || !tagLine)
    return NextResponse.json({
      error: "Either the gameName or tagLine is missing",
      status: 400,
    });

  try {
    const response = await axios.get(
      `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}?api_key=${process.env.RIOT_API_KEY}`
    );
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json({
      error: "Failed to fetch player data",
      status: 500,
    });
  }
}
