import React from "react";
import Image from "next/image";

import { Integration } from "../types";
import styles from "../styles/Home.module.css";

interface IntegrationCardProps {
  integration: Integration;
}

export default function IntegrationCard({ integration }: IntegrationCardProps) {
  return (
    <div className={styles.card}>
      <h3>{integration.name}</h3>
      <p>{integration.description}</p>
    </div>
  );
}
