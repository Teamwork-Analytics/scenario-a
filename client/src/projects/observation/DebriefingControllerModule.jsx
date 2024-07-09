import { TimelineProvider } from "./visualisationComponents/TimelineContext";
import { DebriefingProvider } from "../debriefing-projection/DebriefContext";
import { HiveProvider } from "../hive/HiveContext";
import DebriefingControllerView from "./DebriefingControllerView";

const DebriefingControllerModule = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <TimelineProvider simulationId={416}>
        <DebriefingProvider simulationId={416}>
          <HiveProvider simulationId={416}>
            <DebriefingControllerView />
          </HiveProvider>
        </DebriefingProvider>
      </TimelineProvider>
    </div>
  );
};

export default DebriefingControllerModule;
