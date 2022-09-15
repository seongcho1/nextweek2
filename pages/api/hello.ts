// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from "fs";

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  //const menuData = fs.readFileSync(__dirname + "/../../public/menu.csv", { encoding: 'utf-8' });
  //console.log(menuData);



  res.status(200).json({ hello: 'next.js' })

  /*
  res.writeHead(302, {
    Location: "https://10.16.5.1:4430/auth/login",
  });
  res.end();
  */

}

