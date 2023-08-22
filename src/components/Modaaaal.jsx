import  { useState } from 'react';
import {Container, Col, Row} from 'react-bootstrap'


import { PaystackButton } from 'react-paystack';

const Modaaaal = () => {

  const publicKey = "pk_test_d423971de624b1b46e7372bebfcb33b19e41e9fa"
  const amount = 10000;
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const resetForm = () => {
    setEmail('');
    setName('');
    setPhone('');
  };

  const componentProps = {
    email,
    amount,
    currency: 'GHS',
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: 'Pay Now',
    onSuccess: ({ reference }) => {
      alert(
        `Your purchase was successful! Transaction reference: ${reference}`
      );
      resetForm();
    },
    onClose: () => alert("Wait! don't go!!!!"),
  };


  const [selectedOptions, setSelectedOptions] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleCheckboxChange = (e) => {
    const optionName = e.target.name;
    const optionAmount = parseInt(e.target.getAttribute('data-amount'));

    if (e.target.checked) {
      setSelectedOptions((prevOptions) => [...prevOptions, { name: optionName, amount: optionAmount }]);
      setTotalAmount((prevTotal) => prevTotal + optionAmount);
    } else {
      setSelectedOptions((prevOptions) => prevOptions.filter((option) => option.name !== optionName));
      setTotalAmount((prevTotal) => prevTotal - optionAmount);
    }
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
              <form>
                <label>Location</label> &nbsp;
                <input type='text' name='location' /><br />
                <label>Purpose</label><br />
                <input type="checkbox" name="property registration" data-amount={300} onChange={handleCheckboxChange} />&nbsp;
                <label htmlFor="lareg">Property Registration</label><br />
                <input type="checkbox" name="Propertyvaluation" data-amount={400} onChange={handleCheckboxChange} />&nbsp;
                <label htmlFor="laval">Property Valuation</label><br />
                <input type="checkbox" name="landscaping" data-amount={200} onChange={handleCheckboxChange} />&nbsp;
                <label htmlFor="javascript">Landscaping</label><br />
                <input type="checkbox" name="buy" data-amount={100} onChange={handleCheckboxChange} />&nbsp;
                <label htmlFor="javascript">Buy</label><br />
                <input type="checkbox" name="rent" data-amount={100} onChange={handleCheckboxChange} />&nbsp;
                <label htmlFor="javascript">Rent</label><br />
                <input type="checkbox" name="Short" data-amount={100} onChange={handleCheckboxChange} />&nbsp;
                <label htmlFor="javascript">Short-Stay</label><br />
                <label htmlFor="date">Date</label>&nbsp;
                <input type="date" name="date" /><br />
                
              
              </form>
      </Col>

      <Col>
              <div>
                
                <h2>Pay here to Complete Booking</h2>
                <ul>
                  {selectedOptions.map((option, index) => (
                    <li key={index}>
                      {option.name} - GHS{option.amount}
                    </li>
                  ))}
                </ul>
                <label>Total Amount: GHS{totalAmount}</label>&nbsp;
               
              </div>
              <div className="checkout">
          <div className="checkout-form">
            <div className="checkout-field">
              <label>Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="checkout-field">
              <label>Email</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="checkout-field">
              <label>Phone</label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <PaystackButton className="paystack-button" {...componentProps} />
            <p>(No refunds)</p>
          </div>
        </div>
           </Col>
         </Row>
      </Container>
    </div>
  );
}

export default Modaaaal;
