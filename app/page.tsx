import Image from "next/image";
import ChatComponent from "./chat/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <ChatComponent />
    </main>
  );
}
