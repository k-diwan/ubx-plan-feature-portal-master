import React from "react";

export const AddPlanFeatureMapping = () => {
  return (
    <div>
      <div class=" flex gap-x-14 mt-4 p-2  w-full ml-10">
        <div class="w-80 h-48 bg-white  ">
          <div class="mx-20 my-8 text-4xl font-sans font-semibold justify-content-center">
            Growth
          </div>
          <div class=" mx-4 text-sm font-sans  justify-content-center">
            Essential features for small teams looking to ramp up fast
          </div>
        </div>
        <div class="w-80 h-48 bg-white  ">
          <div class="mx-32 my-8 text-4xl font-sans font-semibold justify-content-center">
            Pro
          </div>
          <div class=" mx-4 text-sm font-sans  justify-content-center">
            Advanced automation for medium-sized teams
          </div>
        </div>
        <div class="w-80 h-48 bg-white  ">
          <div class="mx-16 my-8 text-4xl font-sans font-semibold justify-content-center">
            Enterprise
          </div>
          <div class=" mx-4 text-sm font-sans  justify-content-center">
            More customization for large teams who need end-to-end governance
          </div>
        </div>
      </div>

      <div class=" flex gap-x-14 mt-4 p-2  w-full ml-10">
        <div class="w-80 h-48 bg-white  "></div>
        <div class="w-80 h-48 bg-white  "></div>
        <div class="w-80 h-48 bg-white  "></div>
      </div>
    </div>
  );
};
