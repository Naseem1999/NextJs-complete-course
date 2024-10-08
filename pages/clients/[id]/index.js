import { useRouter } from "next/router";

function ClientProgectPage(){
    const Router=useRouter();
    const loadProjectHandler=()=>{
        // Router.push('/clients/max/projecta');
        Router.push({
            pathname:'/clients/[id]/[clientprojectid]',
            query:{id:"max",clientprojectid:"projecta"}
        })
    }

    return <div>
        <h1>The progects of the given client</h1>
        <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
}
export default ClientProgectPage;