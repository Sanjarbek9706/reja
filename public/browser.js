console.log("FrontEnd JS ishga tushdi");

function itemTemplate(item) {
  return `<li style="background: green"
  class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
          <span class=" item-text">${item.reja}</span>
          <div>
            <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1">O'zgartirish</button>
            <button data-id="${item._id}" class="delete-me  btn btn-danger btn-sm">Delete</button>
          </div>
        </li>`;
}

let createField =
  document.getElementById(
    "create-field",
  );

document
  .getElementById("create-form")
  .addEventListener(
    "submit",
    function (e) {
      //Traditional API  toxtadish
      e.preventDefault();
      //frontendan =>BS dan axios orqali rest API bog'laymiz
      axios
        .post("/create-item", {
          reja: createField.value,
        })
        .then((response) => {
          document
            .getElementById("item-list")
            .insertAdjacentHTML(
              //HTML elementiga yangi kontent qoshadi  saxifani yangilamasdan
              "beforeend", // listni eng patidan qo'sh
              itemTemplate(
                // malumotni chiroyli qilib HTML formatga keltirib beradi
                response.data, //bu serverdan kelgan malumot
              ),
            );
          createField.value = "";
          createField.focus();
        })
        .catch((err) => {
          console.log(
            "Iltimos qayta xarakat qiling",
          );
        });
    },
  );

document.addEventListener(
  "click",
  function (e) {
    // delete oper
    console.log(e.target);
    if (
      e.target.classList.contains(
        "delete-me",
      )
    ) {
      alert(
        "siz delete tugmasini bosdingiz",
      );
      console.log({
        id: e.target.getAttribute(
          "data-id",
        ),
      });
      if (
        confirm(
          "Aniq o'chirmoqchimisiz?",
        )
      ) {
        axios
          .post("/delete-item", {
            id: e.target.getAttribute(
              "data-id",
            ),
          })
          .then((response) => {
            console.log(response.data);
            e.target.parentElement.parentElement.remove();
          })
          .catch((err) => {
            console.log(
              "qayta harakat qiling",
            );
          });
      }
    }

    //edit oper
    if (
      e.target.classList.contains(
        "edit-me",
      )
    ) {
      let userInput = prompt(
        "Siz aniq o'zgartirish kiritmoqchimisiz!",
        e.target.parentElement.parentElement.querySelector(
          ".item-text",
        ).innerHTML,
      );
      if (userInput) {
        axios
          .post("/edit-item", {
            id: e.target.getAttribute(
              "data-id",
            ),
            new_input: userInput,
          })
          .then((response) => {
            console.log(response.data);
            e.target.parentElement.parentElement.querySelector(
              ".item-text",
            ).innerHTML = userInput;
          })
          .catch((err) => {
            console.log(
              "Qaytadan urinib ko'ring!",
            );
          });
      }
    }
  },
);

document
  .getElementById("clean-all")
  .addEventListener(
    "click",
    function () {
      if (
        confirm(
          "Siz rostan hamma rejalrni o'chirmoqchimisiz?",
        )
      ) {
        axios
          .post("/delete-all", {
            delete_all: true,
          })
          .then((response) => {
            alert("Axmoq ekansiz");
            // alert(response.data.state);
            document.location.reload();
          })
          .catch((err) => {
            console.log(
              "Indi foydasi yoq",
            );
          });
      }
    },
  );
