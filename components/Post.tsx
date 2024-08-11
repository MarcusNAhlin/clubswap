"use client";

import { Post as PostType } from '@prisma/client';
import { Card, Image, Text, Badge, Button, Group, Flex, Container } from '@mantine/core';

interface PostProps {
    post: PostType;
}

export default function Post({ post }: PostProps) {
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder w={350} h={550}>
          <Card.Section>
            <Image
              src="https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/AADH_PRD/on/demandware.static/-/Sites-CGI-ItemMaster/en_US/v1723093502523/sits/drivers-2024-paradym-ai-smoke-max/drivers-2024-paradym-ai-smoke-max___1.jpg?sw=2048&q=90&bgcolor=F7F7F7&sfrm=png"
              height={200}
              fit='cover'
              alt={post.title}
            />
          </Card.Section>

          <Flex direction={"column"} justify="space-between" mt="md" mb="xs">
            <Container fluid ml={0} pl={0}>
                <Text fw="bold" fz="lg">{ post.title }</Text>
            </Container>
            <Flex
                direction={"row"}
                justify="space-between"
                wrap='nowrap'
            >
                <Text fw={300}>{ post.user_name }</Text>
                <Text fw={300}>{ post.pickup_location }</Text>
            </Flex>
            <div>
                <Badge color="grey" m={5}>Driver</Badge>
                <Badge color="grey" m={5}>{ post.brand }</Badge>
                <Badge color="grey" m={5}>{ post.shaft || "unknown shaft" }</Badge>
            </div>
          </Flex>

          <Text size="m" style={{
            flexGrow: 1,
          }}>{ post.description }</Text>

          <Text size="lg" c="red" fw="bold" style={{
            marginTop: "1rem",
            textAlign: "right",
          }}>
            { post.price_sek } SEK
          </Text>

          <Button color="blue" fullWidth mt="md" radius="md">
            Contact seller
          </Button>
        </Card>
      );
}
