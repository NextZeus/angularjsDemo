/**
 * Created by lixiaodong on 16/4/25.
 */

angular.module("myApp",[])
    .controller('MyController', function ($scope,$parse) {
        $scope.$watch('expr', function (newVal,oldVal,scope) {
            console.log('newVal-->>',newVal);
            console.log('oldVal-->>',oldVal);
            console.log('scope-->>',scope);

            if(newVal !== oldVal){
                var parseFun = $parse(newVal);
                $scope.parsedValue = parseFun(scope);
            }
        })
});