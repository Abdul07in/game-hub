import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} objectFit="cover" height={350} />
      <CardBody>
        <Heading fontSize="2xl" color={"gray.100"}>
          {game.name}
        </Heading>
        <HStack marginY={2}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
        </HStack>
      </CardBody>
    </Card>
  );
};
export default GameCard;
