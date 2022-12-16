import type { NextApiRequest, NextApiResponse } from "next";

import { Database } from "../../../database";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { body, method } = req;

  switch (method) {
    case "POST":
      // Here we should have all the necessary data to connect with the integration
      // const { i id, name, api, userId, fields } = body;

      Database.updateIntegration(body.id);
      res.status(200).json({ message: `Connected with ${body.name}` });

      break;
    case "DELETE":
      // Here we should have all the necessary data to disconnect the integration
      // const { id, name, api, userId } = body;

      Database.updateIntegration(body.id);
      res.status(200).json({ message: `Connected with ${body.name}` });

      break;
    default:
      res.setHeader("Allow", ["PUT", "POST", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);

      break;
  }
}
