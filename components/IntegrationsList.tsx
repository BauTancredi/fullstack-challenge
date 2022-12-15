import React from "react";

import { Integration } from "../types";
import styles from "../styles/List.module.css";

import IntegrationCard from "./IntegrationCard";

interface IntegrationsListProps {
  integrations: Integration[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIntegration: (integration: Integration) => void;
}

export default function IntegrationsList({
  integrations,
  setOpen,
  setIntegration,
}: IntegrationsListProps) {
  return (
    <div className={styles.grid}>
      {integrations.map((integration) => (
        <IntegrationCard
          key={integration.id}
          integration={integration}
          setIntegration={setIntegration}
          setOpen={setOpen}
        />
      ))}
    </div>
  );
}
