/**
 * Created by lixiaodong on 16/4/22.
 */
function MyController($scope) {
    $scope.clock = {
        now: new Date()
    };
    var updateClock = function() {
        $scope.clock.now = new Date()
    };
    setInterval(function() {
        $scope.$apply(updateClock);
    }, 1000);
    updateClock();
};