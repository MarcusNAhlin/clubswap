"use client";

import { useForm } from '@mantine/form';
import { Input, TextInput, PasswordInput, Flex, Group, Button } from '@mantine/core';

export default function RegisterForm() {

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            name: '', email: '', password: '', confirmPassword: ''
        },

        validate: {
            name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
            email: (value) => (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value) ? null : 'Invalid email'),
            password: (value) => (value.length < 6 ? 'Password must have at least 6 characters' : null),
            confirmPassword: (value, values) =>
            value !== values.password ? 'Passwords did not match' : null,
        },
    });

    return (
    <>
    <Flex justify={"center"}>
        <form onSubmit={form.onSubmit((values) => console.log(values))} style={{
            width: "400px"
        }}>
            <TextInput
                label="Name"
                placeholder="Name"
                key={form.key('name')}
                {...form.getInputProps('name')}
                />
            <TextInput
                label="Email"
                placeholder="Email"
                key={form.key('email')}
                {...form.getInputProps('email')}
                />
            <PasswordInput
            label="Password"
            placeholder="Password"
            key={form.key('password')}
            {...form.getInputProps('password')}
            />

            <PasswordInput
            mt="sm"
            label="Confirm password"
            placeholder="Password"
            key={form.key('confirmPassword')}
            {...form.getInputProps('confirmPassword')}
            />

            <Group justify="flex-end" mt="md">
                <Button type="submit">Submit</Button>
            </Group>
        </form>
    </Flex>
    </>
    );
  }
  