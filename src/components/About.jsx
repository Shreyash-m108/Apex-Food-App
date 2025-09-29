import { useEffect, useState } from "react";

const About = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch("https://api.github.com/users/Shreyash-m108");
    const jsonData = await data.json();
    console.log(jsonData);
    setUserInfo(jsonData);
  };

  if (userInfo == null) {
    return <h1>Loading...</h1>;
  }

  const { avatar_url, bio, location, name, public_repos, html_url } = userInfo;

  return (
    <div className="about-page">
      <div className="background-shapes"></div>
      <div className="glass-card">
        <img className="profile-avatar" src={avatar_url} alt={name} />
        <h1 className="profile-name">{name}</h1>
        <p className="profile-bio">{bio}</p>

        <div className="profile-stats">
          <div className="stat-item">
            <span className="stat-value">{public_repos}</span>
            <span className="stat-label">Repositories</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{location}</span>
            <span className="stat-label">Location</span>
          </div>
        </div>

        <a
          href={html_url}
          className="profile-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default About;
