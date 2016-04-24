//Entry point
defContext("main", (context, otherContexts) => {

  //What the bot would say when entering this context.
  onEntry(() => {
    if (context.isFirstEntry) {
      send({
        type: "option",
        text: "What would you like to do?"
        options: [
          "Find a job",
          "Post a job"
        ]
      })
    }
  });

  defPattern(["find a job"], () => switchContext("find-a-job"));
  defPattern(["post a job"], () => switchContext("post-a-job"));
  defPattern(["help", "help me"], () => switchContext("help"));
  defPattern(["bye", "cancel"], () => clearContexts());
});

defContext("find-a-job", () => {
  onEntry(() => switchContext("get-salary"));
})

defContext("post-a-job", () => {
  onEntry(() => switchContext("get-company"));
})

defContext("get-salary", (context, otherContexts) => {
  onEntry(() => {
    send("How much do you wanna make in a year? eg: 110k")
  });

  defPattern(/([0-9]+)/, (salary) => {
    if (salary > 10000000) {
      send(`Wow that's a lot of money ${otherContexts["main"].username}! Hahahah!!`);
    }
    context.salary = salary;
    switchContext("get-location");
  });
});

defContext("get-location", () => {
  onEntry(() => {
    send("Which city?")
  });

  //If simple regex doesn't cut it, we can define a function to do more...
  defParser((text) => {
    context.location = stanfordNLP.analyzers.getLocation(text);
    switchContext("get-job-type");
  });
})
