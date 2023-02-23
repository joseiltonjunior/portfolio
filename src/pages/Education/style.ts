import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.p`
  font-weight: bold;
  font-size: 0.9rem;
  line-height: 2;
`;

export const TextActivities = styled.p`
  font-size: 0.9rem;
`;

export const TextInfo = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.Dark_400};
`;

export const ContentActivities = styled.div`
  margin-top: 0.5rem;
  line-height: 1.4;
`;
