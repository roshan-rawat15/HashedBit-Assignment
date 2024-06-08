document.addEventListener("DOMContentLoaded", function () {
  const teams = [
    { team: "CSK", matchesPlayed: 8, wins: 6, losses: 2, points: 12 },
    { team: "MI", matchesPlayed: 8, wins: 5, losses: 3, points: 10 },
    { team: "RCB", matchesPlayed: 8, wins: 4, losses: 4, points: 8 },
    { team: "DC", matchesPlayed: 8, wins: 3, losses: 5, points: 6 },
    { team: "RR", matchesPlayed: 8, wins: 2, losses: 6, points: 4 },
    { team: "SRH", matchesPlayed: 8, wins: 1, losses: 7, points: 2 },
  ];

  const tableBody = document.querySelector("#points-table tbody");

  function populateTable() {
    tableBody.innerHTML = "";
    teams.forEach((team) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${team.team}</td>
        <td>${team.matchesPlayed}</td>
        <td>${team.wins}</td>
        <td>${team.losses}</td>
        <td>${team.points}</td>
      `;
      tableBody.appendChild(row);
    });
  }

  populateTable();
});
