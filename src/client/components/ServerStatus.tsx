import { useEffect, useState } from "react";

export const ServerStatus = () => {
  const [stats, setStatus] = useState("");

  useEffect(() => {
    fetch("/api/health")
      .then((res) => res.json())
      .then((data) => setStatus(data));
  }, []);

  return (
    <div>
      <h1>Server status</h1>
      <p>{stats}</p>
    </div>
  );
};
