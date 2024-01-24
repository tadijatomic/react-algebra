import { useState } from "react";

const UserForm = ({ onSearch }) => {
  const [username, setUsername] = useState("");

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = () => {
    onSearch(username);
  };

  return (
    <div className="form-container">
      <input
        type="text"
        placeholder="Unesite korisničko ime"
        value={username}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Traži</button>
    </div>
  );
};

export default UserForm;
