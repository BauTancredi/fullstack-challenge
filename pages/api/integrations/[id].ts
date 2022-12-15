// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import fs from "fs";

import integrations from "../../../data/integrations.json";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { body, method } = req;

  let newIntegrations;

  switch (method) {
    case "POST":
      newIntegrations = integrations.map((integration) => {
        if (integration.id === body.id) return { ...integration, connected: true };

        return integration;
      });

      fs.writeFileSync("data/integrations.json", JSON.stringify(newIntegrations, null, 4));

      res.status(200).json({ message: `Connected with ${body.name}` });
      break;
    case "DELETE":
      newIntegrations = integrations.map((integration) => {
        if (integration.id === body) return { ...integration, connected: false };

        return integration;
      });

      fs.writeFileSync("data/integrations.json", JSON.stringify(newIntegrations, null, 4));

      res.status(200).json({ message: `${body.name} integration disconnected` });
      break;
    default:
      res.setHeader("Allow", ["POST", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
