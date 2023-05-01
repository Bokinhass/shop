import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'

import logoImg from '../assets/cart.png'
import { Container, Header } from '@/styles/pages/app'
import Image from 'next/image'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="logo" height={80} width={80} />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
