import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: "Dieguinho",
  description: "Essa fera meu!",
  link: "https://github.com/diegoholiveirav",
};

export function RepositoryList() {
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
