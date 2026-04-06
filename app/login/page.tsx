import Login from "@/features/Login";
import { LoginMetadata } from "@/features/Login/metadata";

export const metadata = LoginMetadata;

export default function page() {
  return <Login />;
}
