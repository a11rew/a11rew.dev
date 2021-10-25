import React from "react"
import styled from "styled-components"
import GlobalStyles from "../variables.globals"

import Header from "../components/header"
import Seo from "../components/seo"

const Home: React.FC = () => {
  return (
    <Container>
      <Seo title="Hello" />
      <GlobalStyles />
      <Header />
      <p>Home I guess</p>
    </Container>
  )
}

const Container = styled.div`
  padding: 50px 80px;
`
export default Home
