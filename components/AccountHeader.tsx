"use client";

import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
import { Button, Flex, Text } from "@mantine/core";

export default function AccountHeader() {
    const { data: session } = useSession();

    return (
    <>
        {
            session ? <>
                <Flex align="center" gap="md" mr="md" mt="md" justify="end" pos="absolute" top="0" right="0">
                    <Text m="0">{session.user?.name}</Text>
                    <Button
                        color="red"
                        onClick={() => signOut()}
                        >
                        Sign out
                    </Button>
                </Flex>
            </> : <>
                <Flex align="center" gap="md" mr="md" mt="md" justify="end" pos="absolute" top="0" right="0">
                    <Button
                        color="green"
                        onClick={() => signIn("google")}
                        >
                        Sign in with Google
                    </Button>
                </Flex>
            </>
        }
    </>
    );
}
