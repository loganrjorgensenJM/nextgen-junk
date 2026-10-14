"use client";

import { FormEvent, useState } from "react";

type QuoteState = {
  name: string;
  phone: string;
  email: string;
  location: string;
  service: string;
  details: string;
};

const initialState: QuoteState = {
  name: "",
  phone: "",
  email: "",
  location: "",
  service: "General junk removal",
  details: "",
};

export default function QuoteForm() {
  const [form, setForm] = useState(initialState);
  const [sent, setSent] = useState(false);

  function update(field: keyof QuoteState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    if (sent) setSent(false);
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(
      `NextGen Junk website quote - ${form.name || "New customer"}`
    );

    const body = encodeURIComponent(
      [
        "New quote request from NextGenJunkCo.com",
        "",
        `Name: ${form.name}`,
        `Phone: ${form.phone}`,
        `Email: ${form.email || "Not provided"}`,
        `Location: ${form.location}`,
        `Service: ${form.service}`,
        "",
        "Job details:",
        form.details,
      ].join("\n")
    );

    setSent(true);
    window.location.href =
      `mailto:nextgenjunkteam@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className="quoteForm" onSubmit={submit}>
      <div className="formGrid">
        <label>
          <span>Name *</span>
          <input
            required
            value={form.name}
            onChange={(event) => update("name", event.target.value)}
            placeholder="Your name"
            autoComplete="name"
          />
        </label>

        <label>
          <span>Phone *</span>
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(event) => update("phone", event.target.value)}
            placeholder="(775) 555-1234"
            autoComplete="tel"
          />
        </label>

        <label>
          <span>Email</span>
          <input
            type="email"
            value={form.email}
            onChange={(event) => update("email", event.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
          />
        </label>

        <label>
          <span>City / ZIP *</span>
          <input
            required
            value={form.location}
            onChange={(event) => update("location", event.target.value)}
            placeholder="Reno, NV"
          />
        </label>

        <label className="formWide">
          <span>Service *</span>
          <select
            value={form.service}
            onChange={(event) => update("service", event.target.value)}
          >
            <option>General junk removal</option>
            <option>Furniture removal</option>
            <option>Appliance removal</option>
            <option>Garage / room cleanout</option>
            <option>Rental / move-out cleanout</option>
            <option>Estate cleanout</option>
            <option>Yard debris</option>
            <option>Construction / remodel debris</option>
            <option>Commercial cleanout</option>
            <option>Curbside pickup / dump run</option>
          </select>
        </label>

        <label className="formWide">
          <span>What needs to go? *</span>
          <textarea
            required
            rows={5}
            value={form.details}
            onChange={(event) => update("details", event.target.value)}
            placeholder="Tell us what you need removed, how much there is, and anything we should know about access."
          />
        </label>
      </div>

      <button className="button buttonGradient formSubmit" type="submit">
        Send Quote Request <span aria-hidden="true">→</span>
      </button>

      <p className="formNote">
        Want a faster estimate? Text photos to{" "}
        <a href="sms:+15306808652">Logan at (530) 680-8652</a>
        {" or "}
        <a href="sms:+17753868276">Michael at (775) 386-8276</a>.
      </p>

      {sent && (
        <p className="formStatus">
          Your email app should open with your quote request filled in.
        </p>
      )}
    </form>
  );
}
