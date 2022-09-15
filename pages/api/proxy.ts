// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from "axios";


function showStatus(status) {
  switch (status) {
    case 200:
      return 'OK';
    case 404:
      return 'NOT FOUND';
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  /*
    fetch({
      method: 'POST',
      url: 'https://post.com/'
    });
  */
  const google = await axios.get("http://google.com");
  const amazon = await axios.get("http://amazon.com");
  res.status(200).json({
    google: showStatus(google.status),
    amazon: showStatus(amazon.status)
  })
}

