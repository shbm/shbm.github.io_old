function TodoCtrl($scope) {

	$scope.todos = [];
	
	$scope.totalLength = function() {
		return $scope.todos.length;
	};

	$scope.clearCompleted = function() {
		$scope.todos = _.filter($scope.todos, function(todo) {
			return !todo.done;
		});
	};

	$scope.addTodo = function() {
		if($scope.formTodoText!='')
		$scope.todos.push({text:$scope.formTodoText, done:false});
		$scope.formTodoText = '';
	};
}