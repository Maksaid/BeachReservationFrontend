import {Container} from "react-bootstrap";


const Profile = () =>{
    return(
        <Container className="mt-5 pt-5" fluid={"xxl"}>
            <h1>{localStorage.getItem('userName')}</h1>
            <Container>
            </Container>
        </Container>
    );
}

export default Profile;