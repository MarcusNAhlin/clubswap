import { Alert, Flex } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';
import GoogleSignInOutButton from 'components/GoogleSignInOutButton';
import Header from 'components/Header';
import PostAddForm from 'components/PostAddForm';
import { authOptions } from 'lib/authOptions';
import { getServerSession } from 'next-auth';

export default async function AddPost() {

    const session = await getServerSession(authOptions);

    return (
    <>
        {
            session?.user ?

            <>
                <Header text="Add Post" />

                <PostAddForm />
            </>
            :
            <>
                <Header text="Add Post" />
                <Flex direction="column" align={"center"} gap={"lg"} justify={"center"} mt={"10vh"}>
                    <Alert variant="light" color="red" title="Not signed in" icon={<IconInfoCircle />} w={"500px"} maw={"90vw"}>
                        You need to sign in to post!
                    </Alert>
                    <GoogleSignInOutButton />
                </Flex>
            </>
        }
    </>
    );
}
