import React, { useState, useEffect } from 'react';
import Subscription from './subscription';

const Hotel = ({ hotels }) => {
	const [show, setShow] = useState(false);


	return (
		<div id={hotels.id}>
			<p>{hotels.name}</p>
			{show && <p>{hotels.city} ({hotels.stars})</p>}
			{show ? <button onClick={() => setShow(false)}>Show less</button> : <button onClick={() => setShow(true)}>Show more</button>}<br /><br />
			{show && <Subscription visible={show} setVisible={setShow} hotelName={hotels.name} id={hotels.id} />}
		</div>
	)
}

export default Hotel;
