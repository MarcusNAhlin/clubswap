import { MultiSelect, RangeSlider } from '@mantine/core';

export default function Filter() {
    return (
    <>
    <div style={{
        width: "90vw",
        margin: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    }}>
        <MultiSelect
            w={300}
            label="Type of clubs"
            placeholder="Pick club types"
            data={['Woods', 'Irons', 'Wedges', 'Putters', 'Drivers', 'Hybrids', 'Fairway Woods', 'Utility Irons', 'Chippers']}
            clearable
            />

        <RangeSlider w={300} minRange={0} min={0} max={50000} step={50} defaultValue={[0, 50000]} />
    </div>
    </>
    );
  }
  