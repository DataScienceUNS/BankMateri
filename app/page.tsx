"use client";
import { Button, Card } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="tracking-tight">
      <div className="mx-auto mt-[30vh] max-w-2xl ">
        <Card variant="secondary">
          <Card.Header>
            <Card.Title>Apa itu bank ilmu sains data?</Card.Title>
          </Card.Header>
          <Card.Content>
            <p>
              Bank Ilmu Sains Data adalah sebuah platform yang menyediakan
              berbagai sumber daya, alat, dan layanan untuk mendukung
              pembelajaran, penelitian, dan pengembangan dalam bidang ilmu sains
              data. Platform ini bertujuan untuk memfasilitasi akses ke data,
              algoritma, model, dan pengetahuan terkait ilmu sains data bagi
              para profesional, peneliti, dan pelajar di seluruh dunia. Dengan
              menyediakan berbagai sumber daya yang relevan dan mudah diakses,
              Bank Ilmu Sains Data membantu mempercepat inovasi dan kolaborasi
              dalam komunitas ilmu sains data.
            </p>
          </Card.Content>
          <Card.Footer className="mt-4 flex flex-col gap-2">
            <Button
              className="w-full"
              type="submit"
              onPress={() => router.push("/app")}
            >
              Go to App
            </Button>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
}
