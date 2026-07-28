import { useState } from "react";
import JobApplication from "./JobApplication";

export default function Conditioncomp() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(18);
  return (
    <>
      <h2>Condition comp</h2>
      <h1>Job Application Form</h1>
      <input
        value={name}
        placeholder="Enter your Name"
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <input value={age} placeholder="Enter your Name" type="Number" 
      onChange={(e) => setAge(e.target.value)}
      />
      {age > 18 ? (
        <JobApplication />
      ) : (
        <h3 style={{ color: "red" }}>Your not allowed to apply for this job</h3>
      )}
    </>
  );
}
 