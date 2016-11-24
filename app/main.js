(function(){
    let app = angular.module('todoApp', ['ui.router']);

    app.service('myDataService', ['$http', function ($http) {
        this.getData = () => $http.get('http://irden-workshop.info/api/feedback').then(
            success => success.data,
            error => console.warn('error', error)
        );
    }]);

    app.controller('TodoListController', function(myDataService) {
        myDataService.getData().then(
            (resp) => {
                this.data = resp;
            });
    });
})();
// app.service('response',function () {
//         this.data = function (x) {
//             return x.title;
//         }
//     });
//
//     app.controller('TodoListController', function($scope, $http) {
//         var responsePromise = $http.get("http://irden-workshop.info/api/feedback").then(function(response) {
//                 $scope.myData = response.data;
//             });
//     });

// todoList.remaining = function() {
//     var count = 0;
//     angular.forEach(todoList.todos, function(todo) {
//         count += todo.done ? 0 : 1;
//     });
//     return count;
// };

// todoList.archive = function() {
//     var oldTodos = todoList.todos;
//     todoList.todos = [];
//     angular.forEach(oldTodos, function(todo) {
//         if (!todo.done) todoList.todos.push(todo);
//     });
// };
