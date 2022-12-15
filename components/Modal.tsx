import React from "react";

import styles from "../styles/Home.module.css";
import { Field, Integration } from "../types";

interface ModalProps {
  data: Integration;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIntegration: (integration: any) => void;
}

export default function Modal({ setOpen, data, setIntegration }: ModalProps) {
  const handleClick = () => {
    setOpen(false);
    setIntegration(null);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <button className={styles.modalClose} onClick={handleClick}>
          X
        </button>

        <h1>{data.name}</h1>

        <p>{data.description}</p>

        <div className={styles.fields}>
          {data.fields.map((field: Field) => (
            <div key={field.name} className={styles.fieldContainer}>
              <label htmlFor={field.name}>{field.name}</label>
              <input id={field.name} required={field.required} type={field.type} />
            </div>
          ))}
        </div>

        <button className={styles.button}>Connect</button>
      </div>
    </div>
  );
}
