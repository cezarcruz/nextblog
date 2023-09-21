import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />

        <p>Seja bem vindo ao meu Blog.</p>
        <p>
          Meu nome é Cezar e desenvolvo para Web utilizando Java e Javascript, criei esse blog para
          compartilhar algumas coisas que vou aprendendo.
        </p>
        <p>Então, seja bem vindo e aproveite a viagem.</p>
      </AuthorLayout>
    </>
  )
}
