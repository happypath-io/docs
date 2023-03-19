import { useRouter } from 'next/router'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>HappyPath Documentation</span>,
  project: {
    link: 'https://github.com/happypath-io/',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/happypath-io/docs/blob/main',
  footer: {
    text: 'Synthesize Inc.',
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    const {frontMatter} = useConfig();
    if (asPath !== '/') {
      return {
        titleTemplate: '%s | HappyPath',
        // description: 'HappyPath gives developers a simple way to create and manage remote configuration files to control any part of your application from the cloud'
      }
    }
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://docs.happypath.io' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
 
    return <>
      <meta property="og:url" content={url} />
      {/* <meta property="og:title" content={frontMatter.title || 'HappyPath'} /> */}
      <meta property="og:description" content={frontMatter.description || 'HappyPath gives developers a simple way to create and manage remote configuration files to control any part of your application from the cloud.'} />
    </>
  },
}

export default config
