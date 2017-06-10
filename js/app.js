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

            /*添加数据*/
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


            /*删除数据*/
            $scope.removeTodo=function(todo){
                console.log('删除触发了');
                console.log(todo);

                /*获取点击的数据在todoList数组中索引*/
                var index=$scope.todoList.indexOf(todo);
                console.log(index);
                /*根据索引从todoList数组中移除点击的数据*/
                $scope.todoList.splice(index,1);

            }



        })


})(window,angular)