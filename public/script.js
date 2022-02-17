const membershipsResults = document.getElementById('memberships-blocks-area');
const usersResults = document.getElementById('users-blocks-area');
const createForm = document.querySelector('.create-membership-form');
const URL = 'http://localhost:3000';

// const membershipTitleElement = document.querySelector('#membership-title');
// const membershipDescriptionElement = document.querySelector(
//   '#membership-description'
// );

fetch(`${URL}/memberships`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.data.map((info) => {
      // console.log(info);
      const singleMembershipContainer = document.createElement('div');
      singleMembershipContainer.classList.add('membership-container');
      membershipsResults.append(singleMembershipContainer);
      const membershipTitleText = document.createElement('h2');
      membershipTitleText.classList.add('membership-title-text');
      membershipTitleText.textContent = `$${info.price} ${info.name}`;
      const membershipDescriptionText = document.createElement('p');
      membershipDescriptionText.classList.add('membership-description-text');
      membershipDescriptionText.textContent = `${info.description}`;
      singleMembershipContainer.append(
        membershipTitleText,
        membershipDescriptionText
      );
      const hLine = document.createElement('div');
      hLine.classList.add('h-line');
      hLine.innerHTML = `<hr>`;
      membershipDescriptionText.append(hLine);
      const trashButton = document.createElement('button');
      trashButton.classList.add('trash-btn');
      // trashButton.textContent = 'Delete';
      trashButton.innerHTML = `<i class="fa fa-trash" aria-hidden="true"></i>`;
      singleMembershipContainer.append(trashButton);

      // membershipTitleElement.textContent = `${info.price} ${info.name}`;
      // membershipDescriptionElement.textContent = `${info.description}`;
    });
  });

createForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const membName = createForm.querySelector("input[id='name']").value;
  const membPrice = createForm.querySelector("input[id='price']").value;
  const membDescr = createForm.querySelector(
    "textarea[name='description']"
  ).value;
  const dataToSend = {
    name: membName,
    price: membPrice,
    description: membDescr,
  };

  fetch(`${URL}/memberships`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataToSend),
  })
    .then((resp) => resp.text())
    .then(() => alert('Membership created'))
    .catch((err) => console.warn(err));
});

fetch(`${URL}/users`)
  .then((res) => res.json())
  .then((arrData) => {
    // console.log(arrData);
    arrData.data.map((info) => {
      const singleUserContainer = document.createElement('div');
      singleUserContainer.classList.add('user-container');
      usersResults.append(singleUserContainer);
      const userNameText = document.createElement('h3');
      userNameText.classList.add('user-name-text');
      userNameText.textContent = `${info.name} ${info.surname}`;
      const userEmailText = document.createElement('a');
      userEmailText.classList.add('user-email-text');
      userEmailText.innerHTML = `Email Address: <a href="mailto:${info.email}">${info.email}</a>`;
      const userMembershipText = document.createElement('p');
      userMembershipText.classList.add('user-membership-text');
      userMembershipText.textContent = `Membership: ${info.service_id}`;
      const userIp = document.createElement('p');
      userIp.classList.add('user-ip');
      userIp.textContent = `ip: `;
      singleUserContainer.append(
        userNameText,
        userEmailText,
        userMembershipText,
        userIp
      );
    });
  });

// function makeUserCards(data, dest) {
//   dest.innerHTML = data.data
//     .map((card) => {
//       return `
//         <article class="card">
//           <h4>${card.name} ${card.surname} </h4>
//           <p>Email Address: ${card.email}</p>
//           <p>Membership: ${card.service_id}</p>
//           <p>ip: ...</p>

//         </article>
//       `;
//     })
//     .join('');
// }

// async function getMemberships() {
//   const resp = await fetch(`${URL}/users`);
//   const fetchData = await resp.json();
//   console.log('fetchData ===', fetchData);
//   makeUserCards(fetchData.data.data, usersResults);
// }
