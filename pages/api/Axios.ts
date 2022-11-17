// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }

// setup axios
// to use, import axios from this module then just use specific endpoint on url
import axios from "axios";
// base url
axios.defaults.baseURL = "http://127.0.0.1:3001/";
try {
  axios.defaults.headers.common = {};
} catch (err) {}
export default axios;
