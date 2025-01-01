'use client'
import { TextInput } from "@repo/ui/text-input";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        backgroundColor: "black",
        justifyContent: "center",
        justifyItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <TextInput size="big" placeholder="Enter room name"></TextInput>
        <button onClick={() => {
          router.push("/room")
        }}>Join room</button>
      </div>
    </div>
  );
}
