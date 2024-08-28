import { useSession } from "next-auth/react";
import { Title, Text, Alert, Flex, Image } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";
import GoogleSignInOutButton from "components/GoogleSignInOutButton";
import { PrismaClient, Post as PostType } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { authOptions } from 'lib/authOptions';
import MyPost from 'components/MyPost';


const prisma = new PrismaClient();
let posts: PostType[];

export default async function AccountPage() {

    const session = await getServerSession(authOptions);
    let loggedInUserId;

    if (session && prisma) {

        if (session.user && session.user.email) {
            loggedInUserId = await prisma.user.findUnique({
                where: {
                    email: session.user.email
                }
            })
        }

        if (loggedInUserId) {
            posts = await prisma.post.findMany({
                where: {
                    user: loggedInUserId
                }
            })

            if (posts.length > 0) {

            }
        }
    }

    return (
        <>
            <Title>Account</Title>
            {
                session ?
                    <>
                        <Flex direction="column" align={"center"} gap={"lg"} justify={"center"} mt={"10vh"}>
                            <Text size="xl">Welcome, <strong>{session.user?.name}</strong>!</Text>
                            {/* <GoogleSignInOutButton /> */}
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
            {
                posts ? <>
                    <Flex direction={"row"} wrap={"wrap"} justify={"start"} gap="md" p="lg" >
                        {posts.map(post => (
                            <MyPost key={post.id} post={post} />
                        ))}
                    </Flex>
                </> : null
            }
        </>
    );
}
