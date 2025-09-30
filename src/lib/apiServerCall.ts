import axios, { Method, RawAxiosRequestHeaders } from "axios";


interface ApiServiceParams {
  url: string;
  method?: Method;
  body?: unknown;
  headers?: RawAxiosRequestHeaders;
}
const apiServiceCall = async ({
  url,
  method = 'GET',
  body,
  headers,
}: ApiServiceParams) => {
  try {
    const response = await axios({
      method,
      url: `${process.env.NEXT_PUBLIC_API_URL}${url}`,
      data: body,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    });

    return response.data;
  } catch (error) {
    console.error('error from api service call', error);

    if (axios.isAxiosError(error)) {
      const apiError = {
        status: error.response?.status,
        data: error.response?.data,
      };
      throw apiError;
    }

    throw new Error('An unexpected error occurred');
  }
};

export default apiServiceCall;