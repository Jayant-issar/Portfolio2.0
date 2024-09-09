import { Canvas } from '@react-three/fiber'
import React, { Suspense,useState } from 'react'
import { workExperiences } from '../constants'
import { OrbitControls } from '@react-three/drei'
import Loader from "../components/Loader"
import Devloper from '../components/Devloper'

const Experience = () => {
    const [animation, setanimation] = useState("idle")
  return (
    <section className=' c-space my-20'>
        <div className=' w-full text-white/50 '>
            <h3 className=' head-text'>
                Experience
            </h3>
            <div className=' work-container'>
                <div className=' work-canvas'>
                    <Canvas>
                        <ambientLight intensity={7} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                        <directionalLight position={[10, 10, 10]} intensity={1} />
                        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
                        <Suspense fallback={<Loader />}>
                            <Devloper position-y={-3.4} scale={3.45} animationName={animation}/>

                        </Suspense>
                    </Canvas>

                </div>
                
                <div className="work-content">
                    <div className=' sm:py-10 py-5 sm:px-5 px-2.5'>
                        {
                            workExperiences.map(({name,animation,duration,title,pos,id,icon}, index) => {
                                return (
                                    <div key={id}
                                    
                                    onClick={()=>{
                                        setanimation(animation.toLowerCase())
                                    }}
                                    onPointerOver={()=>{
                                        setanimation(animation.toLowerCase())
                                    }}
                                    onPointerOut={()=>{
                                        setanimation("idle")
                                    }}
                                    className='work-content_container group' >
                                        <div className=' flex flex-col h-full justify-start items-center py-2'>
                                            <div className=' work-content_logo'>
                                                <img src={icon} alt="icon" className='w-full h-full ' />
                                            </div>

                                            <div className=' work-content_bar' />

                                        </div>

                                        <div className=' sm:p-5 px-2.5 py-5 '>
                                            <p className=' font-bold text-white/95'> {name}
                                            </p>

                                            <p className=' text-sm mb-5'>{pos} -- {duration}

                                            </p>
                                            <p className='group-hover:text-white/90 transition ease-in-out duration-150'>
                                                    {title}
                                            </p>

                                        </div>

                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience