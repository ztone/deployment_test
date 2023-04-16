import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { DatePicker, RangePicker } from 'react-trip-date';

export default function Hotel() {
  let { search } = useParams();

  const  handleResponsive  =  setNumberOfMonth  =>  {
	let  width  =  document.querySelector('.tp-calendar').clientWidth;
	if  (width  >  900)  {
		setNumberOfMonth(2);
	}  else  if  (width  <  900  &&  width  >  580)  {
		setNumberOfMonth(2);
	}  else  if  (width  <  580)  {
		setNumberOfMonth(1);
	}
};

  const Day = ({  day  }) => {
	return  (
		<>
			<p className="date">{day.format('DD')}</p>
			<p className="date">7</p>
		</>
		);
	};

    const theme = {
        primary: {
          light: "#F3F3F7",
          main: "#234E5A",
          dark: "#234E5A",
        },
        grey: {
          700: "#707070",
          900: "#1b1b1d",
        },
        background: {
          default: "#f5f5f5",
        },
        text: {
          disabled: "#BABABA",
        },
      };


return (
<>
    <div className="display-1 text-center small-logo">
        <img className='small-logo' src="/images/logo.png" alt="Voice of influence" width="70px"/> 
    </div>
    <div className='mid-line w-25 float-l'></div>
    <div className='mid-line w-25 float-r'></div>
    <div className="text-center">Feldon Vally</div>
    <p className="text-center">Sutton Lane, Lower Brailes, OX15 5BB</p>
    <div className='container mt-3'>    
        <p className="text-center">
            <img className='w-100' src="/images/felldonvalley-big.png" alt="Girl in a jacket" />
        </p>
        <p className="text-center">Foodie Golf Campaign</p>
        <RangePicker
            theme={theme}
            numberOfMonths={2}
            onChange={dates => console.log("dates", dates)}
            responsive={handleResponsive} 
        />
        <p className='text-center'>
            <Link className='light-btn fw-bold btn' to=''>Description</Link>   
        </p>
        <p className='text-center'>
            <Link className='light-btn fw-bold btn' to=''>Terms & Conditions</Link>   
        </p>
        <p className='text-center mb-5'>
            <Link className='dark-btn fw-bold btn' to='enquire'>Enquire</Link>   
        </p>
        <p className='footer text-center'>
            <Link className="text-center" to='/'>Menu</Link>
        </p>
    </div>
</>
);
}