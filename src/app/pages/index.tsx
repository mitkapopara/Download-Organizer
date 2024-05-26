import { useState } from "react";
import axios from "axios";

const Home = () => {
  const [folderToTrack, setFolderToTrack] = useState("");
  const [folderDestination, setFolderDestination] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/organize", {
        folderToTrack,
        folderDestination,
      });
      alert(response.data.message);
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
