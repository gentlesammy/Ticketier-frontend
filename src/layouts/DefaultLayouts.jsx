import "./defaultlayout.css";
import Footer from './partials/Footer'
import Header from './partials/Header'

const DefaultLayouts = ({children}) => {
    return (
        <div className="default_layout_container">
            <Header/>
            <div className="main_content">
                {children}
            </div>
            <Footer/>
        </div>
    )
}

export default DefaultLayouts
