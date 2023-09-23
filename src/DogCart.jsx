 import React from 'react'
 import Image from './Image'
 function DogCart(props) {
   return (
     <>
     <h3 className='text-center'>{props.name}</h3>
     
     <img src="https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_640.jpg"/>

     <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5pLcF889vwCZriJ9xXZAxmrw_-0C2djvlzkEtIwePHidCgYoM2WdhTARWS1zCibVsTfc&usqp=CAU"/>

     <Image src="https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_640.jpg"/>

     <Image src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L2hpcHBvdW5pY29ybjc2X3Bob3RvX29mX2JhYnlfbGFicmFkb3JfeWF3bmluZ19pc29sYXRlZF9vbl93aGl0ZV82YjVmMTIwMS02ZTU1LTRiMzQtOWQ4ZC0yNTM0NWQ4MmM3MDEucG5n.png"/>
     
     </>
   )
 }
 
 export default DogCart