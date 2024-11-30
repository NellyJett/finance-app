import PageHeader from "../components/page-header"

const Layout = ({children}) =>{
    return(
        <div>
            <PageHeader className="my-8" />
            <main>{children}</main>
            <footer>Footer</footer>
        </div>
    )
}

export default Layout