import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://cautious-space-doodle-gp95xv6xg43vjr9-8000.app.github.dev/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div>
      <h1>Teams</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Members</th>
          </tr>
        </thead>
        <tbody>
          {teams.map(team => (
            <tr key={team._id}>
              <td>{team._id}</td>
              <td>{team.name}</td>
              <td>{team.members.map(member => member.username).join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Teams;
