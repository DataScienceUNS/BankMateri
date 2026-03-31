"use client";
import { authClient, useSession } from "@/lib/auth/client";
import { Button, Card, Table } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function page() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login"); // redirect to login page
        },
      },
    });
  };

  return (
    <div className="tracking-tight">
      <div className="mx-auto mt-[30vh] max-w-2xl ">
        <Card variant="secondary">
          <Card.Header>
            <Card.Title>
              Congratulations, you've successfully logged in 🎉
            </Card.Title>
            <Card.Description></Card.Description>
          </Card.Header>
          <Card.Content>
            <Table>
              <Table.ScrollContainer>
                <Table.Content aria-label="Team members" className="w-full">
                  <Table.Header>
                    <Table.Column isRowHeader>Key</Table.Column>
                    <Table.Column>Value</Table.Column>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>ID</Table.Cell>
                      <Table.Cell>{session?.user?.id}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Username</Table.Cell>
                      <Table.Cell>{session?.user?.name}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Email</Table.Cell>
                      <Table.Cell>{session?.user?.email}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Profile</Table.Cell>
                      <Table.Cell>
                        <img
                          src={session?.user?.image as string}
                          alt="Profile"
                        />
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table.Content>
              </Table.ScrollContainer>
            </Table>
          </Card.Content>
          <Card.Footer className="mt-4 flex flex-col gap-2">
            <Button className="w-full" type="submit" onPress={handleLogout}>
              Log Out
            </Button>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
}
