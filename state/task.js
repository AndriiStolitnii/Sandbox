function taskCreator(title, description, assignee) {
    return {
        title: title,
        description: description,
        assignee: assignee,
        getTitle: function () {
            return this.title;
        }
    };
}

var task = taskCreator('Title 1', 'Description', 'Roman');
var task2 = taskCreator('Title 2', 'Description 2', 'Dmitry');

console.log(task.getTitle(), task2.getTitle());