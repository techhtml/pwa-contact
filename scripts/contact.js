const contactList = document.querySelectorAll('.contacts li');
const profileCard = document.querySelector('.profile-card');

contactList.forEach((o) => {
  o.addEventListener('touchstart', (event) => {
    profileCard.classList.add('profile-card-on');
  })
})

profileCard.querySelector('button').addEventListener('touchstart', () => {
  profileCard.classList.remove('profile-card-on');
})