const generateTeam = team => {

    // Generate manager card
    const generateManager = manager => {
        return `
        <div class = "column is-3">
        <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">
            <h5>
                ${manager.getName()} <br>
                <span class="badge badge-pill badge-danger"> ${manager.getRole()}</span>
            </h5>
          </div>
          <p class="card-text">
            <ul>
              <li>Employee ID: ${manager.getId()}</li>
              <li>Email: <a href = "mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
              <li>Office Number: ${manager.getOffice()}</li>
            </ul>
          </p>
        </div>
      </div>
        `;
    };

    // Generate engineer card
    const generateEngineer = engineer => {
        return `
        <div class = "column is-3">
        <div class = "card">
          <header class = "card-header">
            <p class = "card-content">
              ${engineer.getName()} <br> <span class="badge badge-primary"> ${engineer.getRole()}</span>
            </p>
            </header>
            <div class = "card-content">
              <ul>
                <li>Employee ID: ${engineer.getId()}</li>
                <li>Email: <a href = "mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li>GitHub Profile: <a href = "https://www.github.com/${engineer.getGithub()}/">${engineer.getGithub()}</a></li>
              </ul>
            </div>
          </div>
        </div>
        `;
    };

    // Generate intern card
    const generateIntern = intern => {
        return `
        <div class = "column is-3">
        <div class = "card">
          <header class = "card-header">
            <p class = "card-content">
              ${intern.getName()} <br> <span class="badge badge-success"> ${intern.getRole()}</span>
            </p>
            </header>
            <div class = "card-content">
              <ul>
                <li>Employee ID: ${intern.getId()}</li>
                <li>Email: <a href = "mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li>School: ${intern.getSchool()}</li>
              </ul>
            </div>
          </div>
        </div>
        `;
    };

    const cards = [];

    // Add the manager card
    cards.push(
        team.filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    
    // Add engineers cards
    cards.push(
        team.filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    
    // Add interns cards
    cards.push(
        team.filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    // creating HTML text to be inserted in the index.html page
    return cards.join("");

}

module.exports = (team) => {
    return `
    
<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
      <title>Team Profile Builder</title>
      </head>
  <body>
  <div class="jumbotron bg-dark text-white m3">
  <div class="container text-center">
    <h1 class="display-4">MY-TEAM</h1>
  </div>
</div>
  <main>
   <div class="d-flex justify-content-around">
    ${generateTeam(team)}
   </div>
  </main>
  </body>
  </html>
    `;
};
