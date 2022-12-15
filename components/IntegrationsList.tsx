import React from "react";

import { Integration } from "../types";

interface IntegrationsListProps {
  integrations: Integration[];
}

export default function IntegrationsList({ integrations }: IntegrationsListProps) {
  return <div>{JSON.stringify(integrations)}</div>;
}
