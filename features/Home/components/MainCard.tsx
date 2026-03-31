"use client";
import { Button, Card } from "@heroui/react";

const HomeMainCard = ({ handleLogin }: { handleLogin: () => void }) => {
  return (
    <div className="tracking-tight">
      <div className="mx-auto mt-[30vh] max-w-2xl ">
        <Card variant="secondary">
          <Card.Header>
            <Card.Title>Welcome to the App</Card.Title>
            <Card.Description></Card.Description>
          </Card.Header>
          <Card.Content>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
              quisquam suscipit, et nam odio dicta quis aut autem incidunt porro
              earum quaerat. Officia voluptatibus deleniti quos voluptates
              minima, ratione totam doloribus illum inventore neque cum
              accusantium sint corporis maxime explicabo quidem delectus!
            </p>
          </Card.Content>
          <Card.Footer className="mt-4 flex flex-col gap-2">
            <Button className="w-full" type="submit" onClick={handleLogin}>
              Login
            </Button>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
};

export default HomeMainCard;
