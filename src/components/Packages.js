import { ListGroup, Container, Card } from "react-bootstrap";

export default function Packages(props) {
    const displayPackages = props.packages.map((eachPackage, key) => {
        return <ListGroup.Item key={key}>{eachPackage}</ListGroup.Item>
    })

    return <Container>
        <Card>
            <Card.Body>
                <Card.Title>
                    Our Packages
                </Card.Title>
                <Card.Text>
                    Check out these awesome packages - you don't want to miss out!
                </Card.Text>
            </Card.Body>
        </Card>
        <ListGroup>
            {displayPackages}
            <ListGroup.Item active>
                Cool Potato Chip Eye Masks
            </ListGroup.Item>
        </ListGroup>
    </Container>
}