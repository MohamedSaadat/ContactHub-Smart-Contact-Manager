// ------------------------ #1 Initialization ------------------------
// quick-stats
var totalContact = document.getElementById("totalContact");

// contactsArea search input
var search = document.getElementById("search");

// favorites & emergency
var favoriteBody = document.getElementById("favoriteBody");
var totalFavorite = document.getElementById("totalFavorite");
var favoriteEmptyBody = document.getElementById("favoriteEmptyBody");
var emergencyBody = document.getElementById("emergencyBody");
var totalEmergency = document.getElementById("totalEmergency");
var emergencyEmptyBody = document.getElementById("emergencyEmptyBody");

// add contact
var theAllContacts = document.getElementById("theAllContacts");
var contactsEmpty = document.getElementById("contactsEmpty");
var addContact = document.getElementById("addContact");
var contactForm = document.getElementById("contactForm");
var contactFormContainer = document.getElementById("contactFormContainer");
var fullName = document.getElementById("fullName");
var phoneNumber = document.getElementById("phoneNumber");
var emailAddress = document.getElementById("emailAddress");
var address = document.getElementById("address");
var group = document.getElementById("group");
var notes = document.getElementById("notes");
var favorite = document.getElementById("favorite");
var emergency = document.getElementById("emergency");
var saveBTN = document.getElementById("btnSave");
var cancelBTN = document.getElementById("btnCancel");
var closeBTN = document.getElementById("btnClose");

// localStorage
var myContacts = [];
var storage = JSON.parse(localStorage.getItem("my contacts"));
// ----------------------- #2 Clear inputs ---------------------------
function clear() {
  fullName.value = "";
  phoneNumber.value = "";
  emailAddress.value = "";
  address.value = "";
  group.value = "";
  notes.value = "";
  favorite.checked = false;
  emergency.checked = false;
}
// -------------------- #3 add new contact ---------------------------
function addNewContact() {
  var newContact = {
    name: fullName.value,
    phone: phoneNumber.value,
    email: emailAddress.value,
    address: address.value,
    group: group.value,
    notes: notes.value,
    favorite: true,
    emergency: true,
  };
  // checkbox is checked or not
  newContact.favorite = favorite.checked ? true : false;
  newContact.emergency = emergency.checked ? true : false;
  myContacts.push(newContact);
  clear();
  retrieveMyContacts();
}
// ------------- #4 Display Data (Retrieve & localStorage) -----------
function retrieveMyContacts() {
  localStorage.setItem("my contacts", JSON.stringify(myContacts));
  var allContacts = ``;
  var allFavorite = ``;
  var allEmergency = ``;
  var favoriteCount = 0;
  var emergencyCount = 0;
  for (let i = 0; i < myContacts.length; i++) {
    allContacts += `
      <div class="col py-0">
          <div class="card p-0 cursor">
              <!-- card-body -->
              <div class="card-body px-3 pt-3 d-flex flex-column gap-3">
                  <!-- name & number -->
                  <div class="d-flex align-items-center gap-3">
                      <!-- icon -->
                      <div
                          class="d-flex align-items-center justify-content-center p-3 position-relative rounded rounded-3 bg-info">
                          <h3 class="text-uppercase">vh</h3>
                          <div
                              class="favorites d-flex align-items-center justify-content-center position-absolute p-1 rounded rounded-circle">
                              <i class="fa-solid fa-star" style="color: #ffffff;"></i>
                          </div>
                          <div
                              class="emergency d-flex align-items-center justify-content-center position-absolute p-1 rounded rounded-circle">
                              <i class="fa-solid fa-heart-pulse" style="color: #ffffff;"></i>
                          </div>
                      </div>
                      <!-- text -->
                      <div>
                          <h4 class="fs-6 fw-semibold text-capitalize mb-2">${myContacts[i].name}</h4>
                          <div class="number d-flex align-items-center gap-1 fs-14">
                              <div
                                  class="d-flex align-items-center justify-content-center rounded rounded-2 p-2 bg-info-subtle">
                                  <i class="fa-solid fa-phone" style="color: #155dfc;"></i>
                              </div>
                              <span class="text-gray">${myContacts[i].phone}</span>
                          </div>
                      </div>
                  </div>
                  <!-- email -->
                  <div>
                      <div class="d-flex align-items-center gap-2 fs-14">
                          <div
                              class="d-flex align-items-center justify-content-center rounded rounded-2 p-2 bg-violet-subtle">
                              <i class="fa-solid fa-envelope" style="color: #7f22fe;"></i>
                          </div>
                          <span class="text-gray">${myContacts[i].email}</span>
                      </div>
                  </div>
                  <!-- location -->
                  <div>
                      <div class="d-flex align-items-center gap-2 fs-14">
                          <div
                              class="d-flex align-items-center justify-content-center rounded rounded-2 p-2 bg-green-subtle">
                              <i class="fa-solid fa-location-dot text-green"></i>
                          </div>
                          <span class="text-capitalize text-gray">${myContacts[i].address}</span>
                      </div>
                  </div>
                  <div class="d-flex gap-2">
                      <div
                          class="rounded rounded-2 py-1 px-2 d-flex align-items-center gap-1 text-green fs-11 bg-green-subtle">
                          <span class="text-capitalize fw-medium">${myContacts[i].group}</span>
                      </div>
                      <div
                          class="rounded rounded-2 py-1 px-2 d-flex align-items-center gap-1 text-red fs-11 bg-red-subtle">
                          <i class="fa-solid fa-heart-pulse"></i>
                          <span class="text-capitalize fw-medium">emergency</span>
                      </div>
                  </div>
              </div>
              <!-- card-footer -->
              <div class="card-footer py-2 px-3">
                  <div class="d-flex align-items-center justify-content-between">
                      <div class="d-flex align-items-center gap-2">
                          <a
                              href="tel:+201012345678" class="call rounded rounded-3 d-flex align-items-center justify-content-center link-underline link-underline-opacity-0">
                              <i class="fa-solid fa-phone"></i>
                          </a>
                          <a
                              href="mailto:xuretedip@mailinator.com" class="email rounded rounded-3 d-flex align-items-center justify-content-center link-underline link-underline-opacity-0">
                              <i class="fa-solid fa-envelope"></i>
                          </a>
                      </div>
                      <div class="d-flex align-items-center gap-2">
                          <div
                              class="addToFavorites rounded rounded-3 d-flex align-items-center justify-content-center">
                              <i class="fa-regular fa-star"></i>
                          </div>
                          <div
                              class="addToEmergency rounded rounded-3 d-flex align-items-center justify-content-center">
                              <i class="fa-regular fa-heart"></i>
                          </div>
                          <div
                              class="update rounded rounded-3 d-flex align-items-center justify-content-center">
                              <i class="fa-solid fa-pen"></i>
                          </div>
                          <div
                              class="delete rounded rounded-3 d-flex align-items-center justify-content-center">
                              <i class="fa-solid fa-trash"></i>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    `;
    if (myContacts[i].favorite) {
      favoriteCount++;
      allFavorite += `
        <div class="contact d-flex align-items-center p-2 rounded rounded-3">
            <div class="user icon me-2">
                <p class="text-uppercase">ms</p>
            </div>
            <div class="content">
                <p class="fw-semibold text-start">${myContacts[i].name}</p>
                <p class="fs-11 text-gray">${myContacts[i].phone}</p>
            </div>
            <div
                class="call rounded rounded-3 d-flex align-items-center justify-content-center ms-auto">
                <i class="fa-solid fa-phone"></i>
            </div>
        </div>
      `;
    }
    if (myContacts[i].emergency) {
      emergencyCount++;
      allEmergency += `
        <div class="contact d-flex align-items-center p-2 rounded rounded-3">
            <div class="user icon me-2">
                <p class="text-uppercase">ms</p>
            </div>
            <div class="content">
                <p class="fw-semibold text-start">${myContacts[i].name}</p>
                <p class="fs-11 text-gray">${myContacts[i].phone}</p>
            </div>
            <div
                class="call rounded rounded-3 d-flex align-items-center justify-content-center ms-auto">
                <i class="fa-solid fa-phone"></i>
            </div>
        </div>
      `;
    }
  }
  //this for display all contacts (card & number)
  totalContact.innerHTML = myContacts.length;
  theAllContacts.innerHTML = allContacts;
  if (myContacts.length == 0) {
    contactsEmpty.classList.remove("d-none");
  }

  //this for display favorite contacts (card & number)
  totalFavorite.innerHTML = favoriteCount;
  favoriteBody.innerHTML = allFavorite;
  if (favoriteCount == 0) {
    favoriteEmptyBody.classList.remove("d-none");
  }

  //this for display emergency contacts (card & number)
  totalEmergency.innerHTML = emergencyCount;
  emergencyBody.innerHTML = allEmergency;
  if (emergencyCount == 0) {
    emergencyEmptyBody.classList.remove("d-none");
  }
}
// -------------------------------------------------------------------
// --------------------------- Events --------------------------------
// first loading
if (storage) {
  myContacts = storage;
  retrieveMyContacts();
} else {
  console.log("no storage");
  contactsEmpty.classList.remove("d-none");
  favoriteEmptyBody.classList.remove("d-none");
  emergencyEmptyBody.classList.remove("d-none");
}
// add contact
addContact.addEventListener("click", function () {
  contactForm.classList.remove("d-none");
});
saveBTN.addEventListener("click", function () {
  addNewContact();
});
// close form
closeBTN.addEventListener("click", function () {
  contactForm.classList.add("d-none");
});
cancelBTN.addEventListener("click", function () {
  contactForm.classList.add("d-none");
});
// this event for close the form by click any where out the form (bubbling)
contactFormContainer.addEventListener("click", function (e) {
  e.stopPropagation();
});
contactForm.addEventListener("click", function () {
  contactForm.classList.add("d-none");
});
