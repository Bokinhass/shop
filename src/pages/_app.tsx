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
        <Image src={logoImg} alt="logo" height={52} width={52} />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
