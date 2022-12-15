import React from "react";
import Image from "next/image";

import { Integration } from "../types";
import styles from "../styles/Home.module.css";

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
      <h3>{integration.name}</h3>
      <p>{integration.description}</p>
    </div>
  );
}
