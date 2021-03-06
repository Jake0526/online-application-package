Package.describe({
    name: "online-application-package",
    version: "0.0.1",
    // Brief, one-line summary of the package.
    summary: "",
    // URL to the Git repository containing the source code for this package.
    git: "",
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: "README.md"
  });
  
Package.onUse((api) => {
  api.versionsFrom('1.8.0.2');
  api.use('ecmascript@0.10.0');
  api.use('meteor@1.8.4');
  api.use('smart-template');

  api.mainModule("client/main.js", "client");
  api.mainModule("server/main.js", "server");
});
