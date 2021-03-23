export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository.name ?? "Nonnnn 😓"}</strong>
      <p>{props.repository.description}</p>

      <a href={props.repository.link}>Acessar Repositório</a>
    </li>
  );
}
