import { openWeatherMapClient } from "Server/Client/openWeatherMapClient";
import type { NextRequest } from "next/server";
import { z } from "zod";

const schema = z.object({
  lat: z.number(),
  lon: z.number(),
  name: z.string(),
});

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const { lat, lon, name } = schema.parse({
      lat: searchParams.get("lat"),
      lon: searchParams.get("lon"),
      name: searchParams.get("name"),
    });

    const data = await openWeatherMapClient.getWeather({ lat, lon, name });

    return new Response(JSON.stringify(data), {
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
