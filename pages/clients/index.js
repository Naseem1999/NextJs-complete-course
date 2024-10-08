import Link from "next/link";


function ClientsPage(){
    const clients=[
        {id:"max",name:"Maximilian"},
        {id:"manu",name:"Manuel"}
    ]
    return(
        <div>
            <h1>The Client Page</h1>
          {
            clients.map((client)=>(
                <li key={client.id}>
                    {/* <Link  href={`clients/${client.id}`}>{client.name}</Link> */}
                    <Link  href={{
                        pathname:"/clients/[id]",
                        query:{id:client.id}
                    }}>{client.name}</Link>

                </li>
            ))
          }
        </div>
    )
}

export default ClientsPage;