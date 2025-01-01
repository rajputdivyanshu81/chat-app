
interface PropType {
    placeholder: string;
    size:"big" | "small";
}

export function TextInput({
     placeholder 
    ,size
    }: PropType) {
    return (
        <input
            placeholder={placeholder}
            style={{
               padding: size === "big" ? "10px" : "5px",
               margin: size === "big" ? "10px" : "5px",
               border: "1px solid black",
               borderWidth: "1px",
               borderRadius: "5px",
            }}
        ></input>
    );
}