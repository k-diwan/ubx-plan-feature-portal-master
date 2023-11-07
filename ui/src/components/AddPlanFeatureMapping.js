import React, { useState } from "react";
import { PLAN_TYPE } from "../CONST";

export const AddPlanFeatureMapping = () => {
  const [planFeatureIdForGrowth, setPlanFeatureIdForGrowth] = useState("");

  const [planFeatureDescForGrowth, setPlanFeatureDescForGrowth] = useState("");

  const [planFeatureIdForPro, setPlanFeatureIdForPro] = useState("");
  const [planFeatureDescForPro, setPlanFeatureDescForPro] = useState("");

  const [planFeatureIdForEnterprise, setPlanFeatureIdForEnterprise] =
    useState("");
  const [planFeatureDescForEnterprise, setPlanFeatureDescForEnterprise] =
    useState("");
  // console.log("👀 - AddPlanFeatureMapping - planFeatureIdForGrowth:", planFeatureIdForGrowth)
  const onSubmit = () => {
    console.log("Submit button clicked!!! ");
    // TODO - create a list with selected data and create a API call..
  };
  const onCancel = () => {
    setPlanFeatureIdForGrowth("");
    setPlanFeatureDescForGrowth("");
    setPlanFeatureIdForPro("");
    setPlanFeatureDescForPro("");
    setPlanFeatureIdForEnterprise("");
    setPlanFeatureDescForEnterprise("");

    console.log("Cancel button clicked!!! ");
  };
  return (
    <div>
      <div class=" flex gap-x-14 mt-4 p-2  w-full ml-10">
        {PLAN_TYPE.map((list) => (
          <div class="w-80 h-48 bg-white  ">
            <div class="mx-20 my-8 text-4xl font-sans font-semibold justify-content-center">
              {list.plan_name}
            </div>
            <div class=" mx-4 text-sm font-sans  justify-content-center">
              {list.desc}
            </div>
          </div>
        ))}
      </div>

      <div class=" flex gap-x-14 mt-4 p-2  w-full ml-10">
        <div class="w-80 h-64 bg-white p-2">
          <div class="text-gray-900 text-sm">Please enter PlanID below :</div>
          <input
            type="text"
            name="feature"
            id="feature"
            class="block p-2 w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Plese Enter PlanID"
            onChange={(e) => setPlanFeatureIdForGrowth(e.target.value)}
            value={planFeatureIdForGrowth}
          />
          <div class="text-gray-900 text-sm mt-4">
            Please enter Desc below :
          </div>
          <input
            type="text"
            name="feature"
            id="feature"
            class="block p-2 w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Plase Add Desc"
            onChange={(e) => setPlanFeatureDescForGrowth(e.target.value)}
            value={planFeatureDescForGrowth}
          />
        </div>
        <div class="w-80 h-64 bg-white p-2 ">
          <div class="text-gray-900 text-sm">Please enter PlanID below :</div>
          <input
            type="text"
            name="feature"
            id="feature"
            class="block p-2 w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Plese Enter PlanID"
            onChange={(e) => setPlanFeatureIdForPro(e.target.value)}
            value={planFeatureIdForPro}
          />
          <div class="text-gray-900 text-sm mt-4">
            Please enter Desc below :
          </div>
          <input
            type="text"
            name="feature"
            id="feature"
            class="block p-2 w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Plase Add Desc"
            onChange={(e) => setPlanFeatureDescForPro(e.target.value)}
            value={planFeatureDescForPro}
          />
        </div>
        <div class="w-80 h-64 bg-white p-2 ">
          <div class="text-gray-900 text-sm">Please enter PlanID below :</div>
          <input
            type="text"
            name="feature"
            id="feature"
            class="block p-2 w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Plese Enter PlanID"
            onChange={(e) => setPlanFeatureIdForEnterprise(e.target.value)}
            value={planFeatureIdForEnterprise}
          />
          <div class="text-gray-900 text-sm mt-4">
            Please enter Desc below :
          </div>
          <input
            type="text"
            name="feature"
            id="feature"
            class="block p-2 w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Plase Add Desc"
            onChange={(e) => setPlanFeatureDescForEnterprise(e.target.value)}
            value={planFeatureDescForEnterprise}
          />
        </div>
      </div>

      <div class="flex justify-end p-4 mr-72 mt-10">
        <div>
          <button
            onClick={onSubmit}
            class=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Save
          </button>
          <button
            onClick={onCancel}
            class=" bg-transparent hover:bg-red-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-4"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
