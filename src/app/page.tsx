import Image from 'next/image'
import styles from './page.module.css'
import Timeline from '@/components/TimeLine'
import Information from '@/components/Information'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import FloorPlan from '@/components/FloorPlan'
import Gallery from '@/components/Gallery'

const Home = () => {
  return (
    <>
    <div style={{display:'flex',flexDirection:'column',gap:'3vh'}}>
      <Header />
      <Timeline />
      <Navigation />
      <Information />
      <FloorPlan/>
      <Gallery/>
    </div>
    </>
  )
}

export default Home
