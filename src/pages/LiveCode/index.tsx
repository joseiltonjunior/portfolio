import { FaPlayCircle } from "react-icons/fa";
import ReactPlayer from "react-player";
import { useModal } from "~/hooks/useModal";
import { Card } from "./Card";
import { Container, MobileView, WebView, ContentCard } from "./style";

const arr = [
  {
    title: "Teste 1",
    thumb:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    url: "https://youtu.be/o7B3E2MfEHM",
    description: "Video teste",
  },
  {
    title: "Teste 2",
    thumb:
      "https://media.istockphoto.com/id/1322593478/vector/program-code-bug-screen-glitch-vector-background.jpg?s=612x612&w=0&k=20&c=w7f1x3uhcqxkEOeYcIMJIJw1GRaiQ_-ipMYC2LpWd_4=",
    url: "https://youtu.be/7k3LLt-BUHA",
    description: "Video teste",
  },
];

export function LiveCode() {
  return (
    <Container>
      <WebView>
        {arr.map((item) => (
          <Card
            key={item.url}
            description={item.description}
            thumb={item.thumb}
            title={item.title}
            url={item.url}
          />
        ))}
      </WebView>

      <MobileView>
        {arr.map((item) => (
          <Card
          key={item.url}
          description={item.description}
          thumb={item.thumb}
          title={item.title}
          url={item.url}
          mobile
        />
        ))}
      </MobileView>
    </Container>
  );
}
