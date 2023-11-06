import axios from "axios";
import { useState } from "react";
import { FeatureList } from "../components/FeatureList";
import { PlanFeatureMapping } from "../components/PlanFeatureMapping";
import { featureData } from "../mocks";

function Portals() {

  return (
    <div class="flex gap-x-10">
      <FeatureList />
      <PlanFeatureMapping />
    </div>
  );
}

export default Portals;
