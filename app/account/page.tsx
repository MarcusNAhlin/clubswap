"use client";

import { useSession } from "next-auth/react";
import { Title, Text, Alert, Flex, Image } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";
import GoogleSignInOutButton from "components/GoogleSignInOutButton";

export default function AccountPage() {

    const { data: session } = useSession();

    return (
        <>
            <Title>Account</Title>
            {
                session ?
                    <>
                        <Flex direction="column" align={"center"} gap={"lg"} justify={"center"} mt={"10vh"}>
                            <Text size="xl">Welcome, <strong>{session.user?.name}</strong>!</Text>
                            {/* <Image
                                h={100}
                                w={100}
                                radius={"md"}
                                alt="User profile image"
                                src={session.user?.image}
                            ></Image> */}
                            <GoogleSignInOutButton />
                        </Flex>
                    </>
                    :
                    <>
                        <Flex direction="column" align={"center"} gap={"lg"} justify={"center"} mt={"10vh"}>
                            <Alert variant="light" color="red" title="Not signed in" icon={<IconInfoCircle />} w={"500px"} maw={"90vw"}>
                                You need to sign in to access your account page!
                            </Alert>
                            <GoogleSignInOutButton />
                        </Flex>
                    </>
            }
        </>
    );
}
