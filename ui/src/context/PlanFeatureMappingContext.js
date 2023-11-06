import { createContext, useState } from "react";
import { planFilter } from "../mocks";

export const PlanFeatureMappingContext = createContext();

const PlanFeatureMappingState = ({ children }) => {
  const initialValues = {
    user: {
      product_name: null,
      product_id: null,
      email_id: localStorage.getItem("ue"),
      environment: null,
      step_completed: 0,
    },
    userLoading: false,
    err: null,
  };

  // const [omnibillproxy, setOmnibillproxy] = useState(null)
  // const [bundleMetadata, setbundleMetadata] = useState(null)
  // const [category, setcategory] = useState(null)
  // const [steps, setSteps] = useState(initialValues)

  // const [stepDetails, setStepDetails] = useState({})

  const getPlanFeatureMapping =   () => {
    // TODO - check not able to get data from API
    return planFilter
  };



  return (
    <PlanFeatureMappingContext.Provider value={{ getPlanFeatureMapping }}>
      {children}
    </PlanFeatureMappingContext.Provider>
  );
};

export default PlanFeatureMappingState;
