'use strict';

angular.module('mcHelper.version', [
  'mcHelper.version.interpolate-filter',
  'mcHelper.version.version-directive'
])

.value('version', '0.1');
