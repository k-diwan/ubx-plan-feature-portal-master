import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import PlanFeatureMappingState, {
  PlanFeatureMappingContext,
} from "../context/PlanFeatureMappingContext";
import { featureData, planFilter } from "../mocks";

export const FeatureList = () => {
  console.log(planFilter, "ppppp");
  const [featureName, setFeatureName] = useState("");
  const [featureData, setFeatureData] = useState([]);

  const { getPlanFeatureMapping } = useContext(PlanFeatureMappingContext);

  useEffect(() => {
    if (!!getPlanFeatureMapping() && !!getPlanFeatureMapping().features) {
      setFeatureData(getPlanFeatureMapping().features);
    }
  }, [getPlanFeatureMapping()]);

  const onSearch = ({ target }) => {
    //   TODO - Add Search logic here
    setFeatureName(target.value);
    console.log(featureName, "searched feature");
  };
  return (
    <div class="w-1/5 h-screen overflow-auto bg-gray-100 ml-10 mt-10 p-2">
      <div>
        {/* <input> </input> */}
        <input
          type="text"
          name="feature"
          id="feature"
          class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Search"
          onChange={onSearch}
          value={featureName}
        />
      </div>

      {/* // !!TODO - Add all the feature here   */}
      {/* {console.log(featureData.features[0], "featureDatafeatureData")} */}
      {!!featureData &&
        featureData.map((list) => (
          <div class="bg-white h-auto px-4 py-4 mt-4">
            <h1>{list.display_name}</h1>
          </div>
        ))}
    </div>
  );
};
