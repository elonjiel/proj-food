import React from 'react'
import Header from '../components/Header'

function Home() {
  return (
    <main className="w-full flex flex-col">
        <Header 
        title={
            <p>
                Elevate Your Plate with 
                <br /> FlavorFusion!
            </p>
        }
        type="home"
        />
    </main>
  )
}

export default Home