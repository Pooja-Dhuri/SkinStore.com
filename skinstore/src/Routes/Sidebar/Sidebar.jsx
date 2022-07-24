import React, { useState } from "react";
import data from '../Sidebar/sidebardata.json'
import style from './sidebar .module.css'


const ReadMore = ({ children }) => {
const text = children;
// const title=[
// 	{name:"Gender"},
// 	{name:"AverageReviews"},
// 	{name:"Skincare Day Night"},
// 	{name:"Price"}
// ]
// const [date,setDate]=useState(title)
const number_to_show=0;
const [isReadMore, setIsReadMore] = useState(true);
const toggleReadMore = () => {
	setIsReadMore(!isReadMore);
};
return (
	<p className={style.text}>
	{isReadMore ? text.slice(0, number_to_show) : text}
		<span onClick={toggleReadMore} className={style.readorhide}>
		{isReadMore ? "v" : "^"}
	    </span><hr />
	</p>
);
};

const Content = () => {
	const Gender=data.Gender
	const review=data.review
	const day=data.Day;
	const price=data.Price;
	const [gdata,setGData]=useState(Gender)
	const [rdata,setRData]=useState(review)
	const [ddata,setDData]=useState(day)
	const [pdata,setPData]=useState(price)
return (
	<div className={style.container}>
	<div>
		<h3>Gender</h3>
		<ReadMore>
		{
			gdata.map((e)=>(
				<div className={style.scontent}>
					<input type="checkbox" />
					<p>{e.gtitle}</p>
				</div>
			))
		}
		</ReadMore>
		<h3>Average Reviews</h3>
	
		<ReadMore>
		{
			rdata.map((e)=>(
				<div className={style.scontent}>
					<input type="checkbox" />
					<p>{e.rtitle}</p>
				</div>
			))
		}
		</ReadMore>
		<h3>Skincare Day Night</h3>
		<ReadMore>
		{
			ddata.map((e)=>(
				<div className={style.scontent}>
					<input type="checkbox" />
					<p>{e.dtitle}</p>
				</div>
			))
		}
		</ReadMore>
		<h3>Price</h3>
		<ReadMore>
		{
			pdata.map((e)=>(
				<div className={style.scontent}>
					<input type="checkbox" />
					<p>{e.ptitle}</p>
				</div>
			))
		}
		</ReadMore>
	</div>
	</div>
);
};

export default Content;
