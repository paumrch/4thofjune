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
    <div className="mx-auto relative flex flex-col items-center justify-center mb-8 md:mb-12">
      <div className="w-full rounded-md border-2 border-orange-100 bg-orange-50 p-14">
      <div className="flex flex-col items-center">
        <span className="-rotate-1 rounded-lg bg-gradient-to-r from-orange-200 to-orange-300 py-px px-2 text-sm font-mono text-orange-700">
          Cada lunes a las 22:00h.
        </span>
        <h3 className="mt-2 max-w-2xl text-center text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl md:leading-tight">
          ¿Quieres recibir cada publicación?
        </h3>
        <form
            onSubmit={subscribe}
            className="mx-auto mt-4 flex w-full max-w-md flex-col gap-2 sm:flex-row"
          >
            {/* <label htmlFor="email-input">{"Email Address"}</label> */}
            <input
              type="email"
              id="email-input"
              name="email"
              placeholder="Correo Electrónico"
              ref={inputEl}
              required
              autoCapitalize="off"
              autoCorrect="off"
              className="grow rounded text-sm py-3 px-3 focus:ring-0 focus:border-2 border-orange-300 focus:border-orange-400"
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
              className="rounded px-3 py-3 bg-orange-400 hover:bg-orange-500 text-white
            "
            >
              Suscríbeme
            </button>
          </form>
      </div>
      <div className="flex flex-col items-center mt-4 text-xs text-orange-500">
        {message
          ? message
          : `Revisa tu bandeja de entrada.`}
      </div>
      </div>
    </div>
  );
}

export default Subscribe;
