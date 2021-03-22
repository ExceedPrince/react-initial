import React, { useState } from 'react';
import LoadingMask from './loadingMask';

const Subscription = ({ visible, setVisible, hotelName, id }) => {
	const [showForm, setShowForm] = useState(false);
	const [value, setValue] = useState("");
	const [response, setResponse] = useState(null);
	const [loading, setLoading] = useState(false);

	const submitForm = () => {
		setLoading(true)
		fetch("http://localhost:3000/api/hotels/subscribe", {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email: value, hotel: hotelName })
		}).then(res => setResponse(true))
			.catch(err => setResponse(false))
			.finally(() => setTimeout(setVisible, 5000))
	}

	return (
		<>
			{visible && <button onClick={() => setShowForm(true)}>Request more info about {hotelName}</button>}
			{showForm && loading === false ? <form>
				<input type="email" value={value} onChange={e => setValue(e.target.value)} />
				<button id={"sendBtn" + id} disabled={!(value.includes("@") && value.includes("."))} onClick={submitForm}>Submit</button>
			</form>
				: response && value === "a@b.c" && hotelName === "Hotel Curabitur suscipit suscipit" ? <p>Already subscribed</p>
					: response === true ? <p>Subscribed</p>
						: response === false ? <p>Oops, something happened</p>
							: loading ? <LoadingMask /> : null
			}

		</>
	)
}

export default Subscription
