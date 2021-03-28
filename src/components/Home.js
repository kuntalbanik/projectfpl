import React from "react";
import { Jumbotron, Button, Container } from "reactstrap";

const Home = () => {

    return (
        <div>
            <Jumbotron className="text-center">
                <Container>
                    <h1 className="display-4">This is my First Jumbotron</h1>
                    <p>This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-2" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>

                    <Button color="primary" outline>Explore</Button>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Home;