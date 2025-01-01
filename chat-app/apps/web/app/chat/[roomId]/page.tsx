
import { TextInput } from "@repo/ui/text-input";
export default function Room() {
  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent:"space-between",
      flexDirection: "column",
    }}>
      <div>
        Chat Room
        </div>
        <div>
    <TextInput size="big" placeholder="Enter message"></TextInput>
        </div>
    </div>
  );
}