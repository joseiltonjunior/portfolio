import { useCallback, useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import apiGitHub from "~/services/apiGithub";
import { IRepositories } from "~/types/repositories";
import {
  Card,
  Container,
  Description,
  RowContent,
  Title,
  StarContent,
  Info,
} from "./styles";

interface IProjects {
  data?: IRepositories[];
}

export function Projects({ data }: IProjects) {
  const [repos, setRepos] = useState<IRepositories[]>();

  const filterRepos = useCallback((repos: IRepositories[]) => {
    const portfolio = repos.filter((item) => item.name === "portfolio");
    const portfolioBackend = repos.filter(
      (item) => item.name === "portfolio-backend"
    );

    setRepos([...portfolio, ...portfolioBackend]);
  }, []);

  useEffect(() => {
    if (data) filterRepos(data);
  }, []);

  return (
    <Container>
      {repos &&
        repos.map((repo) => (
          <Card
            key={repo.id}
            onClick={() => {
              window.open(repo.html_url, "_blank");
            }}
          >
            <Title>{repo.name}</Title>
            <Description>{repo.description}</Description>
            <RowContent>
              <Info>{repo.language}</Info>
              <StarContent>
                <FaRegStar />
                <Info>{repo.stargazers_count}</Info>
              </StarContent>
            </RowContent>
          </Card>
        ))}
    </Container>
  );
}
