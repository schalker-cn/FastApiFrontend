import {
  Box,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import { useForm } from "react-hook-form"

import {
  type UserPublic,
} from "../../client"

const UserInformation = () => {
  const color = useColorModeValue("inherit", "ui.light")
  const currentUser: UserPublic = {
    email: "ab12cde@tum.de",
    is_active: true,
    is_superuser: false,
    full_name: "test",
    id: "d9d7fca5-cf19-42c3-a9d5-42cfa3510598",
  };
  const {
    formState: { errors },
  } = useForm<UserPublic>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      full_name: currentUser?.full_name,
      email: currentUser?.email,
    },
  })


  return (
    <>
      <Container maxW="full">
        <Heading size="sm" py={4}>
          User Information
        </Heading>
        <Box
          w={{ sm: "full", md: "50%" }}
          as="form"
        >
          <FormControl>
            <FormLabel color={color} htmlFor="name">
              Full name
            </FormLabel>
              <Text
                size="md"
                py={2}
                color={!currentUser?.full_name ? "ui.dim" : "inherit"}
                isTruncated
                maxWidth="250px"
              >
                {currentUser?.full_name || "N/A"}
              </Text>
          </FormControl>
          <FormControl mt={4} isInvalid={!!errors.email}>
            <FormLabel color={color} htmlFor="email">
              Email
            </FormLabel>
              <Text size="md" py={2} isTruncated maxWidth="250px">
                {currentUser?.email}
              </Text>
            {errors.email && (
              <FormErrorMessage>{errors.email.message}</FormErrorMessage>
            )}
          </FormControl>
        </Box>
      </Container>
    </>
  )
}

export default UserInformation
