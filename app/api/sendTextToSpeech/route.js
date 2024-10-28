import { NextResponse } from "next/server";

export async function POST(req) {
  const url = 'https://open-ai21.p.rapidapi.com/texttospeech';
  const options = {
    method: 'POST',
    headers: {
      'x-rapidapi-key': '8849fc8f4fmsh9d6227e9ac3c411p12b6a1jsn34d5961f3c86',
      'x-rapidapi-host': 'open-ai21.p.rapidapi.com',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      text: 'hello everyone. this a test run'
    })
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json(); // Assuming API returns JSON
    return NextResponse.json(result);
  } catch (error) {
    console.error("Server error: " + error);
    return NextResponse.json({ error: "Failed to fetch data from the server" }, { status: 500 });
  }
}
