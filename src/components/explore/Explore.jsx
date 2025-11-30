import React from 'react'
import upi from '../../assets/upi.avif'
import phonepay from '../../assets/phonepayimg.png'
import paytm from '../../assets/paytmimg.jpg'
import gpay from '../../assets/gpayimg.webp'
import { Card, CardBody, CardSubtitle, CardTitle ,ListGroup,ListGroupItem} from 'react-bootstrap'
import spotifyimg from '../../assets/spotifimg.png'

const Explore = () => {
  return (
    <div className='text-white'>
      <div className='w-[100%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded flex flex-col items-center mx-3 my-4 '>
        <p className='font-bold text-3xl mt-4 mb-2  '>Listen without limits.Try 3 months of $59 for {2}.</p>
        <p>Only $119/month after.Cancel anytime.</p>
        <div className='flex items-center gap-4 my-7'>
        <button className='bg-white text-black px-4 py-3 rounded-full'  onClick={() => window.open("https://www.spotify.com/in-en/premium/#prepaid-premium-individual", "_blank")}>Get Premium Individual </button>
        <button className='text-white border border-white rounded-full px-4 py-3' onClick={() => window.open("https://www.spotify.com/in-en/premium/#prepaid-premium-individual", "_blank")}> View all Plans</button>
        </div>
        </div>

        <div className='flex flex-col items-center'>
          <p className='font-bold text-2xl mb-3 mt-4'> Affordable Plans for any situation</p>
          <p className=' font-bold text-xl   text-balance text-center'>Choose a Premium plan and listen to ad-free music without limits on your phone,speaker, and other devices. Pay in various ways. Cancel anytime.</p>

        </div>
        <div className='flex items-cneter justify-center gap-3 mt-8'>
          <img src={upi} className='w-11 rounded' alt=''/>
          <img src={phonepay} className='w-11 rounded' alt=''/>
          <img src={paytm} className='w-11 rounded' alt=''/>
          <img src={gpay} className='w-11 rounded' alt=''/>
        </div>
        <div className='flex justify-center underline decoration-1  mt-2  '>
            <p className=''>+6 more</p>
          </div>
          <div className='flex flex-col items-center'>
             <p className='font-bold text-3xl'>All premium plans include</p>
             <ul className='list-none '>
            <li> <i className="bi bi-check-lg filter brightness-0 invert text-xl"> </i>  Ad free music listening</li>
            <p> <i className="bi bi-check-lg filter brightness-0 invert text-xl"> </i> Download to listen offline</p>
            <p> <i className="bi bi-check-lg filter brightness-0 invert text-xl"> </i>  Play songs in any order</p>
            <p> <i className="bi bi-check-lg filter brightness-0 invert text-xl"> </i> High audio quality</p>
            <p> <i className="bi bi-check-lg filter brightness-0 invert text-xl"> </i>  Listen with friends in real time</p>
            <p> <i className="bi bi-check-lg filter brightness-0 invert text-xl"> </i> Organize listening queue</p>
            <p> <i className="bi bi-check-lg filter brightness-0 invert text-xl"> </i> Listening insights (not in mini)</p>
            </ul>
          </div>
          <div className='flex justify-center mt-6 gap-3'>
          <Card className='w-[18rem] bg-[#242424] rounded border boder-sky-700  px-4 py-4 ' >
            <CardBody className=' flex items-center gap-2'>
            <img src={spotifyimg} className='w-5  filter brightness-0 invert' alt=''/>
              <CardSubtitle className='font-bold text-base'>Premium</CardSubtitle>
              </CardBody>
              <CardTitle className='font-bold text-3xl text-purple-500 pb-4'>Individual</CardTitle>
              <CardTitle className='font-bold'> $59 for 3 months</CardTitle>
              <CardSubtitle className=' text-sm mb-5'>$119 / month after</CardSubtitle>
              <CardBody className='h-[1px] bg-white my-5'></CardBody>
             
              <ListGroup className="list-group-flush leading-loose pb-4 ">
                <ListGroupItem> 1 Premium account</ListGroupItem>
                <ListGroupItem>Cancle anytime</ListGroupItem>
                <ListGroupItem> Subscribe or one-time payment</ListGroupItem>
             
            </ListGroup>
            <CardBody className='flex flex-col items-center'>
            <button className='rounded-full text-black bg-purple-500  px-4 py-2 ' onClick={() => window.open("https://www.spotify.com/in-en/premium/#prepaid-premium-individual", "_blank")} >Get Premium Individual</button>
            <CardBody className='text-xs mt-4 text-center font-thin'>₹59 for 3 months, then ₹119 per month after. Offer only available if you haven't tried Premium before. Terms apply.
            Offer ends December 31, 2024.</CardBody>
            </CardBody>
            

          </Card>


          <Card className=' w-[18rem] bg-[#242424] rounded border boder-sky-700  px-4 py-4 ' >
            <CardBody className=' flex items-center gap-2'>
            <img src={spotifyimg} className='w-5  filter brightness-0 invert' alt=''/>
              <CardSubtitle className='font-bold text-base'>Premium</CardSubtitle>
              </CardBody>
              <CardTitle className='font-bold text-3xl text-lime-300 pb-4'>Mini</CardTitle>
              <CardTitle className='font-bold'> $29 for 1 week</CardTitle>
              <CardSubtitle className=' text-sm mb-5'>$119 / month after</CardSubtitle>
              <CardBody className='h-[1px] bg-white my-5'></CardBody>
             
              <ListGroup className="list-group-flush leading-loose pb-4 ">
                <ListGroupItem> 1 mobile-only Premium account</ListGroupItem>
                <ListGroupItem>Offline listening of up to 30 songs on 1 device</ListGroupItem>
                <ListGroupItem> One-time Pyment</ListGroupItem>
                <ListGroupItem> Basic audio quality</ListGroupItem>
             
            </ListGroup>
            <CardBody className='flex flex-col items-center'>
            <button className='rounded-full text-black bg-lime-300  px-4 py-2 '  onClick={() => window.open("https://www.spotify.com/in-en/premium/#prepaid-premium-individual", "_blank")} >Get Premium Mini</button>
            {/* <a className='rounded-full text-black bg-lime-300  px-4 py-2 '  href = "https://www.spotify.com/in-en/premium/#prepaid-premium-individual"  > Get Premium Mini</a> */}
            <CardBody className='text-xs mt-4 text-center font-thin underline'> Terms apply.</CardBody>
            </CardBody>
            

          </Card>
          </div>
          {/* footer */}

          

      
    </div>
  )
}

export default Explore