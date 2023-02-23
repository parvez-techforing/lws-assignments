import React from 'react';
import { useDispatch } from 'react-redux';
import { addBooking } from '../redux/bookingsSlice';

const InputData = () => {
    const [from, setFrom] = React.useState('');
    const [to, setTo] = React.useState('');
    const [date, setDate] = React.useState('');
    const [guests, setGuests] = React.useState('');
    const [ticketClass, setTicketClass] = React.useState('');
    const [bookingCount, setBookingCount] = React.useState(0);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (bookingCount >= 3) {
            alert('You can only add 3 bookings.');
            return;
          }
        const newBooking = { from, to, date, guests, ticketClass };
        dispatch(addBooking(newBooking));
        setFrom('');
        setTo('');
        setDate('');
        setGuests('');
        setTicketClass('');
        setBookingCount(bookingCount + 1);
    };
    return (
        <>
        <div className="mt-[160px] mx-4 md:mt-[160px] relative">
        <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
            <form className="first-hero lws-inputform">
            {/* From  */}
            <div className="des-from">
                <p>Destination From</p>
                <div className="flex flex-row">
                <img src="./img/icons/Frame.svg" alt="" />
                <select className="outline-none px-2 py-2 w-full" name={from} id="lws-from" required onChange={(e) => {setFrom(e.target.value);}} >
                    <option value="" hidden>Please Select</option>
                    <option>Dhaka</option>
                    <option>Sylhet</option>
                    <option>Saidpur</option>
                    <option>Cox's Bazar</option>
                </select>
                </div>
            </div>

            {/* To  */}
            <div className="des-from">
                <p>Destination To</p>
                <div className="flex flex-row">
                <img src="./img/icons/Frame.svg" alt="" />
                <select className="outline-none px-2 py-2 w-full" name={to} id="lws-to" required onChange={(e) => {setTo(e.target.value);}} >
                    <option value="" hidden>Please Select</option>
                    <option>Dhaka</option>
                    <option>Sylhet</option>
                    <option>Saidpur</option>
                    <option>Cox's Bazar</option>
                </select>
                </div>
            </div>

            {/* Date */}
            <div className="des-from">
                <p>Journey Date</p>
                <input type="date" className="outline-none px-2 py-2 w-full date" name={date} id="lws-date" required onChange={(e) => {setDate(e.target.value);}}/>
            </div>

            {/* Guests */}
            <div className="des-from">
                <p>Guests</p>
                <div className="flex flex-row">
                <img src="./img/icons/Vector (1).svg" alt="" />
                <select className="outline-none px-2 py-2 w-full" name={guests} id="lws-guests" required onChange={(e) => {setGuests(e.target.value);}}>
                    <option value="" hidden>Please Select</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3 Persons</option>
                    <option value="4">4 Persons</option>
                </select>
                </div>
            </div>

            {/* Class */}
            <div className="des-from !border-r-0">
                <p>Class</p>
                <div className="flex flex-row">
                <img src="./img/icons/Vector (3).svg" alt="" />
                <select className="outline-none px-2 py-2 w-full" name={ticketClass} id="lws-ticketClass" required onChange={(e) => {setTicketClass(e.target.value);}}>
                    <option value="" hidden>Please Select</option>
                    <option>Business</option>
                    <option>Economy</option>
                </select>
                </div>
            </div>

            <button className="addCity" type="submit" id="lws-addCity" onClick={(e) => {handleSubmit(e);}}>
                <svg width="15px" height="15px" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <span className="text-sm">Book</span>
            </button>
            </form>
        </div>
        </div>
        </>
    );
};

export default InputData;