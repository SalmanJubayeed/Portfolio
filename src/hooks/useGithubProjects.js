import { useEffect, useState } from "react";

export default function useGithubProjects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/SalmanJubayeed/repos")
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  return repos;
}