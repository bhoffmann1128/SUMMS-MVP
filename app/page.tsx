import Image from "next/image";
import SummsList from "./components/summsList/SummsList";
import Banner from "./components/banner/Banner";
import jsonData from '@/public/data.json'

export default function Home() {

  let pageData = jsonData;

  return (
    <main className="pt-[75px] pt:mt-auto flex min-h-screen flex-col items-center justify-between p-0 md:px-24 py-6 relative z-0">
      <div className="z-10 w-full">
          <Banner />
          <SummsList title="RECOMMENDATIONS" data={pageData} />
          <SummsList title="RECENT ADDITIONS" data={pageData} />
      </div>
    </main>
  );
}
