import {
  Container,
  Box,
  Flex,
  Button,
  useColorMode,
  SimpleGrid,
} from "@chakra-ui/react";

export default function PianoKeyboard(props: any) {
  const { selectedKey, selectedOption } = props;
  const { colorMode } = useColorMode();
  const arr = [
    { key: 0, value: "C" },
    { key: 1, value: "D" },
    { key: 0.5, value: "C♯/D♭" },
    { key: 2, value: "E" },
    { key: 1.5, value: "D♯/E♭" },
    { key: 2.5, value: "F" },
    { key: 3.5, value: "G" },
    { key: 3, value: "F♯/G♭" },
    { key: 4.5, value: "A" },
    { key: 4, value: "G♯/A♭" },
    { key: 5.5, value: "B" },
    { key: 5, value: "A♯/B♭" },
  ];

  const intervalForm = [
    { key: "naturalMajor", value: [1, 1, 0.5, 1, 1, 1, 0.5] },
    { key: "harmonicMinor", value: [1, 0.5, 1, 1, 0.5, 1.5, 0.5] },
    { key: "naturalMinor", value: [1, 0.5, 1, 1, 0.5, 1, 1] },
    { key: "ionian", value: [1, 1, 0.5, 1, 1, 1, 0.5] },
    { key: "dorian", value: [1, 0.5, 1, 1, 1, 0.5, 1] },
    { key: "phrygian", value: [0.5, 1, 1, 1, 0.5, 1, 1] },
    { key: "lydian", value: [1, 1, 1, 0.5, 1, 1, 0.5] },
    { key: "mixolydian", value: [1, 1, 0.5, 1, 1, 0.5, 1] },
    { key: "aeolian", value: [1, 0.5, 1, 1, 0.5, 1, 1] },
    { key: "locrian", value: [0.5, 1, 1, 0.5, 1, 1, 1] },
    { key: "", value: [0, 0, 0, 0, 0, 0, 0] },
  ];

  function findKey(arr: any, value: any) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].value === value) {
        return arr[i].key;
      }
    }
    return "Key not found";
  }

  function generateScale(x: any, type: any) {
    let list = [x];
    const interval = intervalForm.find((i) => i.key === type);
    if (interval) {
      const intervals = interval.value;
      for (let i = 0; i < intervals.length; i++) {
        list.push(list[i] + intervals[i]);
      }
      return list;
    } else {
    }
  }

  const keyList = generateScale(findKey(arr, selectedKey), selectedOption);

  const notes = [
    { key: 0, value: "C" },
    { key: 1, value: "D" },
    { key: 2, value: "E" },
    { key: 2.5, value: "F" },
    { key: 3.5, value: "G" },
    { key: 4.5, value: "A" },
    { key: 5.5, value: "B" },
    { key: 6, value: "C" },
    { key: 7, value: "D" },
    { key: 8, value: "E" },
    { key: 8.5, value: "F" },
    { key: 9.5, value: "G" },
    { key: 10.5, value: "A" },
    { key: 11.5, value: "B" },
    { key: 12, value: "C" },
  ];

  return (
    <SimpleGrid height="300px" columns={15} px={10}>
      {notes.map((note) => (
        <Box
          key={note.key}
          height="100%"
          position="static"
          bg="white"
          color="black"
          pt="200px"
          white-space="initial"
          fontSize=""
          borderRadius="md"
        >
          {note.value}
        </Box>
      ))}
    </SimpleGrid>
  );
}
