import React, { Component } from 'react';
import { connect } from 'react-redux'


class Users extends Component {

  render() {

    let users = this.props.users.map((user, index) => <li key={index}>{user.username}, {user.hometown}</li>)


    return (
      <div>
        <ul>
          Users!
          { users }

        </ul>
        {this.props.userLength}

      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { 
    users: state.users,
    userLength: state.users.length }
}

export default connect(mapStateToProps)(Users);
