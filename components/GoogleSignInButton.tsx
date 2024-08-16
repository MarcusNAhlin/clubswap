"use client";

import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
import { Button, Flex, Text } from "@mantine/core";
import { useState } from "react";
import { IconBrandGoogle } from "@tabler/icons-react";

export default function GoogleSignInButton() {
    const { data: session } = useSession();

    const [loading, setLoading] = useState(false);

    function handleSignOut() {
        setLoading(true);
        signOut();
    }

    function handleSignIn(provider: string) {
        setLoading(true);
        signIn(provider);
    }

    return (
        <>
        {
            session ?
            <>
                {
                    loading ?
                    <Button loading loaderProps={{ type: 'dots' }} w={"12rem"}></Button>
                    :
                    <Button
                    color="red"
                    onClick={() => handleSignOut()}
                    leftSection={<IconBrandGoogle />}
                    w={"12rem"}
                    >
                        Sign out
                    </Button>
                }
            </> :
            <>
            {
                    loading ?
                        <Button loading loaderProps={{ type: 'dots' }} w={"12rem"}></Button>
                    :
                        <Button
                            color="green"
                            onClick={() => handleSignIn("google")}
                            w={"12rem"}
                            leftSection={<IconBrandGoogle />}
                            >
                            Sign in with Google
                        </Button>
                    }
            </>
        }
        </>
    );
}
