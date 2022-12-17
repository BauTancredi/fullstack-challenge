import React from "react";

interface CustomFieldsProps {
  customFields: any;
  onCustomFieldChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CustomFields({ customFields, onCustomFieldChange }: CustomFieldsProps) {
  return (
    <div>
      <h3>Custom Fields</h3>
      <div>
        <div>
          <p>HubSpot First Name: </p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="">Blinq field</label>
            <input
              name="blinqFirstName"
              type="text"
              value={customFields.blinqFirstName.value}
              onChange={onCustomFieldChange}
            />
          </div>
        </div>
        <div>
          <p>HubSpot Last Name: </p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="">Blinq field</label>
            <input
              name="blinqLastName"
              type="text"
              value={customFields.blinqLastName.value}
              onChange={onCustomFieldChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
