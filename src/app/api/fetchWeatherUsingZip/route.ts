import { openWeatherMapClient } from "Server/Client/openWeatherMapClient";
import type { NextRequest } from "next/server";

import { z } from "zod";

const schema = z.object({
  zip: z.string(),
});

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const { zip } = schema.parse({ zip: searchParams.get("zip") });
    const { lat, lon, name } = await openWeatherMapClient.getCoordinatesFromZip({ zip });
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
