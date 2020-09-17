import React from 'react'
import { MinimalLayout, DefaultLayout } from '../layouts'
import Error from '../pages/_error'

type LayoutType = 'minimal' | 'default'

interface Props {
  children: any,
  error?: boolean
}

const withLayout = (WrappedComponent: any, layout?: LayoutType) => {
  return class extends React.Component<Props> {
    componentDidUpdate(_prevProps: any) {
      // console.log('Current props: ', this.props) 
      // console.log('Previous props: ', prevProps) 
    }

    static async getInitialProps(ctx: any) {

      const pageProps = WrappedComponent.getInitialProps && await WrappedComponent.getInitialProps(ctx)

      return {
        ...pageProps
      }
    }

    render() {

      if (!this.props.error) {

        // Envuelve el componente de entrada en un contenedor, sin mutarlo. ¡Bien!
        switch (layout) {
          case 'minimal':
            return (
              <MinimalLayout>
                <WrappedComponent {...this.props} />
              </MinimalLayout>
            )
          default:
            return (
              <DefaultLayout>
                <WrappedComponent {...this.props} />
              </DefaultLayout>
            )
        }
      }else {
        return <Error statusCode={404}/>
      }
    }
  }
}

export default withLayout 
