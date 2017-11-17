var attachTitle = (title) => "DR. " + title;

Promise.resolve("MANHATTAN").then(attachTitle).then(console.log);