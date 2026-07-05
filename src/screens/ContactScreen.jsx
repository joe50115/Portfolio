import { useState } from "react";

function ContactScreen() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(field) {
    return (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <span className="eyebrow">Get in touch</span>
          <h1>Contact</h1>
          <p className="lede">
            Questions about a project, or want to compare notes on homelabs, embedded
            systems, or Godot? Reach out.
          </p>
        </div>
      </header>

      <section>
        <div className="wrap contact-columns">
          <div>
            <form className="form-grid" onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" required value={form.name} onChange={handleChange("name")} />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required value={form.email} onChange={handleChange("email")} />
              </div>
              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="6" required value={form.message} onChange={handleChange("message")} />
              </div>
              <button type="submit" className="btn primary">Send message</button>
              <p className="form-note">
                This site has no backend, so submitting opens your email client with
                the message pre-filled instead of sending silently.
              </p>
            </form>
          </div>

          <div>
            <h4 className="eyebrow">Other ways to reach me</h4>
            <div className="contact-links">
              <a href="mailto:your.email@example.com">your.email@example.com</a>
              <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                github.com/your-username
              </a>
            </div>
            <p className="form-note" style={{ marginTop: "20px" }}>
              Placeholder handles — swap these for your real email and GitHub link in
              ContactScreen.jsx.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactScreen;
