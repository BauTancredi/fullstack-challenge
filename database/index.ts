export interface User {
  id: string;
  given_name: string;
  family_name: string;
  email: string;
}

export interface Contact {
  id: string;
  given_name: string;
  family_name: string;
  email: string;
  met_at_location: string;
  notes?: string;
}

export interface Integration {
  id: string;
  name: string;
  api: string;
  description: string;
  fields: any[];
  requiresCustomFields?: boolean;
  connected: boolean;
}

export interface Field {
  id: string;
  name: string;
  type: string;
  required: boolean;
  value: string;
}

export class Database {
  static integrations = [
    {
      id: "1",
      name: "Salesforce",
      api: "https://salesforce.com/someEndpointToConnect",
      description: "Integrate your contacts with Salesforce, the world's #1 CRM.",
      connected: false,
      fields: [
        {
          id: "1",
          name: "client_id",
          type: "text",
          required: true,
        },
        {
          id: "2",
          name: "client_secret",
          type: "text",
          required: true,
        },
      ],
    },
    {
      id: "2",
      name: "Zapier",
      api: "https://zapier.com/someEndpointToConnect",
      description: "Integrate your contacts with Zapier, the world's #1 CRM.",
      connected: false,
      fields: [
        {
          id: "1",
          name: "api_key",
          type: "text",
          required: true,
        },
      ],
    },
    {
      id: "3",
      name: "HubSpot",
      api: "https://hubspot.com/someEndpointToConnect",
      description: "Integrate your contacts with HubSpot, the world's #1 CRM.",
      connected: false,
      requiresCustomFields: true,
      fields: [
        {
          id: "1",
          name: "tenant_domain",
          type: "text",
          required: true,
        },
        {
          id: "2",
          name: "client_id",
          type: "text",
          required: true,
        },
        {
          id: "3",
          name: "client_secret",
          type: "text",
          required: true,
        },
      ],
    },
  ];

  public static getIntegrations(): any[] {
    return Database.integrations;
  }

  public static updateIntegration(id: string): void {
    Database.integrations = Database.integrations.map((integration) => {
      if (integration.id === id) return { ...integration, connected: !integration.connected };

      return integration;
    });
  }

  public static getUser(): User {
    return {
      id: "12345",
      given_name: "Jane",
      family_name: "Doe",
      email: "jane@blinq.me",
    };
  }

  public static getContacts(): Contact[] {
    return [
      {
        id: "1234",
        given_name: "Terry",
        family_name: "Walker",
        email: "terry@waffles.co",
        met_at_location: "Melbourne, Australia",
        notes: "Terry has a beard.",
      },
      {
        id: "1235",
        given_name: "Terry",
        family_name: "Walker",
        email: "terry@waffles.co",
        met_at_location: "Melbourne, Australia",
        notes: "Terry has a beard.",
      },
    ];
  }
}
