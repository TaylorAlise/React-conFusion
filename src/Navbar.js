import { Navbar, NavbarBrand} from 'reactstrap';


export default function Navigation() {
    return (
        <div>
            <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                </div>
            </Navbar>
            
        </div>
    );
}