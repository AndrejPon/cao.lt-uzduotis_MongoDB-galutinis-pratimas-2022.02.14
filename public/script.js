const results = document.getElementById('memberships-blocks-area');
const URL = 'http://localhost:3000';

// const membershipTitleElement = document.querySelector('#membership-title');
// const membershipDescriptionElement = document.querySelector(
//   '#membership-description'
// );

fetch(`${URL}/memberships`)
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    data.data.map((info) => {
      // console.log(info);
      const singleMembershipContainer = document.createElement('div');
      singleMembershipContainer.classList.add('membership-container');
      results.append(singleMembershipContainer);
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
      trashButton.textContent = 'Delete';
      singleMembershipContainer.append(trashButton);

      // membershipTitleElement.textContent = `${info.price} ${info.name}`;
      // membershipDescriptionElement.textContent = `${info.description}`;
    });
  });
