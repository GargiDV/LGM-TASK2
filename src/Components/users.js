import React from 'react'

const Users_card = ({loading,users}) => {
    return loading ? (   
          <div id="main">
            <img src="data:image/jpeg;base64,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" alt="Loaading.." className="loader"/></div>
        ) : 
        (
          <div id="main">
    
          {users.map(user =>
                      <div className="project column-3">
                        {
                          console.log(user)
                        }
                        <div className="profile">
                          <img src={user.avatar} alt={user.avatar} className="avatar"></img>
                          <h1 className="name">{user.first_name} {user.last_name}</h1>
                          <p className="email">{user.email}</p>
                          <p>User_ID: {user.id}</p>
                        </div>
                      </div>
            )
          }
          </div>
        )
}

export default Users_card;