import React from 'react'
import Loadable from 'react-loadable'

const Loading = () => <div>Loading…</div>

const LoadableComponent = loader =>
  Loadable({
    loader,
    loading: Loading,
  })

export default LoadableComponent
