import Navbar from "@/components/Navbar/Navbar";
import { useSession, signIn, signOut } from "next-auth/react";
export default function Layout({ children }) {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="bg-gray-500 w-screen h-screen text-white flex items-center">
        <div className="text-center w-full">
          <button onClick={() => signIn("google")} className="bg-blue-500">
            Login
          </button>
        </div>
      </div>
    );
  }
  return (
    <div>
      {children}
      <Navbar />
    </div>
  );
}
