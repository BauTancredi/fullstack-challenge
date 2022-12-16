import React from "react";
import { useSWRConfig } from "swr";

import styles from "../styles/Modal.module.css";
import { Field, Integration } from "../types";
import { formatName } from "../utils";

interface ModalProps {
  data: Integration;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIntegration: (integration: any) => void;
}

export default function Modal({ setOpen, data, setIntegration }: ModalProps) {
  const [fields, setFields] = React.useState<Field[]>(data.fields);
  const [loading, setLoading] = React.useState(false);
  const { mutate } = useSWRConfig();

  const closeModal = () => {
    setOpen(false);
    setIntegration(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setFields((prev) => {
      const newFields = prev.map((field) => {
        if (field.name === id) return { ...field, value };

        return field;
      });

      return newFields;
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      const body = {
        name: data.name,
        id: data.id,
        fields: fields.map((field) => ({ name: field.name, value: field.value })),
        api: data.api,
      };

      const res = await fetch(`/api/integrations/${data.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      mutate("/api/integrations");

      if (!res.ok) throw new Error("Something went wrong");

      setFields(data.fields);
      closeModal();
    } catch (err) {
      throw new Error("Something went wrong");
    }
    setLoading(false);
  };

  const handleDisconnect = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const body = {
      name: data.name,
      id: data.id,
      api: data.api,
    };

    const res = await fetch(`/api/integrations/${data.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) throw new Error("Something went wrong");

    mutate("/api/integrations");

    setFields(data.fields);
    closeModal();
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <button className={styles.modalClose} onClick={closeModal}>
          X
        </button>

        <h1>{data.name}</h1>

        <p>{data.description}</p>

        <form onSubmit={data.connected ? handleDisconnect : handleSubmit}>
          {data.connected === false ? (
            <div className={styles.fields}>
              {data.fields.map((field: Field) => (
                <div key={field.name} className={styles.fieldContainer}>
                  <label htmlFor={field.name}>{formatName(field.name)}</label>
                  <input
                    id={field.name}
                    required={field.required}
                    type={field.type}
                    value={field.value}
                    onChange={handleChange}
                  />
                </div>
              ))}
            </div>
          ) : null}

          {/* Easier to read than nested ternary */}
          {!data.connected ? (
            <button className={styles.connectButton} disabled={data.connected} type="submit">
              {loading ? <div className={styles.loader} /> : "Connect"}
            </button>
          ) : null}
          {data.connected ? (
            <button className={styles.disconnectButton} type="submit">
              {loading ? <div className={styles.loader} /> : "Disconnect"}
            </button>
          ) : null}
        </form>
      </div>
    </div>
  );
}
