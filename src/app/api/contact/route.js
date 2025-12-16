// src/app/api/contact/route.js
export async function POST(req) {
  try {
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby8CAAqwaBQX59CZZTkt6gVgrkgdw3PpX6JcJ8BmPpJY_8yXJGoESeoTv7l8g9y6lZL/exec";

    const formData = await req.json();

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    return new Response(JSON.stringify({ status: "success", data }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ status: "error", message: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
