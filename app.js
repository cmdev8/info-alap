document.addEventListener("alpine:init", () => {
  Alpine.data("app", () => ({
    currentPage: "/",
    messages: [
      { name: "n1", message: "m1" },
      { name: "n2", message: "m2" },
    ],
    formName: "",
    formMessage: "",
    formResultMessage: "",
    adminLoggedIn: false,

    visit(page) {
      this.currentPage = page;
    },

    isActivePage(page) {
      return this.currentPage === page;
    },

    sendMessage() {
      this.messages.push({ name: this.formName, message: this.formMessage });

      this.formName = "";
      this.formMessage = "";

      this.formResultMessage =
        "Koszonjuk az uzenetet, ugysem nezzuk meg es nem is valaszolunk";
    },
  }));
});
