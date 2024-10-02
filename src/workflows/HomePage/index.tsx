import { useNavigate } from 'react-router-dom'
import './index.css'

export const HomePage = () => {
    const navigateTo = useNavigate()

    const routeToAuthPage = (authRoute: 'login' | 'register') => {
        switch (authRoute) {
            case 'login':
            case 'register':
                navigateTo(`/${authRoute}`)
                break
            default:
                alert(`Invalid route ${authRoute}`)
                break
        }
    }

    return (
        <div id="hero">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 text-center">
                        <h3 className="hero-title">Civic Insight</h3>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-10 col-md-offset-1 text-center">
                        <p className="hero-tagline">
                            Get your complaints against acknowledged
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <div className="row">
                    <div className="col-md-2 col-md-offset-4">
                        <center>
                            <span
                                onClick={() => routeToAuthPage('register')}
                                className="hero-bttns"
                            >
                                Register
                            </span>
                        </center>
                    </div>

                    <div className="col-md-2">
                        <center>
                            <span
                                onClick={() => routeToAuthPage('login')}
                                className="hero-bttns"
                            >
                                Login
                            </span>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    )
}
