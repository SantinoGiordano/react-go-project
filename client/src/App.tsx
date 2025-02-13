

import { Container, Stack } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import TodoForm from "./components/TodoForm"

function App() {


  return (
    <>

    Hello
    <Stack h="100vh">
    <Navbar />
    <Container>
      <TodoForm />
      {/* <TodoList /> */}
    </Container>
    </Stack>
    </>
  )
}

export default App
