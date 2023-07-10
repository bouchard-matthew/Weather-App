import { openWeatherMapClient } from "Server/Client/openWeatherMapClient";
import apiResponse from "Server/Utils/apiResponse";
import type { NextRequest } from "next/server";
import { z } from "zod";

const schema = z.object({
  lat: z.preprocess((a) => parseFloat(a as string), z.number()),
  lon: z.preprocess((a) => parseFloat(a as string), z.number()),
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

    return apiResponse({ json: data, status: 200 });
  } catch (error) {
    return apiResponse({ json: error, status: 500 });
  }
}
