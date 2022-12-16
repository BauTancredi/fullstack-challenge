// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import fs from "fs";

import integrations from "../../../data/integrations.json";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { body, method } = req;

  switch (method) {
    case "POST":
      // Here should make API call to Third Party API to connect the service.
      // We have the id, api url, and the required fields of the service in the body.
      writeFile(body.id);

      res.status(200).json({ message: `Connected with ${body.name}` });
      break;

    case "DELETE":
      // Here should make API call to Third Party API to disconnect the service.
      // We have the id of the service in the body.
      writeFile(body.id);

      res.status(200).json({ message: `${body.name} integration disconnected` });
      break;

    default:
      res.setHeader("Allow", ["POST", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}

const writeFile = (id: string) => {
  const newIntegrations = integrations.map((integration) => {
    if (integration.id === id) return { ...integration, connected: !integration.connected };

    return integration;
  });

  fs.writeFileSync("data/integrations.json", JSON.stringify(newIntegrations, null, 4));
};
