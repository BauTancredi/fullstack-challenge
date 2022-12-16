import type { NextApiRequest, NextApiResponse } from "next";

import { Database, User } from "../../database";

export default function handler(_req: NextApiRequest, res: NextApiResponse<User>) {
  res.status(200).json(Database.getUser());
}
