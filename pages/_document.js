import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      {/* <Head /> */}
      <Head>
        <title>
          Online doctor consultation | Book appointment | Second Medic
        </title>
        <meta charset="UTF-8" />
        <meta name="author" content="Second Medic" />
        <meta
          name="title"
          content="Online doctor consultation | Book appointment | Second Medic"
        />
        <meta
          name="keywords"
          content="Doctor Consultation Online, Ask a Doctor Online, Talk to Doctor Online, Medical Second Opinion India, Medical second opinion online, medical second opinion in India, Online medical second opinion India"
        />
        <meta
          name="description"
          content="Get doctor consultation online from our wide range of expert doctors in every field at SecondMedic. Book your appointment for chat, audio consultations now."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
