
import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const courseNames = [
    "Firewall (FortiGate, PALEO) & CCN, Windows",
    "Bim Revit (Architecture MEP)",
    "SAP Abap Advanced",
    "Python",
    "Data Science & Python",
    "Sales Force",
    "Talent Course (Sequel Server)",
    "Service Now",
    "UI Path",
    "R, Python, Machine Learning, Data Science",
    "Power BI, MySQL",
    "Full Stack Development with JavaScript",
    "Full Stack Development with Python",
    "Full Stack Development with Java",
    "Full Stack Development with .NET",
    "Full Stack Development with Ruby on Rails"
  ];
  

  return (
    <div className=" flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Learn
        <FlipWords words={courseNames} /> <br />
        Courses with ATME top faculty
      </div>
    </div>
  );
}
