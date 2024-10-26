import Image from "next/image";
import Image1 from '@/assets/Image1.png';
import About from "@/components/About";
import Footer from "@/components/Footer";



export default function Home() {


  return (
   <div className=''>
    <div>
  
  <Image src={Image1} alt='Image1' width={350} height={50} className='ml-[40%]'/>


</div>
  <About/>
  <Footer/>


   </div>
    
  )
}
