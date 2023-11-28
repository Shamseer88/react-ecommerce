import { PuffLoader } from "react-spinners";

export default function Loader() {
  return (
    <div
      className="loader"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "30vh",
      }}
    >
      <PuffLoader color="#36d7b7" />
    </div>
  );
}
