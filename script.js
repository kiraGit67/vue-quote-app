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
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.randomQuote = data.quote;
          this.randomAuthor = "- " + data.author;
        });
    },
  },
}).mount("#app");

/** 16:16 */
