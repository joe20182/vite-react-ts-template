import { FC } from 'react'
import { renderRoutes, RouteConfig } from 'react-router-config'
import { RouteComponentProps } from 'react-router-dom'

interface RouterComponent extends RouteComponentProps {
  route?: RouteConfig
}

const About: FC<RouterComponent> = ({route}) => {

  return (
    <div className="About-wrapper">
      <h2>About</h2>
      <div className="nested-routes">
        {renderRoutes(route?.routes)}
      </div>
    </div>
  )

}

export default About