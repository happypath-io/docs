import { useRouter } from 'next/router'
import { DocsThemeConfig } from 'nextra-theme-docs'

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
    if (asPath !== '/') {
      return {
        titleTemplate: '%s | HappyPath'
      }
    }
  },
}

export default config
