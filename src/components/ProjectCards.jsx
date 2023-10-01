import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function ProjectCards({imgUrlCard, altCard, title, details, codeUrl}) {

  const imgStyle = "absolute inset-0 w-full h-full object-cover object-center"
  return (
    
    <div className="lg:w-1/3 sm:w-1/2  p-4 mx-auto ">
      <div className="flex relative" >
        <img
          className={` ${imgStyle} h-48`}
          src={imgUrlCard}
          alt={altCard}

        />
        <div className="h-48 text-center px-8 py-5 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
          <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
           {title}
          </h2>
          <p className="leading-relaxed text-black text-xs">
          {details}
          </p>
          <div className='px-8 py-5 relative'>
          <a 
          href={codeUrl} 
          className='rounded-full bg-black p-4'
          >
          Code <>&lt;/&gt;</>

          </a>
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default ProjectCards