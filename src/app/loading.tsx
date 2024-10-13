import { CircularProgress } from "@nextui-org/react";

export default function Loading() {
  return (
    <CircularProgress
      className="mx-auto mt-10"
      classNames={{
        svg: "w-36 h-36 drop-shadow-md",
      }}
      aria-label="Loading page"
    />
  );
}
