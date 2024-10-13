import { Card, CardBody } from "@nextui-org/react";

export default function Home() {
  return (
    <Card className="mx-auto mt-10 max-w-md">
      <CardBody className="text-center">
        <h1 className="text-5xl">Next Template</h1>
        <p className="mt-2 text-xl">A simple template for Next.js</p>
      </CardBody>
    </Card>
  );
}
