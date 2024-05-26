"use client";

import { useState } from "react";

const Home = () => {
  const [folderToTrack, setFolderToTrack] = useState("");
  const [folderDestination, setFolderDestination] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/organize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          folderToTrack,
          folderDestination,
        }),
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Download Organizer</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Folder to Track</label>
          <input
            type="text"
            value={folderToTrack}
            onChange={(e) => setFolderToTrack(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Destination Folder</label>
          <input
            type="text"
            value={folderDestination}
            onChange={(e) => setFolderDestination(e.target.value)}
            required
          />
        </div>
        <button type="submit">Start Organizing</button>
      </form>
    </div>
  );
};

export default Home;
