import { FC } from 'react'
import { renderRoutes, RouteConfig } from 'react-router-config'
import { RouteComponentProps } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { selectCount, incrementByAmount } from '@/store/slice/count'

interface RouterComponent extends RouteComponentProps {
  route?: RouteConfig
}

const About: FC<RouterComponent> = ({route}) => {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch();

  const add = () => dispatch(incrementByAmount(2))

  return (
    <div className="About-wrapper">
      <h2>About</h2>
      <p>Count: {count}</p>
      <button onClick={add}>ADD</button>
      <div className="nested-routes">
        {renderRoutes(route?.routes)}
      </div>
    </div>
  )

}

export default About