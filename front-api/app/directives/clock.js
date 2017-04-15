angular.module('app').directive("digitalClock", function($timeout, dateFilter) {
  return {
    restrict: 'E',
    link: function(scope, iElement) {
      (function updateClock() {
        iElement.text(dateFilter(new Date(), 'H:mm:ss'));
        $timeout(updateClock, 1000);
      })();
    }
  };
});