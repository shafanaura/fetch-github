import React, { Component } from "react";
import { connect } from "react-redux";
import { userDetail } from "../../redux/actions/user.action";
import "./styles.css";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { search: "", loading: false };
    this.btnSearch = this.btnSearch.bind(this);
  }
  componentDidMount() {
    this.props.userDetail();
  }
  searchUser = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  btnSearch = async () => {
    this.setState({ loading: true });
    await this.props.userDetail(this.state.search + "/repos");
    this.setState({ loading: false });
  };
  render() {
    const { data } = this.props.user;
    return (
      <div className="search-page">
        <input
          className="text-center"
          name="search"
          onChange={(event) => this.searchUser(event)}
          placeholder="Search user here"
        />
        <button onClick={this.btnSearch}>cari</button>
        {this.state.search === "" ? (
          <p>No Data, Please enter search user</p>
        ) : this.state.loading ? (
          <p>Loading ...</p>
        ) : data.length > 0 ? (
          data.map((item) => {
            return (
              <React.Fragment>
                <ul>
                  <li>
                    <a href={item.html_url}>{item.html_url}</a>
                  </li>
                </ul>
              </React.Fragment>
            );
          })
        ) : (
          <p>no data</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = { userDetail };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
