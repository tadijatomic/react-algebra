const UserDetails = ({ user }) => {
  return (
    <div className="user-details">
      <img src={user.avatar_url} alt="Profilna slika" />
      <div>
        <h2>{user.name}</h2>
        <p>
          <b>Lokacija:</b> {user.location}
        </p>
        <p>{user.bio}</p>
      </div>
      <div>
        <b>Repos:</b>
        <ul>
          {user.repositories.map((repo) => (
            <li key={repo.id}>{repo.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserDetails;
