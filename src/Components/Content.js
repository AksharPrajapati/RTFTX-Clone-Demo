import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import {SplitText} from 'gsap/dist/'
import "../Styles/content.scss"

gsap.registerPlugin(ScrollTrigger)

function Content() {
  const ref = useRef()

  return (
    <div ref={ref} className="main-content">
      <section className="section-one">
        <h1>CloneX</h1>
      </section>
      <section className="section-two">
        <div className='textWrapper about'>
         <div className='title'>
           <h4>ABOUT THE PROJECT</h4>
         </div>
         <p className='desc'>
         CLONE X IS OUR MOST AMBITIOUS PROJECT YET,THE BEGINNING OF A WHOLE ECOSYSTEM FOR OUR COMMUNITY, QUALITY-FOCUSED, HIGH-END AVATARS, READY FOR THE METAVERSE.
         </p>
         <p className='intro'>
          CLONE X Corp was founded by three extraterrestrials who came from the planet of Orbitar in the Draco constellation. These interplanetary tourists have come to accelerate our evolution towards an immaterial existence. They plan to transfer all human consciousness into advanced clone forms to create the ultimate Metaverse.

          In this advanced civilization, humans no longer reside in an organic form but are instead represented by their digital CloneX avatars. This ground breaking technology has revolutionized Homo sapiens's ability to self-express themselves through customizable avatar identities. This development also allows Clones to travel across galaxies and expand our civilization into new galaxies and simulations.
         </p>
        </div>
      </section>
      <section className="section-three">
      <div className='textWrapper avatar'>
         <div className='title'>
           <h4>AVATARSAVATARS</h4>
         </div>
         <p className='desc'>
         20.000
         </p>
         <p className='intro'>
         20000 avatar will be available in total, split between the pre-sale and public sale. Avatars not redeemed in the pre-sale will be deployed into the public sale. All avatar traits and attributes will be generated randomly and revealed after the public sale. </p>
        </div>
      </section>
      <section className="section-four">
      <div className='textWrapper about'>
         <div className='title'>
           <h4>PRE-SALE</h4>
         </div>
         <p className='desc'>
         11.133
         </p>
         <p className='intro'>
         We want to make the pre-sale as affordable as possible to reward our collectors; hence we have chosen a price point of 0.05Ξ for the RTFKT pre-sale.

1 qualified RTFKT NFT gives 3 reserved opportunities to buy into the 48 hr pre-sale

(excluding the Metakey: Edition Two RTFKT version that gives only 1 opportunity in pre-sale)
</p>
  </div>
      </section>
      <section className="section-five">
      <div className='textWrapper avatar'>
         <div className='title'>
           <h4>PUBLIC SALEPUBLIC SALE</h4>
         </div>
         <p className='desc'>
         08.367
         </p>
         <p className='intro'>
         We are still confirming the price of mint for the public sale. The public sale will be a dutch auction where each buyer can purchase 3 Avatars per user’s wallet.
</p>
  </div>
      </section>
      <section className="section-six">
      <div className='textWrapper about'>
         <div className='title'>
           <h4>TOTAL DISTRIBUTIONS</h4>
         </div>
         <p className='desc'>
         08.367
         </p>
         <p className='intro'>
         We tailored our distribution mechanic with our early supporters and collectors in mind, team’s hard work, and giving a chance for those who just discovered RTFKT recently to be a part of the next gen ecosystem we’re building.
</p>
  </div>
      </section>
      <section className="section-seven">
      <div className='textWrapper'>
        <div style={{maxWidth: '45%', margin:'auto'}}>
         <div className='title'>
           <h4>A COLLABORATION WITH</h4>
         </div>
         <p className='desc'>
         MURAKAMI
         </p>
         <p className='intro'>
         We have been working in secret with our Idol, Takashi Murakami, as a special collaborator, bringing his iconic designs to the Avatars. From Eyes, Mouths, Helmets to Clothes, these avatars will have a special Murakami Drip property defined on the blockchain.
</p>
  </div>
  </div>
      </section>
    </div>
  )
}

export default Content
