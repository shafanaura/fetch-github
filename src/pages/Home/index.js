import React, { Component } from "react";
import { connect } from "react-redux";
import { userDetail } from "../../redux/actions/user.action";

export class Home extends Component {
  state = {
    search: "",
  };
  componentDidMount() {
    this.props.userDetail();
  }
  searchUser = (event) => {
    this.setState({ [event.target.name]: event.target.value }, async () => {
      await this.props.userDetail(this.state.search);
    });
  };
  render() {
    const { data } = this.props.user;
    return (
      <React.Fragment>
        <input
          name="search"
          onChange={(event) => this.searchUser(event)}
          placeholder="Search receiver here"
        />
        {data.map.length > 0 ? (
          data.map((item) => {
            return (
              <React.Fragment>
                <p>{item.html_url}</p>
              </React.Fragment>
            );
          })
        ) : (
          <p>no data</p>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = { userDetail };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
