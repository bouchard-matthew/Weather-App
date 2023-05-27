import axios from "axios";
import type { NextRequest } from "next/server";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const zip = searchParams.get("zip");
    let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${API_KEY}`);
    let res2 = await axios.get(`/api/fetchWeather?&lat=${res.data.coord.lat}&lon=${res.data.coord.lat}&name=${res.data.name}`);

    return new Response(JSON.stringify(res2.data), {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 500,
      headers: {
        "content-type": "application/json",
      },
    });
  }
}
