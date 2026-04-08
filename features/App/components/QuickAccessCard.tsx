import { Button, Card, Chip } from "@heroui/react";

const AppQuickAccessCard = () => {
  const dummyDataCount = 10;
  return (
    <div className="h-full flex flex-col mx-2 gap-1.5">
      {Array.from({ length: dummyDataCount }).map((_, index) => (
        <Card variant="default" key={index} className="flex flex-col">
          <Card.Header>
            <Card.Title className="text-base font-semibold flex items-center justify-between gap-2">
              <span className="truncate">Mata Kuliah {index + 1}</span>
              <Chip>PDF</Chip>
            </Card.Title>
            <Card.Description className="line-clamp-3">
              Queue, List, Stack - Implementasi dalam kehidupan sehari-hari.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur, voluptatem.
            </Card.Description>
          </Card.Header>
          <Card.Footer>
            <Button className="w-full">Lihat Materi</Button>
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
};

export default AppQuickAccessCard;
