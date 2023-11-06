import React, { useContext, useEffect, useState } from "react";
import { PlanFeatureMappingContext } from "../context/PlanFeatureMappingContext";
import { AddPlanFeatureMapping } from "./AddPlanFeatureMapping";

export const PlanFeatureMapping = () => {
  const [category, serCategory] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [isMappingEnable, setIsMappingEnable] = useState(false);

  const { getPlanFeatureMapping } = useContext(PlanFeatureMappingContext);

  useEffect(() => {
    if (!!getPlanFeatureMapping()) {
      setCategoryList(getPlanFeatureMapping().categories);
    }
  }, [getPlanFeatureMapping()]);
  console.log(categoryList, "categoryListcategoryList");

  const handleChange = (e) => {
    //   TODO - add select cat logic here
    console.log(e.target.value, "selected val");
    if (e.target.value !== "Choose a category") {
      serCategory(e.target.value);
    } else {
      serCategory("");
    }
  };
  const handleChangeMapping = (e) => {
    console.log(e.target.checked, "selected val");
    setIsMappingEnable(e.target.checked);
  };
  return (
    <div class="w-3/4 h-screen bg-slate-100 mt-10 mb-10">
      <div className="w-96 m-8 p-4">
        <label
          for="category"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select an option
        </label>
        <select
          onChange={handleChange}
          id="category"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Choose a category</option>
          {categoryList.map((cat) => (
            <option value={cat.display_name}> {cat.display_name}</option>
          ))}
        </select>
        {!!category && (
          <div class="flex items-center mt-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              onChange={handleChangeMapping}
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-checkbox"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
                {/* // TODO - change this keyword to actual feature */}
              Should this feature is applied to {category}
            </label>
          </div>
        )}

       
      </div>
      {!!isMappingEnable && !!category && <AddPlanFeatureMapping/>}
    </div>
  );
};
