import React from 'react'

const Users = ({loading,users}) => {
    const userview = {
      display:'grid',
      gridTemplateColumns: 'repeat('+3+','+1+'fr)'
    };

    return loading ? (   
        <div id="main" align="center">
            <img src="https://www.bing.com/th/id/OGC.fab9819978039ed6367e112b1ce4ce80?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f530580%2fscreenshots%2f4712372%2floader.gif&ehk=hlp9%2fVwYX9HYlLyLOy%2bLSKMygsAVLeLov01%2fPJir8ww%3d" alt="Loading"  className="loader"/>
        </div>
        ) : 
        (
          <div id="main" style={userview}>
    
          {users.map (user =>
                      <div className="userGrid" key={user.id}>
                          <img src={user.avatar} alt={user.avatar} className = "avatar" />
                          <h1 className="name">{user.first_name} {user.last_name}</h1>
                          <p className="email">Email: {user.email}</p>
                          <p>ID No. : {user.id}</p>
                      </div>
                    )}
          </div>
      )
}

export default Users;
