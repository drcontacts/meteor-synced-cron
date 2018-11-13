Package.describe({
  summary: 'Fork of original w/ timezone + node mongo driver v3 support. Scheduled jobs across multiple servers.',
  version: '1.2.12',
  name: 'flean:timezoned-synced-cron',
  git: 'https://github.com/flean/meteor-synced-cron'
});

Npm.depends({later: '1.1.6', timezone:'0.0.41'});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.1.1');
  api.use(['underscore', 'check', 'mongo', 'logging'], 'server');
  api.addFiles(['synced-cron-server.js'], 'server');
  api.export(['SyncedCron'], 'server');
});

Package.onTest(function(api) {
  api.use(['saucecode:timezoned-synced-cron', 'tinytest']);
  api.addFiles('synced-cron-tests.js', ['server']);
});
