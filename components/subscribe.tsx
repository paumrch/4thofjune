import React, { useRef, useState } from "react";

function Subscribe() {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState("");

  const subscribe = async (e) => {
    e.preventDefault();

    // 3. Send a request to our API with the user's email address.
    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.
      // setMessage(error);
      setMessage("Ups, algo falla 🙄. Vuelve a intentarlo.");

      return;
    }

    // 5. Clear the input value and show a success message.
    inputEl.current.value = '';
    setMessage("Welcome to the team! 🤟");
  };

  return (
    <div className="max-w-2xl mx-auto relative flex flex-col items-center justify-center overflow-hidden mb-16 md:mb-12">
      <div className="w-full max-w-4xl rounded-md border-2 border-gray-100 bg-white p-14">
      <div className="flex flex-col items-center">
        <span className="-rotate-1 rounded-lg bg-gradient-to-r from-teal-200 to-lime-200 py-px px-2 text-sm text-gray-900">
          Cada lunes a las 22:00h.
        </span>
        <h3 className="mt-2 max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl md:text-4xl md:leading-tight">
          ¿Quieres recibir todas las novedades?
        </h3>
        <form
          onSubmit={subscribe}
          className="mx-auto mt-4 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:gap-0"
        >
          {/* <label htmlFor="email-input">{"Email Address"}</label> */}
          <input
            type="email"
            id="email-input"
            name="email"
            placeholder="Corre Electrónico"
            ref={inputEl}
            required
            autoCapitalize="off"
            autoCorrect="off"
            className="grow rounded border-2 border-teal-300 py-3 px-3 
            
            focus:outline-none sm:rounded-l-md sm:rounded-r-none sm:border-r-0"
          />
          {/* <div>
            {message
              ? message
              : `I'll only send emails when new content is posted. No spam.`}
          </div> */}
          <button
            type="submit"
            value=""
            name="subscribe"
            className="rounded bg-gradient-to-r from-teal-200 to-lime-200 px-5 py-4 font-bold text-gray-900 sm:rounded-l-none sm:rounded-r-md hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200
            "
          >
            Sí, quiero.
          </button>
        </form>
      </div>
      <div className="flex flex-col items-center mt-4">
        {message
          ? message
          : `Revisa tu bandeja de entrada.`}
      </div>
      </div>
    </div>
  );
}

export default Subscribe;
