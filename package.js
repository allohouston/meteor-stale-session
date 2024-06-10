Package.describe({
    name: "zuuk:stale-session",
    summary: "Stale session and session timeout handling for meteorjs",
    git: "https://github.com/lindleycb/meteor-stale-session.git",
    version: "1.1.0",
});

Package.onUse(function (api) {
    api.versionsFrom("3.0-rc.1");

    api.use("accounts-base@3.0.0-rc300.2", ["client", "server"]);
    api.use("jquery", "client");
    api.addFiles("client.js", "client");
    api.addFiles("server.js", "server");
});
