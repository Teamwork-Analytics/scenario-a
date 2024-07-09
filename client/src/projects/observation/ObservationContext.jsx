//Create a context for HIVE controllable information: such as
// * change person (select checkboxes)
// * switch between overall to different phases (with slider)
// * with audio (default) or position only

// GUIDE: https://kentcdodds.com/blog/how-to-use-react-context-effectively

import React, { useState } from "react";
const ObservationContext = React.createContext();

function ObservationProvider({ simulationId, children }) {
  const [notes] = React.useState([
    {
      favourite: false,
      message: "Doctor enters",
      performers: [],
      phaseKey: "doctor_enters",
      timestamp: "2024-06-27T02:46:53.149Z",
      _id: "667cd29d46cbc27332482a51",
    },
    {
      favourite: false,
      message: "Ceases PCA",
      performers: [],
      phaseKey: "ceases_pca",
      timestamp: "2024-06-27T02:45:39.611Z",
      _id: "667cd25346cbc27332482a4d",
    },
    {
      favourite: false,
      message: "Handover to secondary nurse",
      performers: [],
      phaseKey: "handover_to_secondary_nurse",
      timestamp: "2024-06-27T02:44:42.631Z",
      _id: "667cd21a46cbc27332482a49",
    },
    {
      favourite: false,
      message: "Care for patient/s (Bed 1-3)",
      performers: [],
      phaseKey: "care_for_patient/s_(bed_1-3)",
      timestamp: "2024-06-27T02:44:24.873Z",
      _id: "667cd20846cbc27332482a45",
    },
    {
      favourite: false,
      message: "Delegates care",
      performers: [],
      phaseKey: "delegates_care",
      timestamp: "2024-06-27T02:44:23.932Z",
      _id: "667cd20746cbc27332482a41",
    },
    {
      favourite: false,
      message: "Secondary nurse enters",
      performers: [],
      phaseKey: "secondary_nurse_enters",
      timestamp: "2024-06-27T02:43:53.353Z",
      _id: "667cd1e946cbc27332482a3d",
    },
    {
      favourite: false,
      message: "Discusses call for help",
      performers: [],
      phaseKey: "discusses_call_for_help",
      timestamp: "2024-06-27T02:43:01.177Z",
      _id: "667cd1b546cbc27332482a39",
    },
    {
      favourite: false,
      message: "Calls MET",
      performers: [],
      phaseKey: "calls_met",
      timestamp: "2024-06-27T02:42:57.956Z",
      _id: "667cd1b246cbc27332482a35",
    },
    {
      favourite: false,
      message: "Applies oxygen",
      performers: [],
      phaseKey: "applies_oxygen",
      timestamp: "2024-06-27T02:42:44.265Z",
      _id: "667cd1a446cbc27332482a31",
    },
    {
      favourite: false,
      message: "Verbalises concerns",
      performers: [],
      phaseKey: "verbalises_concerns",
      timestamp: "2024-06-27T02:41:47.247Z",
      _id: "667cd16b46cbc27332482a2d",
    },
    {
      favourite: false,
      message: "Assesses Ruth",
      performers: [],
      phaseKey: "assesses_ruth",
      timestamp: "2024-06-27T02:41:38.077Z",
      _id: "667cd16246cbc27332482a29",
    },
    {
      favourite: false,
      message: "Care for patient/s (Bed 1-3)",
      performers: [],
      phaseKey: "care_for_patient/s_(bed_1-3)",
      timestamp: "2024-06-27T02:40:07.211Z",
      _id: "667cd10746cbc27332482a25",
    },
    {
      favourite: false,
      message: "Assesses Ruth",
      performers: [],
      phaseKey: "assesses_ruth",
      timestamp: "2024-06-27T02:37:49.756Z",
      _id: "667cd07d46cbc27332482a21",
    },
    {
      favourite: false,
      message: "Makes plan/ Prioritises care",
      performers: [],
      phaseKey: "makes_plan/_prioritises_care",
      timestamp: "2024-06-27T02:36:36.000Z",
      _id: "667cd07046cbc27332482a16",
    },
    {
      favourite: false,
      message: "Handover ends",
      performers: [],
      phaseKey: "handover_ends",
      timestamp: "2024-06-27T02:35:27.000Z",
      _id: "667cd05846cbc27332482a0a",
    },
    {
      favourite: false,
      message: "Scenario started",
      performers: [],
      phaseKey: "scenario_started",
      timestamp: "2024-06-27T02:30:37.542Z",
      _id: "667ccecd46cbc273324829fb",
    },
  ]);

  const [observation, setObservation] = React.useState({
    synchronisations: [],
  });
  const [obsStartTime] = useState("2024-06-27T02:29:43.925Z");
  const [obsEndTime] = useState("2024-06-27T02:54:29.955Z");

  const [isDataReady] = React.useState(true);

  const value = {
    notes,
    observation,
    setObservation,
    obsStartTime,
    obsEndTime,
    isDataReady,
  };
  return (
    <ObservationContext.Provider value={value}>
      {children}
    </ObservationContext.Provider>
  );
}

function useObservation() {
  const context = React.useContext(ObservationContext);
  if (context === undefined) {
    throw new Error("useObservation must be used within a ObservationProvider");
  }
  return context;
}

export { ObservationProvider, useObservation };
