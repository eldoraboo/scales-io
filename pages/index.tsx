import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import {
  useColorMode,
  Center,
  Flex,
  HStack,
  Select,
  FormControl,
  FormLabel,
  Textarea,
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  SimpleGrid,
  Box,
  VStack,
  Container,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import WithSubnavigation from "./header";
import PianoKeyboard from "./second";
import { useState, useEffect } from "react";
import SmallWithLogoLeft from "./footer";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [showMajorOptions, setShowMajorOptions] = useState(false);
  const [showMinorOptions, setShowMinorOptions] = useState(false);
  const [showModalOptions, setShowModalOptions] = useState(false);
  const [selectedKey, setSelectedKey] = useState("");

  useEffect(() => {
    if (selectedType === "major") {
      setShowMajorOptions(true);
      setShowMinorOptions(false);
      setShowModalOptions(false);
    } else if (selectedType === "minor") {
      setShowMinorOptions(true);
      setShowMajorOptions(false);
      setShowModalOptions(false);
    } else if (selectedType === "modal") {
      setShowModalOptions(true);
      setShowMajorOptions(false);
      setShowMinorOptions(false);
    }
  }, [selectedType]);

  return (
    <>
      <html>
        <Head>
          <title>Scales.io</title>
        </Head>
        <body>
          <header>
            <WithSubnavigation />
          </header>
          <SimpleGrid minChildWidth="120px" spacing={5} m={2} p={10}>
            <FormControl>
              <HStack spacing={5}>
                <Select
                  onChange={(e) => setSelectedType(e.target.value)}
                  variant="filled"
                  placeholder="Type"
                  width="200px"
                >
                  <option value="major">Major</option>
                  <option value="minor">Minor</option>
                  <option value="modal">Modal</option>
                </Select>
                {showMajorOptions && (
                  <Select
                    onChange={(e) => setSelectedOption(e.target.value)}
                    variant="filled"
                    placeholder="Variation"
                    width="200px"
                  >
                    <option value="naturalMajor">Natural</option>
                    <option value="bluesMajor">Blues</option>
                  </Select>
                )}
                {showMinorOptions && (
                  <Select
                    onChange={(e) => setSelectedOption(e.target.value)}
                    variant="filled"
                    placeholder="Variation"
                    width="200px"
                  >
                    <option value="naturalMinor">Natural</option>
                    <option value="harmonicMinor">Harmonic</option>
                  </Select>
                )}
                {showModalOptions && (
                  <Select
                    onChange={(e) => setSelectedOption(e.target.value)}
                    variant="filled"
                    placeholder="Variation"
                    width="200px"
                  >
                    <option value="ionian">Ionian</option>
                    <option value="dorian">Dorian</option>
                    <option value="phrygian">Phrygian</option>
                    <option value="lydian">Lydian</option>
                    <option value="mixolydian">Mixolydian</option>
                    <option value="aeolian">Aeolian</option>
                    <option value="locrian">Locrian</option>
                  </Select>
                )}
                <Button
                  onClick={() => setSelectedKey("")}
                  colorScheme="red"
                  variant="solid"
                >
                  Reset
                </Button>
              </HStack>
            </FormControl>
          </SimpleGrid>

          <SimpleGrid minChildWidth="120px" spacing={5} m={2} px={10} pb={10}>
            <Button
              colorScheme={"C" === selectedKey ? "pink" : "gray"}
              variant="solid"
              key="C"
              onClick={() => setSelectedKey("C")}
            >
              C
            </Button>
            <Button
              colorScheme={"C♯/D♭" === selectedKey ? "pink" : "gray"}
              variant="solid"
              key="C♯/D♭"
              onClick={() => setSelectedKey("C♯/D♭")}
            >
              C♯/D♭
            </Button>
            <Button
              colorScheme={"D" === selectedKey ? "pink" : "gray"}
              variant="solid"
              key="D"
              onClick={() => setSelectedKey("D")}
            >
              D
            </Button>
            <Button
              colorScheme={"D♯/E♭" === selectedKey ? "pink" : "gray"}
              variant="solid"
              key="D♯/E♭"
              onClick={() => setSelectedKey("D♯/E♭")}
            >
              D♯/E♭
            </Button>
            <Button
              colorScheme={"E" === selectedKey ? "pink" : "gray"}
              variant="solid"
              key="E"
              onClick={() => setSelectedKey("E")}
            >
              E
            </Button>
            <Button
              colorScheme={"F" === selectedKey ? "pink" : "gray"}
              variant="solid"
              key="F"
              onClick={() => setSelectedKey("F")}
            >
              F
            </Button>
            <Button
              colorScheme={"F♯/G♭" === selectedKey ? "pink" : "gray"}
              variant="solid"
              key="F♯/G♭"
              onClick={() => setSelectedKey("F♯/G♭")}
            >
              F♯/G♭
            </Button>
            <Button
              colorScheme={"G" === selectedKey ? "pink" : "gray"}
              variant="solid"
              key="G"
              onClick={() => setSelectedKey("G")}
            >
              G
            </Button>
            <Button
              colorScheme={"G♯/A♭" === selectedKey ? "pink" : "gray"}
              variant="solid"
              key="G♯/A♭"
              onClick={() => setSelectedKey("G♯/A♭")}
            >
              G♯/A♭
            </Button>
            <Button
              colorScheme={"A" === selectedKey ? "pink" : "gray"}
              variant="solid"
              key="A"
              onClick={() => setSelectedKey("A")}
            >
              A
            </Button>
            <Button
              colorScheme={"A♯/B♭" === selectedKey ? "pink" : "gray"}
              variant="solid"
              key="A♯/B♭"
              onClick={() => setSelectedKey("A♯/B♭")}
            >
              A♯/B♭
            </Button>
            <Button
              colorScheme={"B" === selectedKey ? "pink" : "gray"}
              variant="solid"
              key="B"
              onClick={() => setSelectedKey("B")}
            >
              B
            </Button>
          </SimpleGrid>
            <PianoKeyboard
              selectedKey={selectedKey}
              selectedOption={selectedOption}
            />
            <footer>
            <SmallWithLogoLeft/>
            </footer>
        </body>
      </html>
    </>
  );
}
