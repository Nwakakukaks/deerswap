import React from 'react'
import HeroSection from '../../HeroSection'
import HeroSection1 from '../../HeroSection1'
import HeroSectionContact from '../../HeroSectionContact'
import HeroSectionAbout from '../../HeroSectionAbout'
import HeroSectionToken from '../../HeroSectionToken'
import HeroSectionWhy from '../../HeroSectionWhy'

import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo, homeObjFive,homeObjSix,homeObjSeven, homeObjEight} from './Data'

function Home() {
    return (
        <>    
            <HeroSection {...homeObjOne} />      {/* THESE ARE THE SECTIONS OF THE HOME */}

        </>
    )
}

export default Home
