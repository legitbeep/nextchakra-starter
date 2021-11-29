import { Box, Button, Code, Flex, Image, Link } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";

import { counterThunk, selectCounter } from "redux/slices/counter";
import { useAppDispatch, useAppSelector } from "hooks";

const repoLink = "https://github.com/legitbeep/nextchakra-starter";

const CTASection = () => {
  const dispatch = useAppDispatch();
  const counter = useAppSelector(selectCounter);

  const clickHandler = () => {
    dispatch(counterThunk(1));
  };

  return (
    <Box textAlign="center" marginTop={8}>
      <Button onClick={clickHandler}>{counter.data} ❤ </Button>
      <Flex marginY={4} justifyContent="center" gridGap={2}>
        <Link aria-label="Deploy to Vercel" isExternal href="google.com">
          <Image src="https://vercel.com/button" alt="Vercel deploy button" />
        </Link>
      </Flex>

      <Box marginY={2}>
        <Code>npx degit legitbeep/nextchakra-starter {"<YOUR_APP_NAME>"} </Code>
        <br />
        <Button
          marginTop={2}
          as="a"
          href="https://github.com/legitbeep/nextchakra-starter/generate"
          target="_blank"
          size="sm"
        >
          Use this template
        </Button>
      </Box>

      <Flex justifyContent="center" alignItems="center" gridGap={2}>
        <Button
          as="a"
          href={repoLink}
          target="_blank"
          leftIcon={<AiFillGithub />}
          size="sm"
        >
          Github
        </Button>
        <Link href={repoLink} isExternal>
          <Image
            src="https://img.shields.io/github/stars/legitbeep/nextchakra-starter?style=social"
            align="center"
            alt="github stars"
          />
        </Link>
      </Flex>
    </Box>
  );
};

export default CTASection;
