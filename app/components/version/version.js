'use strict';

angular.module('MCHelper.version', [
  'MCHelper.version.interpolate-filter',
  'MCHelper.version.version-directive'
])

.value('version', '0.1');
