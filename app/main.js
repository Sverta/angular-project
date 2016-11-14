

angular.module('todoApp', [])
    .controller('TodoListController', function($scope, $http) {

        var responsePromise = $http.get("http://irden-workshop.info/api/notes")
      //  responsePromise.success(function(responce, status, headers, config) {
            .then(function(response) {
                $scope.myData = response.data;
            });
           // $scope.fromServer = responce.data;
            //console.log(data);
        // });
        // responsePromise.error(function(data, status, headers, config) {
        //     alert("AJAX failed!");
        // // })
        // var todoList = this;
        // todoList.todos = [
        //     {text:'learn angular', done:true},
        //     {text:'build an angular app', done:false}];
        //
        // todoList.addTodo = function() {
        //     todoList.todos.push({text:todoList.todoText, done:false});
        //     todoList.todoText = '';
        // };


    });





















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