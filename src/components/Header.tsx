import { Flex } from "@chakra-ui/react";

import { Logo } from "./Header/Logo";
import { SearchBox } from "./Header/SearchBox";
import { NotificationsNav } from "./Header/NotificationsNav";
import { Profile } from "./Header/Profile";

export function Header() {
  return (
    <Flex
      as="header"
      width="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Logo />

      <SearchBox />

      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile />
      </Flex>
    </Flex>
  );
}
