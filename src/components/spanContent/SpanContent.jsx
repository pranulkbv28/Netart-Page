import React from "react";

const SpanContent = (props, index) => {
  const spanItems = [
    {
      value: "CHEMICALS & PROCESS",
    },
    {
      value: "POWER",
    },
    {
      value: "WATER & WASTE WATER",
    },
    {
      value: "OILS & gAS",
    },
    {
      value: "PHARMA",
    },
    {
      value: "SUGARS & DISTILARIES",
    },
    {
      value: "PAPER & PULP",
    },
    {
      value: "MARINE & DEFENCE",
    },
    {
      value: "METAL & MINING",
    },
    {
      value: "FOOD & BEVERAGE",
    },
    {
      value: "PETROCHEMICAL & REFINERIES",
    },
    {
      value: "SOLAR",
    },
    {
      value: "BUILING",
    },
    {
      value: "HVAC",
    },
    {
      value: "FIRE FIGHTING",
    },
    {
      value: "AGRICULTURAL & RESIDENTIAL",
    },
  ];

  return spanItems.map((spanItem, index) => {
    return (
      <span
        key={index}
        style={
          index === spanItems.length - 1
            ? { padding: "0 5px" }
            : { borderRight: "1px solid red", padding: "0 5px" }
        }
      >
        <b>{spanItem.value}</b>
      </span>
    );
  });
};

export default SpanContent;
