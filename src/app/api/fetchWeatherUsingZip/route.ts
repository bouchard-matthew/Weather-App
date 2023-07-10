import { openWeatherMapClient } from "Server/Client/openWeatherMapClient";
import apiResponse from "Server/Utils/apiResponse";
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

    return apiResponse({ json: data, status: 200 });
  } catch (error) {
    return apiResponse({ json: error, status: 500 });
  }
}
