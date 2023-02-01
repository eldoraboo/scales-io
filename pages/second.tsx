import {
  Container,
  Box,
  Flex,
  Button,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
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
    { key: 0.5, left: "135%", black: true, value: "C♯/D♭" },
    { key: 2, left: "100%", value: "E" },
    { key: 1.5, left: "235%", black: true, value: "D♯/E♭" },
    { key: 2.5, left: "200%", value: "F" },
    { key: 3.5, left: "200%", value: "G" },
    { key: 3, left: "335%", black: true, value: "F♯/G♭" },
    { key: 4.5, left: "300%", value: "A" },
    { key: 4, left: "435%", black: true, value: "G♯/A♭" },
    { key: 5.5, left: "400%", value: "B" },
    { key: 5, left: "535%", black: true, value: "A♯/B♭" },
    { key: 6, left: "500%", value: "C" },
    { key: 7, left: "500%", value: "D" },
    { key: 6.5, left: "635%", black: true, value: "C♯/D♭" },
    { key: 8, left: "600%", value: "E" },
    { key: 7.5, left: "735%", black: true, value: "D♯/E♭" },
    { key: 8.5, left: "700%", value: "F" },
    { key: 9.5, left: "700%", value: "G" },
    { key: 9, left: "835%", black: true, value: "F♯/G♭" },
    { key: 10.5, left: "800%", value: "A" },
    { key: 10, left: "935%", black: true, value: "G♯/A♭" },
    { key: 11.5, left: "900%", value: "B" },
    { key: 11, left: "1035%", black: true, value: "A♯/B♭" },
    { key: 12, left: "1000%", value: "C" },
  ];

  return (
    <SimpleGrid
      px={12}
      height="20vw"
      templateColumns="repeat(25, minmax(6.65%, 1fr))"
      mb={10}
    >
      {notes.map((note) => (
        <Card
          align="center"
          key={note.key}
          height={note.black ? "12vw" : "20vw"}
          variant={note.black ? "filled" : "outline"}
          width={note.black ? "70%" : "100%"}
          pt={note.black ? "8vw" : "10vw"}
          right={note.left}
          fontSize={note.black ? "0.5em" : "1em"}
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
        ></Card>
      ))}
    </SimpleGrid>
  );
}
