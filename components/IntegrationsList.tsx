import React from "react";

import { Integration } from "../types";
import styles from "../styles/Home.module.css";

import IntegrationCard from "./IntegrationCard";

interface IntegrationsListProps {
  integrations: Integration[];
}

export default function IntegrationsList({ integrations }: IntegrationsListProps) {
  return (
    <div className={styles.grid}>
      {integrations.map((integration) => (
        <IntegrationCard key={integration.id} integration={integration} />
      ))}
    </div>
  );
}
