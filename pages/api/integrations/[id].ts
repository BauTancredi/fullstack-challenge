import type { NextApiRequest, NextApiResponse } from "next";

import { Database } from "../../../database";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { body, method } = req;

  switch (method) {
    case "PUT":
      Database.updateIntegration(body.id);
      res.status(200).json({ message: `Connected with ${body.name}` });

      break;
    default:
      res.setHeader("Allow", ["PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);

      break;
  }
}
