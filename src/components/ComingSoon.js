import React, {useState, useEffect} from 'react';
import image2 from '../images//BigWindow_Final.png'; 
import image3 from '../images/slider-01.png';
import image4 from '../images/slider-02.png';
import image5 from '../images/slider-03.png';
import image6 from '../images/slider-04.png';
import image7 from '../images/slider-05.png';
import image8 from '../images/slider-06.png';
import image9 from '../images/slider-07.png';
import image10 from '../images/slider-08.png';
import image11 from '../images/Mobile_Hearts.gif';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Web3 from 'web3';
import { CONTRACT_ADDRESS , CONTRACT_ABI } from '../config';

export const ComingSoon = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [accountCoonected, setAccountCoonected] = useState(false);

  const web3 = new Web3(Web3.givenProvider || 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161');
  const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  //metamask integration
  async function handleAccounts()
  {
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });
    //console.log(accounts[0]);
    if(accounts[0])
    {
      setAccountCoonected(true);
    }
    const networkId = await window.ethereum.request({
      method: 'net_version',
    });
    if(networkId != 1)
    {
      alert('Please connect your wallet with Ethereum Mainnet');
    }
    //console.log(networkId);
  }
  
  useEffect(() => {
    handleAccounts();
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const openMetaMask = async (mintAmount) => {
    //alert(mintAmount);
    //handleAccounts();
    let accounts = await web3.eth.getAccounts();
    let selectedAccountCustom = accounts[0];
    let Cost = await contract.methods.cost().call();
    //let mintAmount = 1;
    contract.methods.mint(mintAmount)
      .send({ 
            from: selectedAccountCustom ,
            gasLimit: '250000',
            value: Cost * mintAmount
            //value: web3.utils.toWei((cost * amount).toString() , 'ether')
          });
  }

  const handleMint = (event) => {
		event.preventDefault();
		const { amount } = event.target.elements;
		if(isNaN(amount.value))
		{
			return alert('Please enter a number only');
		}
		if(amount.value > 5)
		{
			return alert('Please mint less than 5 nfts at a time');
		}

		openMetaMask(amount.value);
	}

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='coming-soom-wrap'>
      <div className='coming-section'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col coming-left'>
              <div className='coming-text'>
                <p>
                  The first metaverse fashion doll, we are a <br />community of 10,000 fashion forward women who are owning
                  the blockchain runway.<br /><br />  Our mission is to create opportunities and educate women about web3
                  and crypto while expressing self confidence
                  through a unique sense of fashion.</p>

                  {/* {accountCoonected && <button className='btn1' onClick={openMetaMask}>Mint NFT</button>}
                  {!accountCoonected && <button className='btn1' onClick={handleAccounts}>Connect Wallet</button>} */}

                  {
                    accountCoonected 
                    && 
                    <form onSubmit={handleMint}>
                      <input type='number' name='amount' id='amount' placeholder='0' /> 
                      <button type='submit' className='btn1'>Mint</button>
                    </form>
                  }
                  {!accountCoonected && <button className='btn1' onClick={handleAccounts}>Connect Wallet</button>}

                <a href='https://twitter.com/honeyznft' className='btn2'>Follow for updates <span class='arrow'></span></a>
                <div className='col mobile-show'>
                  <ul className='social-links'>
                    <a href='https://twitter.com/honeyznft'><li><i className='icon-fa icon-twitter'></i></li></a>
                    <a href='https://www.instagram.com/honeyznft/'><li><i className='icon-fa icon-instagram'></i></li></a>
                    <li><a href='https://discord.gg/pT52wbTFJ7'><i className='icon-fa icon-discord'></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col comin-right'>
              <img src={image2} alt='No image' />
            </div>
          </div>
        </div>
      </div>
      {width <= 768 ?
      <section className='center slider d-flex justify-content-center'>
        <div className='comingSoonMobile'>
        <img src={image11} alt='No image' />
        </div>
      </section>
      : 
      <Slider {...settings}>
      <div className='p-1 sliden'>
          <img src={image3} alt='No image' />
        </div>
        <div className='p-1 sliden'>
          <img src={image4} alt='No image' />
        </div>
        <div className='p-1 sliden'>
          <img src={image5} alt='No image' />
        </div>
        <div className='p-1 sliden'>
          <img src={image6} alt='No image' />
        </div>
        <div className='p-1 sliden'>
          <img src={image7} alt='No image' />
        </div>
        <div className='p-1 sliden'>
          <img src={image8} alt='No image' />
        </div>
        <div className='p-1 sliden'>
          <img src={image9} alt='No image' />
        </div>
        <div className='p-1 sliden'>
          <img src={image10} alt='No image' />
        </div>
        <div className='p-1 sliden'>
          <img src={image5} alt='No image' />
        </div>
      </Slider>
    }
    </div>
  );
};


// import React from 'react';
// import image2 from '../images/BigWindow.svg';
// import image3 from '../images/heartsplaceholder.png';
// import Slider from 'react-slick';


// export const ComingSoon = () => {
// return (
//     <div className='coming-soom-wrap'>
//         <div className='coming-section'>
//         <div className='container'>
// <div className='row align-items-center'>
// <div className='col coming-left'>
//   <div className='coming-text'>
// <p>
//   The first metaverse fashion doll, we are a <br/>community of 10,000 fashion forward women who are owning <br/>
// the blockchain runway.  Our mission is to create opportunities and educate women about web3 
// and crypto while expressing self confidence 
// through a unique sense of fashion.</p>
// <a href='#' className='btn1'>Mint coming soon</a>
// <a href='#' className='btn2'>Follow for pre-sale updates <span class='arrow'></span></a>

// <div className='col mobile-show'>
//   <ul className='social-links'>
//                         <li><i className='icon-fa icon-twitter'> </i></li>
//                         <li><i className='icon-fa icon-discord'></i></li>
//                         <li><i className='icon-fa icon-instagram'></i></li>
//                         <li><i className='icon-fa icon-logomark'></i></li>
//                     </ul>
//   </div>
//   </div>

// </div>
// <div className='col comin-right'>
// <img src={image2} alt='No image'/>
// </div>

// </div>
// </div>
// </div> 
//     <section className='center slider d-flex justify-content-center'>
//   <div className='p-3'>
//   <img src={image3} alt='No image'/>
//   </div>
//   <div className='p-3'>
//   <img src={image3} alt='No image'/>
//   </div>
//   <div className='p-3'>
//   <img src={image3} alt='No image'/>
//   </div>
//   <div className='p-3'>
//   <img src={image3} alt='No image'/>
//   </div>
//   <div className='p-3'>
//   <img src={image3} alt='No image'/>
//   </div>
//   <div className='p-3'>
//   <img src={image3} alt='No image'/>
//   </div>
//   <div className='p-3'>
//   <img src={image3} alt='No image'/>
//   </div>  
//   <div className='p-3'>
//   <img src={image3} alt='No image'/>
//   </div>
//   <div className='p-3'>
//   <img src={image3} alt='No image'/>
//   </div>
 
   
// </section>
// </div>
// );
// };
