import {
  Box,
  IconButton,
  Menu,
  MenuButton,
} from "@chakra-ui/react"
import { FaUserAstronaut } from "react-icons/fa"


const UserMenu = () => {

  return (
    <>
      <Box
        display={{ base: "none", md: "block" }}
        position="fixed"
        top={4}
        right={4}
      >
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<FaUserAstronaut color="white" fontSize="18px" />}
            bg="ui.main"
            isRound
            data-testid="user-menu"
          />
        </Menu>
      </Box>
    </>
  )
}

export default UserMenu
