"use client";

import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

export default function ProductCard() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder w={350}>
      <Card.Section>
        <Image
          src="https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/AADH_PRD/on/demandware.static/-/Sites-CGI-ItemMaster/en_US/v1723093502523/sits/drivers-2024-paradym-ai-smoke-max/drivers-2024-paradym-ai-smoke-max___1.jpg?sw=2048&q=90&bgcolor=F7F7F7&sfrm=png"
          height={200}
          fit='cover'
          alt="Callaway Paradym Ai Smoke MAX Driver"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Callaway Paradym Ai Smoke MAX Driver</Text>
        <div>
            <Badge color="grey" m={5}>Driver</Badge>
            <Badge color="grey" m={5}>Callaway</Badge>
        </div>
      </Group>

      <Text size="sm" c="dimmed">
        Hello i am selling driver good price. No scratches.

        Text me for more information.
      </Text>

      <Text size="lg" c="red" fw="bold" style={{
        marginTop: "1rem",
        textAlign: "right",
      }}>
        $299.99
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        Text seller
      </Button>
    </Card>
  );
}
