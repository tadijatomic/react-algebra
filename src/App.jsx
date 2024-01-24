import { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm";
import UserDetails from "./components/UserDetails";

function App() {
  const [userData, setUserData] = useState(null);

  const searchUser = async (username) => {
    try {
      const userResponse = await fetch(
        `https://api.github.com/users/${username}`
      );
      const userData = await userResponse.json();

      const reposResponse = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      const repositories = await reposResponse.json();

      const user = {
        avatar_url: userData.avatar_url,
        name: userData.name,
        location: userData.location,
        bio: userData.bio,
        repositories: repositories.map((repo) => ({
          id: repo.id,
          name: repo.name,
        })),
      };

      setUserData(user);
    } catch (error) {
      console.error("Greška prilikom dohvaćanja podataka:", error);
      setUserData(null);
    }
  };

  return (
    <div className="container">
      <div className="user-search">
        <UserForm onSearch={searchUser} />
      </div>
      <div className="user-details">
        {userData && <UserDetails user={userData} />}
      </div>
    </div>
  );
}

export default App;
