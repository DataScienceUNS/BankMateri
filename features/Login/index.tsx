"use client";
import { authClient } from "@/lib/auth/client";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useState } from "react";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = async () => {
    setIsLoading(true);
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/home",
    });
  };

  return (
    <div className="tracking-tight">
      <div className="mx-8 mt-[30vh] ">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">
            Login
          </h1>
          <h3 className="text-neutral-700">
            Semua akun dapat digunakan untuk akses materi, namun gunakan akun
            SSO UNS jika ingin mendapatkan hak akses istimewa.
          </h3>
        </div>
        <div className="mt-6">
          <Button
            variant="tertiary"
            onPress={handleLogin}
            className="w-full"
            isDisabled={isLoading}
          >
            {isLoading ? (
              <Icon icon="line-md:loading-loop" />
            ) : (
              <Icon icon="flat-color-icons:google" />
            )}
            <span className="text-neutral-700">Continue with Google</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
