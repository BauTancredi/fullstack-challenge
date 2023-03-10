import type { NextPage } from "next";

import { useState } from "react";
import useSWR from "swr";
import Head from "next/head";

import IntegrationsList from "../components/IntegrationsList";
import styles from "../styles/Home.module.css";
import { Integration } from "../database";
import Modal from "../components/Modal";
import { fetcher } from "../utils";

const Home: NextPage = () => {
  // Could use useReducer + useContext here, but useState is fine for now
  const [open, setOpen] = useState(false);
  const [integration, setIntegration] = useState<Integration | null>(null);

  const { data: integrationsData, error: integrationsError } = useSWR("/api/integrations", fetcher);
  const { data: userData, error: userError } = useSWR("/api/user", fetcher);

  if (integrationsError || userError) return <div>Failed to load</div>;

  if (!integrationsData || !userData) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <Head>
        <title>Blinq • Integrations</title>
        <meta content="Generated by create next app" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Blinq</h1>

        <p className={styles.description}>Connect your Blinq account to your favourite services</p>

        <IntegrationsList
          integrations={integrationsData}
          setIntegration={setIntegration}
          setOpen={setOpen}
        />
      </main>
      {open ? (
        <Modal data={integration!} setIntegration={setIntegration} setOpen={setOpen} />
      ) : null}
    </div>
  );
};

export default Home;

// TODO
// HubSpot field mappings
