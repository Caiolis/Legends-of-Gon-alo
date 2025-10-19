import { connectToDatabase } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: NextRequest) {
  await connectToDatabase();

  // TODO: Create user
}
