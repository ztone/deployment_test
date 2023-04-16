import { React, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DatePicker, RangePicker } from 'react-trip-date';
import Footer from './Footer';

export default function Campaigns() {

  let { id } = useParams();
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

    //onChange = date => console.log(date)

return (
<>
    <div className="display-1 text-center small-logo">
        <img className='small-logo' src="/images/logo.png" alt="Voice of influence" width="70px"/> 
    </div>
    <div className='mid-line w-25 float-l'></div>
    <div className='mid-line w-25 float-r'></div>
    <div className="text-center">My Campaigns</div>
        
    <RangePicker
        theme={theme}
        numberOfMonths={2}
        onChange={dates => console.log("dates", dates)}
        responsive={handleResponsive} 
    />

    <p className='text-center'>
        <Link className='light-btn fw-bold btn' to='?active=true'>Active</Link>   
    </p>
    <p className='text-center'>
        <Link className='light-btn fw-bold btn' to='?scheduled=true'>Scheduled</Link>   
    </p>
    <p className='text-center'>
        <Link className='light-btn fw-bold btn' to='?completed=true'>Completed</Link>   
    </p>
    <Footer />
</>
);
}