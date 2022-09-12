import './App.css'

export default function App() {
  const back = () => {
    history.back()
  }
  return (
    <>
      <div className="card">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10em"
          height="10em"
          color="#198754"
          fill="currentColor"
          className="bi bi-check2-circle"
          viewBox="0 0 16 16"
        >
          <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
          <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
        </svg>
        <h1>Form submitted successfully!</h1>
        <p id="auth">
          Thank you for filling out! The form has been submitted successfully.
          <br /> We will reply you soon!
        </p>
        <p id="info" />
      </div>
      <div>
        <br />
        <button type="button" className="btn btn-outline-success" onClick={back}>Go back</button>
      </div>
    </>

  )
}
