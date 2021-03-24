import { useState, useEffect } from "react";

import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";

// https://api.github.com/orgs/groove.tech/repos

const repository = {
  name: "Dieguinho",
  description: "Essa fera meu!",
  link: "https://github.com/diegoholiveirav",
};

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios!</h1>
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
