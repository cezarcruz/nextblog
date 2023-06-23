import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { InferGetStaticPropsType } from 'next'
import { allAuthors } from 'contentlayer/generated'

const DEFAULT_LAYOUT = 'AuthorLayout'

export const getStaticProps = async () => {
  const author = allAuthors.find((p) => p.slug === 'default')
  return { props: { author } }
}

export default function About({ author }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <MDXLayoutRenderer layout={author.layout || DEFAULT_LAYOUT} content={author} />
      <p>Olá, seja bem vindo ao meu Blog.</p>
      <p>
        Meu nome é Cezar e desenvolvo para Web utilizando Java e Javascript, criei esse blog para
        compartilhar algumas coisas que vou aprendendo.
      </p>
      <p>Então, seja bem vindo e aproveite a viagem.</p>
    </>
  )
}
