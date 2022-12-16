import React from "react";

import { Integration } from "../database";
import styles from "../styles/Card.module.css";

interface IntegrationCardProps {
  integration: Integration;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIntegration: (integration: Integration) => void;
}

export default function IntegrationCard({
  integration,
  setOpen,
  setIntegration,
}: IntegrationCardProps) {
  const handleClick = () => {
    setOpen(true);
    setIntegration(integration);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <h2>{integration.name}</h2>
      <p>{integration.description}</p>
    </div>
  );
}
