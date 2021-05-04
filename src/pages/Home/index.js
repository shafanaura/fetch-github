import React, { Component } from "react";
import {
  Button,
  Container,
  Form,
  Spinner,
  Navbar,
  Nav,
  FormControl,
  ListGroup,
  Card,
  ListGroupItem,
} from "react-bootstrap";
import { connect } from "react-redux";
import { userRepo, userDetail } from "../../redux/actions/user.action";
import "./styles.css";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { search: "", loading: false };
    this.btnSearch = this.btnSearch.bind(this);
  }
  searchUser = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  btnSearch = async () => {
    this.setState({ loading: true });
    await this.props.userDetail(this.state.search);
    await this.props.userRepo(this.state.search + "/repos");
    this.setState({ loading: false });
  };
  render() {
    const { data, detail } = this.props.user;
    return (
      <React.Fragment>
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Navbar.Brand>Github API</Navbar.Brand>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              name="search"
              onChange={(event) => this.searchUser(event)}
              placeholder="Search user"
              className="mr-sm-2"
            />
            <Button variant="outline-info" onClick={this.btnSearch}>
              Search
            </Button>
          </Form>
        </Navbar>
        <Container className="mt-4">
          {this.state.loading ? (
            <Spinner animation="border" variant="primary" />
          ) : data.length > 0 ? (
            <React.Fragment>
              <Card style={{ width: "18rem" }} className="mb-4">
                <Card.Body>
                  <Card.Title className="m-0">{detail.name}</Card.Title>
                  <Card.Text>{detail.login}</Card.Text>
                  <Card.Text>{detail.bio}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    Public repository : {detail.public_repos}
                  </ListGroupItem>
                  <ListGroupItem>Followers : {detail.followers}</ListGroupItem>
                  <ListGroupItem>Following : {detail.following}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Card.Link href={detail.html_url}>
                    Goto {detail.login} github page
                  </Card.Link>
                </Card.Body>
              </Card>
              <p className="h3 mb-4">Repositories</p>
              {data.map((item) => {
                return (
                  <ul>
                    <li>
                      <a href={item.html_url}>{item.name}</a>
                    </li>
                  </ul>
                );
              })}
            </React.Fragment>
          ) : (
            <p>Not found</p>
          )}
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = { userRepo, userDetail };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
