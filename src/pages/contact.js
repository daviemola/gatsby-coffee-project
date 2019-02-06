import React from "react";
import Layout from "gatsby";
export default function contact() {
  return (
    <Layout>
      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>
            Email: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message" />
          </label>
        </p>
        <div data-netlify-recaptcha="true" />
        <button type="submit">submit</button>
      </form>
    </Layout>
  );
}
