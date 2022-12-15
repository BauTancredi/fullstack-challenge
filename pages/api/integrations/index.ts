// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import integrations from "../../../data/integrations.json";
import { Integration } from "../../../types";

export default function handler(_req: NextApiRequest, res: NextApiResponse<Integration[]>) {
  // Get data from a real database
  res.status(200).json(integrations);
}
