"use strict";

Vue.createApp({
  data() {
    return {
      apiURL: "https://dummy-apis.netlify.app/api/quote",
      randomQuote: "",
      randomAuthor: "",
      defaultQuote: "1. Make It Work.\n2. Make It Work Better.",
      defaultAuthor: "Nico König",
    };
  },
  computed: {
    checkIfEmpty() {
      return this.randomQuote === "" && this.randomAuthor === "";
    },
  },
  methods: {
    getQuote() {
      const quote = fetch(this.apiURL);

      quote
        .then(
          (response) => {
            console.log(response.ok);
            return response.json();
          },
          (err) => {
            debugger;
            console.log("Fehler aufgetreten: ", err);
          }
        )
        .then((data) => {
          this.randomQuote = data.quote;
          this.randomAuthor = "- " + data.author;
        });
    },
    async getNewQuote() {
      const response = await fetch(this.apiURL);
      const quoteData = await response.json();
      this.randomQuote = quoteData.quote;
      this.randomAuthor = "- " + quoteData.author;
    },
  },
}).mount("#app");

/** 16:16 */
