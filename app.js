document.addEventListener("alpine:init", () => {
  Alpine.data("app", () => ({
    currentPage: "/",
    messages: [
      {
        name: "Leslie Alexander",
        message:
          "Explicabo nihil laborum. Saepe facilis consequuntur in eaque. Consequatur perspiciatis quam. Sed est illo quia. ",
      },
      {
        name: "Michael Foster",
        message:
          "Laudantium quidem non et saepe vel sequi accusamus consequatur et. Saepe inventore veniam incidunt cumque et ",
      },
    ],
    formName: "",
    formMessage: "",
    formResultMessage: "",

    loginEmail: "",
    loginPassword: "",
    loginError: "",
    adminLoggedIn: false,

    visit(page) {
      this.currentPage = page;
    },

    isActivePage(page) {
      return this.currentPage === page;
    },

    login() {
      if (this.loginEmail === "admin@example.com" && this.loginPassword === "123456") {
        this.adminLoggedIn = true;
        this.visit("/admin");
      } else {
        this.loginError = "Hibás adatok";
      }
    },

    logout() {
      this.loginError = "";
      this.loginEmail = "";
      this.loginPassword = "";
      this.adminLoggedIn = false;
      this.visit("/");
    },

    sendMessage() {
      if (this.formName == "" || this.formMessage == "") {
        this.formResultMessage = "A nevet és az üzenetet kötelező kitölteni!";
        return;
      }
      this.messages.push({ name: this.formName, message: this.formMessage });

      this.formName = "";
      this.formMessage = "";

      this.formResultMessage = "Köszönjük az üzenetet!";
    },
  }));
});
