interface ApiResponseOptions<T> {
  json: T;
  status: number;
}

const apiResponse = <T>({ json, status }: ApiResponseOptions<T>) => {
  return new Response(JSON.stringify(json), {
    status,
    headers: {
      "content-type": "application/json",
    },
  });
};

export default apiResponse;
