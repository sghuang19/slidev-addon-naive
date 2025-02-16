import { ImageResponse } from "@vercel/og";
import { chromium } from "playwright";

let element;

async () => {
  //   const browser = await chromium.launch();
  //   const page = await browser.newPage();
  //   const deploymentUrl = process.env.VERCEL_URL;
  //   console.log(deploymentUrl);
  //   element = await page.$(".slidev-layout");
  //   await element.screenshot({ path: "public/og.png" });
  //   await browser.close();
};

export default async function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          color: "black",
          background: "white",
          width: "100%",
          height: "100%",
          padding: "50px 200px",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        👋 Hello
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
