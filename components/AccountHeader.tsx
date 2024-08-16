import { Flex } from "@mantine/core";
import GoogleSignInButton from "components/GoogleSignInButton";

export default function AccountHeader() {

    return (
    <>
        <Flex align="center" gap="md" mr="md" mt="md" justify="end" pos="absolute" top="0" right="0">
            <GoogleSignInButton />
        </Flex>
    </>
    );
}
