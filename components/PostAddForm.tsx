"use client";

import { useForm } from "@mantine/form";
import { TextInput, Textarea, NumberInput, MultiSelect, Select, Button, Flex, Group } from "@mantine/core";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PostAddForm() {
    const [submittedValues, setSubmittedValues] = useState<typeof form.values | null>(null);
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const shaftFlex = ['X-Stiff','Stiff', 'Regular', 'Lady', 'Senior', 'Junior', 'Other'];
    const brands = [
        'Bridgestone',
        'Callaway',
        'Cleveland',
        'Cobra',
        'Mizuno',
        'Nike',
        'Ping',
        'PXG',
        'Srixon',
        'TaylorMade',
        'Titleist',
        'Wilson',
        'XXIO',
        'Other'
    ];

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: { title: '', description: '', price: null, shaft_flex: '', brand: '', pickup_location: ''},

        validate: {
            title: (value) => (value.length < 5 ? 'Title too short' : null),
            description: (value) => (value.length < 20 ? 'Description too short' :
                                    value.length > 300 ? 'Description too long' : null),
            price: (value) => (value === null ? 'Please select price' :
                                value <= 0 ? 'Price too low' :
                                value > 100000 ? 'Price too high' : null),
            shaft_flex: (value) => (value.length === 0 ? 'Please pick shaft flex' :
                                    /*shaftFlex.includes(value) ? 'Shaft flex not valid' :*/ null),
            brand: (value) => (value.length === 0 ? 'Please pick brand' :
                                /*brands.includes(value) ? 'Brand not valid' :*/ null),
            pickup_location: (value) => (value.length === 0 ? 'Please enter pickup location' :
                                        value.length < 5 ? 'Location too short' :
                                        value.length > 50 ? 'Location too long' : null
            ),
        },
        });

    async function handleSubmit() {
        setLoading(true);
        setSubmittedValues

        let postRes = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/post`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form.getValues()),
        });

        if (postRes.status === 200) {
            router.push('/account');
        }
    }

    return (
        <>
        <form onSubmit={form.onSubmit(handleSubmit)}>
            <TextInput
                required
                label="Title"
                placeholder="A catchy title for your club"
                key={form.key('title')}
                {...form.getInputProps('title')}
                />

            <Textarea
                required
                label="Description"
                placeholder="Describe your club and its condition"
                key={form.key('description')}
                {...form.getInputProps('description')}
                />

            <NumberInput
                required
                label="Price (SEK)"
                placeholder="1 - 100 000"
                min={0}
                max={100000}
                key={form.key('price')}
                {...form.getInputProps('price')}
                />

            <Select
                required
                searchable
                label="Brand"
                placeholder="Click to pick brand of club"
                data={brands}
                key={form.key('brand')}
                {...form.getInputProps('brand')}
                />

            <Select
                required
                searchable
                label="Shaft flex"
                placeholder="Click to pick shaft flex"
                data={shaftFlex}
                key={form.key('shaft_flex')}
                {...form.getInputProps('shaft_flex')}
                />

            <TextInput
                required
                label="Pickup location"
                placeholder="Write about your preferred pickup location"
                key={form.key('pickup_location')}
                {...form.getInputProps('pickup_location')}
                />

            {
                loading ?
                <Button loading loaderProps={{ type: 'dots' }} w={"12rem"}></Button>
                :
                <Button
                type="submit"
                color="blue"
                variant="outline"
                size="lg"
                >Post</Button>
            }
        </form>
        </>
    );
}
