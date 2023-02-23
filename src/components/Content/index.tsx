import { Section } from "../Section";
import { Abbout } from "~/pages/About";

import { Container } from "./style";
import { Skills } from "~/pages/Skills";
import { useTranslation } from "react-i18next";
import { Projects } from "~/pages/Projects";
import { useCallback, useEffect, useState } from "react";
import { IRepositories } from "~/types/repositories";
import apiGitHub from "~/services/apiGithub";

import { Videos } from "~/pages/Videos";

export function Content() {
  const [repos, setRepos] = useState<IRepositories[]>();

  const { t } = useTranslation();

  const handleReposGitHub = useCallback(() => {
    apiGitHub.get("/users/joseiltonjunior/repos").then((result) => {
      setRepos(result.data);
    });
  }, []);

  useEffect(() => {
    handleReposGitHub();
  }, []);

  return (
    <Container>
      <Section title={t("aboutTitle")}>
        <Abbout />
      </Section>
      <Section title={t("skillsTitle")} show>
        <Skills />
      </Section>
      {repos && (
        <Section title={t("projects")} show>
          <Projects data={repos} />
        </Section>
      )}
      <Section title={t("video")} show>
        <Videos />
      </Section>
    </Container>
  );
}
