import { ImageContainer, ProductContainer, ProductDetail } from '@/styles/pages/product'
import { useRouter } from "next/router"

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>

      <ProductDetail>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi pariatur commodi consequatur labore et sit est architecto, nesciunt deleniti, veniam, eos sequi non vel illo eveniet aliquid dolorum maxime quam?</p>

        <button>Comprar agora</button>
      </ProductDetail>
    </ProductContainer>
  )
}
