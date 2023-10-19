import React from "react";

export const RequestHeader: React.FC = () => {
  return (
    <div className="flex flex-row gap-2 font-semibold">
      <div className="w-[100px]">SKUs</div>
      <div className="flex-1">Description</div>
      <div className="w-[100px]">Plan (ton)</div>
      <div className="w-[230px]">Start-End</div>
      <div className="w-[150px]">Actions</div>
    </div>
  );
};
