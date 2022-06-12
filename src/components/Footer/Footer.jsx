import React from "react"

export default function Footer (){

    const styleFooter = {
        background:'#212529',
        padding: '10px 10px 0px 10px',
        bottom: '0',
        width: '100%',
    }


    return (
        <footer className="page-footer font-small blue pt-4" style={styleFooter}>
            <div className="container-fluid text-center text-md-left">
                <div className="row" style={{color:'#FFC107'}}>
                    <div className="col-md-6 mt-md-0 mt-3">
                        <h5 className="text-uppercase">Distopia Store</h5>
                        <p>El mercado del futuro</p>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0"/>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled" >
                            <li><a href="#!" style={{color:'#9B9D9E'}}>Link 1</a></li>
                            <li><a href="#!" style={{color:'#9B9D9E'}}>Link 2</a></li>
                            <li><a href="#!" style={{color:'#9B9D9E'}}>Link 3</a></li>
                            <li><a href="#!" style={{color:'#9B9D9E'}}>Link 4</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!" style={{color:'#9B9D9E'}}>Link 5</a></li>
                            <li><a href="#!" style={{color:'#9B9D9E'}}>Link 6</a></li>
                            <li><a href="#!" style={{color:'#9B9D9E'}}>Link 7</a></li>
                            <li><a href="#!" style={{color:'#9B9D9E'}}>Link 8</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-copyright text-center py-3"  style={{color:'#953FAA', fontSize:'20px'}}>© {new Date().getFullYear()} Copyright:
                <a href="https://cristiansguazzin.net/"  style={{color:'white', textDecoration: 'none'}}> cristiansguazzin.net</a>
            </div>

        </footer>
  )
}
