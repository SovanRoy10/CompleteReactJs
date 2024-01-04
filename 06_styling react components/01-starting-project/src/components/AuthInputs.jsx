import { useState } from 'react';
import { styled } from 'styled-components';

const ControlContainer = styled.div`
display: flex;
flex-direction: column;
gap: 0.5rem;
margin-bottom: 1.5rem;
`

const Label = styled.label`
display: block;
margin-bottom: 0.5rem;
font-size: 0.75rem;
font-weight: 700;
letter-spacing: 0.1em;
text-transform: uppercase;
color: ${(props) => props.$invalid ? '#f87171' : ' #6b7280'} ;
`

const Input = styled.input`
width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  background-color: ${(props) => props.$invalid ? '#fed2d2' : '#d1d5db'};
  color: ${(props) => props.$invalid ? '#ef4444' : '#374151'};
  border: 1px solid ${(props) => props.$invalid ? '#f73f3f' : '#transparent'};;
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  //return (
  // <div id="auth-inputs">
  //   <ControlContainer>
  //     <p>
  //       <Label $invalid={emailNotValid}>Email</Label>
  //       <Input
  //         type="email"
  //         // style={{
  //         //   backgroundColor : emailNotValid ? '#fed2d2' : '#d1d5db'
  //         // }}
  //         // className={emailNotValid ? 'invalid' : undefined}
  //         $invalid={emailNotValid}
  //         onChange={(event) => handleInputChange('email', event.target.value)}
  //       />
  //     </p>
  //     <p>
  //       <Label $invalid={passwordNotValid}>Password</Label>
  //       <Input
  //         type="password"
  //         $invalid={passwordNotValid}
  //         // className={passwordNotValid ? 'invalid' : undefined}
  //         onChange={(event) =>
  //           handleInputChange('password', event.target.value)
  //         }
  //       />
  //     </p>
  //   </ControlContainer>
  //   <div className="actions">
  //     {/* <button type="button" className="text-button">
  //       Create a new account
  //     </button>
  //     <button className='button' onClick={handleLogin}>Sign In</button> */}

  //     {/* using tailwind css */}

  //     <button type="button" className="text-button">
  //       Create a new account
  //     </button>
  //     <button className='button px-4 py-2 font-semibold uppercase rounded text-stone-900 bg-amber-400 hover:bg-amber-500' onClick={handleLogin}>Sign In</button>
  //   </div>
  // </div>


  {/* using tailwind css */ }
  let labelClass = "block mb-2 text-xs font-bold tracking-wide uppercase text-stone-300";
  let inputClass = "w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow bg-stone-300";

  let invalidLabel = "block mb-2 text-xs font-bold tracking-wide uppercase text-red-400";
  let invalidInput = "w-full px-3 py-2 leading-tight text-red-500 border rounded shadow bg-red-100 border-red-300";



  return (
    <div id="auth-inputs" className='w-full max-w-sm p-8 rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800 mx-auto'>
      <div className="flex flex-col gap-2 mb-6">
        <p>
          <label className={emailNotValid ? invalidLabel : labelClass}>Email</label>
          <input
            type="email"
            className={emailNotValid ? invalidInput : inputClass}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p>
        <p>
          <label className={passwordNotValid ? invalidLabel : labelClass}>Password</label>
          <input
            type="password"
            className={passwordNotValid ? invalidInput : inputClass}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p>
      </div>
      <div className="flex justify-end gap-4">
        <button type="button" className="text-amber-400 hover:text-amber-500">
          Create a new account
        </button>
        <button className='button px-4 py-2 font-semibold uppercase rounded text-stone-900 bg-amber-400 hover:bg-amber-500' onClick={handleLogin}>Sign In</button>
      </div>
    </div>
  );
}
