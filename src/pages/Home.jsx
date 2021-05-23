import { TopBar } from "../components/home/_TopBar";
import { CountriesList } from "../components/home/_CountriesList";

export default function Home() {
  return (
    <main className="py-7 md:py-9 lg:py-12 px-4 md:px-8 lg:px-20">
      <TopBar />
      <CountriesList />
    </main>
  )
}