import Link from "next/link";

export interface SummItem {
    id: number,
    title: string,
    cover_url: string,
    description: string,
  }

export default function SummsList({title, data}:{title:string, data:any | undefined}){

    let pageData = data;
    
    return (
    <div className="w-full mb-12">
        <h2 className="md:text-left text-center border-b-2 border-slate-100">{title}</h2>
        
        <div className="md:flex items-start justify-between">
            {pageData && pageData.summs.map((summItem:SummItem, index:number) => {
                
                return (
                    <div key={`summslist-${index}`} className="summ-list-item w-full">
                        <img className="h-[50vh] w-auto md:w-full m-auto md:h-auto" src={summItem.cover_url} />
                        <h3 className="leading-6 my-2">{summItem.title}</h3>
                        <Link href={`/summs/${summItem.id}`} className="btn-primary w-full">GET STARTED</Link>
                    </div>
                )
            })}
            
        </div>
    </div>
    )
}