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
    { key: 0.5, left: "4%", black: true, value: "C♯/D♭" },
    { key: 2, value: "E" },
    { key: 1.5, left: "10%", black: true, value: "D♯/E♭" },
    { key: 2.5, value: "F" },
    { key: 3.5, value: "G" },
    { key: 3, left: "22%", black: true, value: "F♯/G♭" },
    { key: 4.5, value: "A" },
    { key: 4, left: "28%", black: true, value: "G♯/A♭" },
    { key: 5.5, value: "B" },
    { key: 5, left: "34%", black: true, value: "A♯/B♭" },
    { key: 6, value: "C" },
    { key: 7, value: "D" },
    { key: 6.5, left: "46%", black: true, value: "C♯/D♭" },
    { key: 8, value: "E" },
    { key: 7.5, left: "52%", black: true, value: "D♯/E♭" },
    { key: 8.5, value: "F" },
    { key: 9.5, value: "G" },
    { key: 9, left: "64%", black: true, value: "F♯/G♭" },
    { key: 10.5, value: "A" },
    { key: 10, left: "70%", black: true, value: "G♯/A♭" },
    { key: 11.5, value: "B" },
    { key: 11, left: "76%", black: true, value: "A♯/B♭" },
    { key: 12, value: "C" },
  ];

  return (
    <SimpleGrid m={2} px={10}>
      <Flex height="300px" width="1000px" m={2} position="absolute">
        {notes.map((note) => (
          <Button
            key={note.key}
            height={note.black ? "60%" : "100%"}
            width={note.black ? "4%" : "6%"}
            position={note.black ? "absolute" : "static"}
            colorScheme="gray"
            variant={note.black ? "filled" : "outline"}
            top={note.black ? 0 : ""}
            right={note.black ? 0 : ""}
            left={note.left}
            pt={note.black ? "80px" : "200px"}
            white-space="initial"
            fontSize={note.black ? "80%" : ""}
            bg={
              keyList?.includes(note.key)
                ? note.black
                  ? "rgba(237,100,166,1)"
                  : "rgba(237,100,166,0.5)"
                : note.black
                ? colorMode === "light"
                  ? "gray.800"
                  : "white"
                : ""
            }
          >
            {note.value}
          </Button>
        ))}
      </Flex>
    </SimpleGrid>
  );
}
