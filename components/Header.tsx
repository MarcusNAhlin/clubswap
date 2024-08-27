import { Flex } from "@mantine/core";

export default function Header({ text }: { text: string }) {
    return (
    <>
      <Flex w={"100%"}>
        <h1>{text}</h1>
      </Flex>
    </>
    );
  }
  