import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { PaystackButton } from 'react-paystack';
import Modal from 'react-bootstrap/Modal';

const Companies = () => {


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

  const handleCheckboxChange = (e) => {
    const optionName = e.target.name;
    const optionAmount = parseInt(e.target.getAttribute);
   
  if (e.target.checked) {
    setSelectedOptions((prevOptions) => [...prevOptions, { name: optionName, amount: optionAmount }]);
    
  } else {
    setSelectedOptions((prevOptions) => prevOptions.filter((option) => option.name !== optionName));
 
  }}

const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
          <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>INSURANCE COMPANIES</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>(Choose One Insurance Company)</p>
        <form>
           <input type='radio' name='Pheonix Insurance' onChange={handleCheckboxChange}/>
           <label>Pheonix Insurance</label>
           <input type='radio' name='Serene Insurance' onChange={handleCheckboxChange}/>
           <label>Serene Insurance</label><br/>
           <input type='radio' name='Priority Insurance' onChange={handleCheckboxChange}/>
           <label>Priority Insurance</label>
           <input type='radio' name='Prudential Insurance' onChange={handleCheckboxChange}/>
           <label>Prudential Insurance</label><br/>
           <input type='radio' name='Enetrprise Insurance' onChange={handleCheckboxChange}/>
           <label>Enterprise Insurance</label>
           <input type='radio' name='Star Insurance' onChange={handleCheckboxChange}/>
           <label>Star Insurance</label>

        </form>
        </Modal.Body>
        


        <div>
                
                <h2>Selected Company</h2>
                <ul>
                  {selectedOptions.map((option, index) => (
                    <li key={index}>
                      {option.name} 
                    </li>
                  ))}
                </ul>
                
               
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
          
   




      </Modal>
    </>



    </div>
  )
}

export default Companies