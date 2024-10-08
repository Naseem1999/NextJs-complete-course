import { useRouter } from "next/router";
function SelectedClientprogectPage(){
    const router=useRouter();
    console.log(router.query);
    return <div>
            <h1>The progect page for a specific project for a specific client</h1>
    </div>
}

export default SelectedClientprogectPage;