import { useRouter } from "next/router";
function PortfolioProductPage(){
    const Router=useRouter();

    console.log(Router.pathname)
    console.log(Router.query)
    return(
        <div>
            <h1>the portfolio product Page</h1>
        </div>
    )
}

export default PortfolioProductPage;