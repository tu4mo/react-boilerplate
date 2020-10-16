import { Helmet } from 'react-helmet'

const WrappedHelmet = props => (
  <Helmet
    defaultTitle="React Boilerplate"
    titleTemplate="%s - React Boilerplate"
    {...props}
  />
)

export default WrappedHelmet
