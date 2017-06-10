(function(window,angular){

    var app=angular.module('myTodo',[]);
        app.controller("todoCtrl",function($scope){
            /*创建数据*/
            $scope.todoList=[
                {text:'css',status:true},
                {text:'angular',status:true},
                {text:'html5',status:true}
            ]
            /*输入框的值*/
            $scope.todoText='';
            $scope.addTodo=function(){
                /*判断添加输入框的值是否为空*/
                if($scope.todoText){
                    console.log('添加触发了');
                    /*回车添加任务*/
                    $scope.todoList.push({text:$scope.todoText,status:false});
                    /*并且让输入框的值为空*/
                    $scope.todoText='';
                }

            }

        })


})(window,angular)