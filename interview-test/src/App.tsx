import { Navbar } from "./components/navbar/navbar"
import { IntlProvider } from "react-intl"
import { FormContainer } from "./pages/form/formContainer"
import { Routes, Route } from 'react-router-dom'
import { Footer } from "./components/footer/footer"
import { Verification } from "./pages/document/document"
import {useEffect, useState } from "react"

let initLocale = localStorage.getItem("direction") || "en";
if (navigator.language === "en") {
  initLocale = "en";
} else if (navigator.language === "ar") {
  initLocale = "ar";
}

function loadMessages(locale: string) {
  switch (locale) {
    case "ar":
      return import("./localization/ar.json");
    case "en":
      return import("./localization/en.json");
    default:
      return import("./localization/en.json");
  }
}

function getDirection(locale: string): string {
  console.log(locale)
  switch (locale) {
    case "ar":
      return "rtl";
    case "en":
      return "ltr";
    default:
      return "ltr";
  }
}

function LocalizationWrapper() {
  const [locale, setLocale] = useState<string>(initLocale);
  const [messages, setMessages] = useState<any>(null);
  useEffect(() => {
    const promise = loadMessages(locale);
    promise.then(setMessages as any);
  }, [locale]);

  return messages ? (
    <IntlProvider locale={locale} messages={messages}>
      <App direction={getDirection(locale)} onLocaleChange={(locale) => setLocale(locale)} />
    </IntlProvider>
  ) : null;
}

type AppProps = {
  direction: string,
  onLocaleChange: (locale: string) => void
}

function App({ direction, onLocaleChange }: AppProps) {
  return (
    <div dir={direction}>
      <Navbar onLocaleChange={onLocaleChange} />
      <Routes>
        <Route path="/" element={<FormContainer />} />
        <Route path="/verify" element={<Verification />} />
      </Routes>
      <Footer />
    </ div>
  )
}

export default LocalizationWrapper