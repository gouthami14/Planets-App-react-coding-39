// Write your code here
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

import {PlanetsAppContainer, Heading} from './styledComponents'

const PlanerSlider = props => {
  const {planetsList} = props

  return (
    <PlanetsAppContainer>
      <Heading>PLANETS</Heading>
      <Slider>
        {planetsList.map(eachPlanet => (
          <PlanetItem key={eachPlanet.id} planetDetails={eachPlanet} />
        ))}
      </Slider>
    </PlanetsAppContainer>
  )
}

export default PlanerSlider
