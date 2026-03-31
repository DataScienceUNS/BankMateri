"use client";
import { authClient } from "@/lib/auth/client";
import { Button, Card } from "@heroui/react";

export default function page() {
  const handleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/app",
    });
  };
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
              Sebelum kamu bisa mengakses aplikasi ini, silakan login terlebih
              dahulu dengan menggunakan akun Google kamu. Klik tombol "Login" di
              bawah untuk memulai proses autentikasi. Setelah berhasil login,
              kamu akan diarahkan kembali ke halaman utama aplikasi ini. Terima
              kasih telah bergabung dengan kami!
            </p>
          </Card.Content>
          <Card.Footer className="mt-4 flex flex-col gap-2">
            <Button className="w-full" type="submit" onPress={handleLogin}>
              Login
            </Button>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
}
