import { ComponentProps, ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'

interface WrappedHelmetProps extends ComponentProps<typeof Helmet> {
  children: ReactNode
}

const WrappedHelmet = (props: WrappedHelmetProps) => (
  <Helmet
    defaultTitle="React Boilerplate"
    titleTemplate="%s - React Boilerplate"
    {...props}
  />
)

export default WrappedHelmet
