import { useCallback, useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";

import { IRepositories } from "~/types/repositories";
import {
  Card,
  Container,
  Description,
  RowContent,
  Title,
  StarContent,
  Info,
} from "./style";
import { SkeletonCard } from "./SkeletonCard";

interface IProjects {
  data?: IRepositories[];
}

export function Projects({ data }: IProjects) {
  const [repos, setRepos] = useState<IRepositories[]>();

  const filterRepos = useCallback((repos: IRepositories[]) => {
    const filter = repos.filter(
      (item) =>
        item.name !== "portfolio-deprecated" &&
        item.name !== "SwitchThemesReactTS" &&
        item.name !== "joseiltonjunior" &&
        item.name !== "after-app-deprecated"
    );

    setRepos(filter);
  }, []);

  useEffect(() => {
    if (data) filterRepos(data);
  }, []);

  return (
    <Container>
      {repos ? (
        repos.map((repo) => (
          <Card
            key={repo.id}
            title={`Abrir o projeto ${repo.name} no Github`}
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
        ))
      ) : (
        <>
          <SkeletonCard />
          <SkeletonCard />
        </>
      )}
    </Container>
  );
}
