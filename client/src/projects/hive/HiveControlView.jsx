import React, { useState } from "react";
import ReactSwitch from "react-switch";
import { useHive } from "./HiveContext";
import "./Hive.css";
import { cssColourMatcher } from "./Hexagon";
import { FormCheck } from "react-bootstrap";

const colourLabels = {
  BLUE: "PN1",
  RED: "PN2",
  GREEN: "SN1",
  YELLOW: "SN2",
};

const styles = {
  label: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: "0.3em 0.2em",
    // width: "35%",
    fontSize: "0.8em",
  },
};

const ParticipantFilter = ({ colourCode }) => {
  const { hiveState, hiveSetState } = useHive();

  const [checked, setChecked] = useState(hiveState.participants[colourCode]);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
    let modifiedParticipants = { ...hiveState.participants };
    modifiedParticipants[colourCode] = nextChecked;
    hiveSetState({
      ...hiveState,
      participants: modifiedParticipants,
    });
  };

  const colour = cssColourMatcher[colourCode];
  return (
    <label style={styles.label}>
      <span>{colourLabels[colourCode]}:</span>
      <ReactSwitch onChange={handleChange} checked={checked} onColor={colour} />
    </label>
  );
};

const HivePrimaryControlView = () => {
  const { hiveState, hiveSetState } = useHive();
  const participantsKeys = Object.keys(hiveState.participants);

  return (
    <div>
      <div className={"box"}>
        <div style={{ alignContent: "flex-start" }}>
          <label style={styles.label}>
            <FormCheck
              defaultChecked={hiveState["showPositionAudioData"]}
              onChange={(e) => {
                hiveSetState({
                  ...hiveState,
                  showPositionAudioData: e.target.checked,
                });
              }}
            />
            pos+audio
          </label>
          <label style={styles.label}>
            <FormCheck
              defaultChecked={hiveState["showHeartRateData"]}
              onChange={(e) => {
                hiveSetState({
                  ...hiveState,
                  showHeartRateData: e.target.checked,
                });
              }}
            />
            heart rate
          </label>
        </div>
        {/* <label style={{ color: "#5a5a5a" }}>FILTER:</label> */}
        {participantsKeys.map((k, i) => (
          <ParticipantFilter key={i} colourCode={k} />
        ))}
      </div>
    </div>
  );
};

export { ParticipantFilter, HivePrimaryControlView };
